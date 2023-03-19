<template>
  <div class="continent">
    <h2>{{ continent.name }}</h2>
    <div class="card">
      <div class="continent_img">
        <img :src="`${require('@/assets/' + continent.img)}`" alt="" />
      </div>
      <div class="info">
        <p>
          {{ continent.p1 }}
        </p>
        <p>
          {{ continent.p2 }}
        </p>
        <p>
          {{ continent.p3 }}
        </p>
        <div class="priceButton">
          <Converter
            moeda-a="USD"
            :moeda-b="continent.name"
            :price="continent.price"
          />
          <div class="statics">
            <div class="staticsIcon">
              <img src="@/assets/statics.png" alt="" />
            </div>
            <div class="dollar">{{ continent.price }} <span>$</span></div>
            <span>online</span>
          </div>

          <router-link :to="`/${continent.id}`">
            <button class="my_button">see all</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Converter from "@/components/Converter.vue";
export default {
  name: "cont-inent",
  props: {
    continent: {
      type: Object,
    },
  },
  components: {
    Converter,
  },
};
</script>

<style scoped lang="scss">
.continent {
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 2px solid #0a4e9b;

  h2 {
    color: #0a4e9b;
  }
  .card {
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: space-between;
    font-size: 18px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    .continent_img {
      display: flex;
      box-shadow: 0px 10px 20px 8px rgb(132, 189, 223);
      width: 450px;
      img {
        width: 100%;
      }
    }
    .info {
      width: 60%;
      p {
        margin-top: 20px;
        color: rgb(23, 123, 236);
      }
    }
    .priceButton {
      display: flex;
      align-items: center;
      margin-top: 60px;
      justify-content: space-between;
      .my_button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background: #0a4e9b;
        color: white;
        cursor: pointer;
      }

      button:hover {
        transform: scale(1.0863);
        opacity: 0.79;
      }
      .statics {
        display: flex;
        align-items: center;
        gap: 12px;
        .staticsIcon {
          width: 40px;
        }
        > span {
          color: #3e89df;
        }
        .dollar {
          display: flex;
          align-items: center;
          gap: 5px;
          span {
            font-size: 22px;
          }
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
@media only screen and (max-width: 1480px) {
  .continent {
    .card {
      font-size: 18px;
      .info {
        width: 52%;
      }
    }
  }
}
@media only screen and (max-width: 1280px) {
  .continent {
    .card {
      font-size: 15px;
      margin-top: 17px;
      .info {
        width: 57%;
        .priceButton {
          margin-top: 20px;
          .statics {
            gap: 6px;
            .staticsIcon {
              width: 30px;
            }
          }
          .my_button {
            padding: 10px 14px;
          }
        }
      }
      .continent_img {
        width: 380px;
      }
      .info {
        p {
          margin-top: 10px;
        }
      }
    }
  }
}
@media only screen and (max-width: 1080px) {
  .continent {
    .card {
      .priceButton {
        margin-top: 16px;
      }
      .continent_img {
        width: 315px;
      }
    }
  }
}
@media only screen and (max-width: 880px) {
  .continent {
    .card {
      font-size: 13px;
      .priceButton {
        margin-top: 16px;
        .statics {
          gap: 4px;
        }
      }
      .continent_img {
        width: 250px;
      }
      .info {
        width: 61%;
        p {
          margin-top: 8px;
        }
      }
    }
  }
}
@media only screen and (max-width: 790px) {
  .continent {
    padding-top: 30px;
    padding-bottom: 30px;
    h2 {
      text-align: center;
    }
    .card {
      flex-direction: column;
      font-size: 16px;
      .info {
        margin-top: 20px;
      }
      .continent_img {
        width: 60%;
      }
      .info {
        width: 100%;
      }
    }
  }
}
@media only screen and (max-width: 500px) {
  .continent {
    padding-top: 22px;
    padding-bottom: 24px;
    h2 {
    }
    .card {
      font-size: 13px;
      .info {
        .priceButton {
          flex-direction: column;
          gap: 10px;
          .statics{
            gap: 30px;
          }
          a{
            width: 60%;
          .my_button{
            width: 100%;
           padding: 12px 35px;
          }}
        }
      }
      .continent_img {
        width: 80%;
      }
      .info {
      }
    }
  }
}
</style>
