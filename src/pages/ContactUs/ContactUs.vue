<template>
  <div>
    <section class="contact_us">
      <div class="container">
        <div class="contact_field">
          <h3>Contatc Us</h3>
          <p>
            Feel Free to contact us any time. We will get back to you as soon as
            we can!.
          </p>
          <input
            type="text"
            class="form-control form-group"
            placeholder="Name"
            v-model="payload.name"
            @input="setName"
            :class="{ 'error-input': $v.payload.name.$error }"
          />
          <input
            type="text"
            class="form-control form-group"
            placeholder="Email"
            v-model="payload.email"
            @input="setEmail"
            :class="{ 'error-input': $v.payload.email.$error }"
          />
          <textarea
            class="form-control form-group"
            placeholder="Message"
            v-model="payload.message"
            @input="setMessage"
            :class="{ 'error-input': $v.payload.message.$error }"
          ></textarea>
          <button class="contact_form_submit">Send</button>
        </div>
        <div class="contact_info_sec">
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            eos quia, laborum eum eveniet maiores.
          </p>
          <h4>Contact Info</h4>
          <div class="links">
            <div><img src="@/assets/phone.png" alt="" /></div>
            <span>+91 8009 054294</span>
          </div>
          <div class="links">
            <div><img src="@/assets/mail.png" alt="" /></div>
            <span>info@flightmantra.com</span>
          </div>
          <div class="links">
            <div><img src="@/assets/instagram.png" alt="" /></div>
            <span>instagram</span>
          </div>
          <div class="links">
            <div><img src="@/assets/facebook.png" alt="" /></div>
            <span>instagram</span>
          </div>
       
        </div>
      </div>
    </section>

    <section class="map_sec">
      <div class="">
        <div class="">
          <div class="">
            <div class="map_inner">
              <h4>Find Us on Google Map</h4>
              <p>Map of Armenia</p>
              <div class="map_bind">
                <iframe
                  width="1348"
                  height="510"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=yerevan&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  name: "contuct-us",
  mixins: [validationMixin],
  validations: {
    payload: {
      name: { required },
      message: { required },
      email: { required },
    },
  },
  data() {
    return {
      payload: {
        email: null,
        message: null,
        name: null,
      },
    };
  },
  methods: {
    setName() {
      this.$v.payload.name.$touch();
    },
    setMessage() {
      this.$v.payload.message.$touch();
    },
    setEmail() {
      this.$v.payload.email.$touch();
    },
    handleChangeInput(data) {
      console.log(data);
      console.log(this.$v.payload);
      this.$v.payload.$touch();
      this.payload = data.value;
    },
    computeErrorMsg() {
      if (!this.$v.payload.error) {
        return "Field is required.";
      }
    },
  },
};
</script>

<style lang="scss">
.contact_us {
  background-color: #c3d7f1;
  padding: 6% 0 6% 8%;
  .container {
    display: flex;
    justify-content: space-between;
    .contact_field {
      width: 40%;
      h3 {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 1em;
      }

      p {
        font-size: 1em;
        margin-bottom: 2em;
      }

      .form-control {
        width: 100%;
        font-size: 1em;
        width: 100%;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        background-color: #f8f8f8;
        resize: none;
        border-radius: 5px;
        margin-bottom: 1em;
        border: none;
        border-bottom: 1px solid #ccc;
        &:focus {
          box-shadow: none;
          outline: none;
          border-bottom: 2px solid #1325e8;
        }
        &.form-control::placeholder {
          font-size: 13px;
          letter-spacing: 1px;
        }
      }

      .form-group {
        margin-bottom: 1em;
      }
      .error-input {
        border: 2px solid red !important;
      }
      .contact_form_submit {
        background-color: #0a2445;
        color: #fff;
        padding: 0.5em 1em;
        border: none;
        border-radius: 5px;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: #1d4e5e;
        }
      }
    }
  }
  .contact_info_sec {
    background-color: #0a2445;
    color: white;
    width: 340px;
    padding: 40px;
    border-radius: 25px 0 0 25px;
    .links {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 10px;
      div {
        display: flex;
        width: 20px;
        height: 20px;
        img {
          width: 100%;
        }
      }
    }
    h4 {
      padding: 15px 0px;
    }
  }
}
.map_sec {
  background-color: #c3d7f1;
  position: relative;
  padding: 40px;
  .map_inner {
    text-align: center;
  }
  h4 {
    margin-bottom: 20px;
  }

  .map_bind {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    padding: 15px;
    overflow: hidden;
    iframe {
      border-radius: 30px;
      box-shadow: 0px 0px 15px 0px rgb(26, 166, 190);
    }
  }
}
@media only screen and (max-width: 1100px) {
  .contact_us {
    .contact_info_sec {
      width: 250px;
    }
  }
}
@media only screen and (max-width: 720px) {
  .contact_us {
    padding: 4% 0 4% 6%;
    .container {
      .contact_field {
        h3 {
          margin-bottom: 15px;
        }
        p {
          margin-bottom: 12px;
          font-size: 15px;
        }
        .form-group {
          margin-bottom: 12px;
        }
        .form-control {
          padding: 12px 17px;
        }
      }
    }

    .contact_info_sec {
      width: 200px;
    }
  }
}
@media only screen and (max-width: 550px) {
  .contact_us { 
    padding: 4% 6%;
    .container { 
      flex-direction: column;
      .contact_info_sec { 
        padding: 30px 20px;
        width: 92%;
        margin-top: 20px;
        border-radius: 25px ;
        p {
          font-size: 14px;
        }
        h4 {
          padding: 12px 0px;
        }
        .links {
          font-size: 14px;
        }
      }
      .contact_field{
        width: 100%;
      }
    }
  }
  .map_sec{
    padding: 30px;
    .map_bind{
      margin-top: 0px;
      iframe{
        height: 300px;
      }
    }
  }
}
@media only screen and (max-width: 375px) {
  .contact_us { 
    
    .container {  
      .contact_info_sec {  
        width: 87%; 
        
      }
      
    }
  }
  .map_sec{
    padding: 10px;
    .map_bind{
      margin-top: 0px;
      iframe{
        height: 250px;
        width: 260px;
      }
    }
  }
}
</style>
