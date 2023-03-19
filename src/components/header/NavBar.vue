<template>
  <div class="nav_bar">
    <div>
      <div class="logo">
        <router-link to="/"
          ><img src="@/assets/logo1.png" alt=""
        /></router-link>
      </div>
      <div class="search_bar"></div>
    </div>
    <div class="right_section">
      <router-link to="/">Home</router-link>
      <router-link to="/catalog">Catalog</router-link>
      <router-link to="/about_us">About Us</router-link>
      <div class="search_bar" v-click-outside="onClickOutside">
        <input
          type="text"
          placeholder="Search"
          @input="debounce"
          :value="searchText"
        />
        <span
          ><svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8047 10.7383C19.7905 12.4097 19.2048 14.2759 18.0119 15.9405C17.8304 16.1947 17.8214 16.3267 18.0516 16.5546C20.0491 18.5327 22.0309 20.5287 24.0224 22.5104C24.3846 22.8703 24.5945 23.2715 24.4581 23.7851C24.2121 24.7134 23.1174 24.9848 22.4066 24.2897C21.461 23.3622 20.532 22.4152 19.5947 21.4817C18.5083 20.3952 17.4158 19.3147 16.3398 18.217C16.1373 18.0108 16.0136 18.0153 15.7842 18.1795C10.2978 22.0928 2.63989 19.3867 0.851579 12.9098C-0.729784 7.18268 3.19926 1.40384 9.11006 0.758252C14.8274 0.133655 19.8009 4.59881 19.8047 10.7383ZM17.4053 10.3717C17.4123 8.45651 16.6604 6.61655 15.3143 5.25434C13.9681 3.89213 12.1371 3.11858 10.222 3.10293C6.20977 3.07594 2.92782 6.2904 2.90008 10.2727C2.88685 12.1966 3.63844 14.0469 4.9895 15.4167C6.34055 16.7865 8.18041 17.5634 10.1043 17.5766C12.0282 17.5899 13.8786 16.8383 15.2483 15.4872C16.6181 14.1362 17.3951 12.2963 17.4083 10.3724L17.4053 10.3717Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </div>
    <button class="burger" @click="openNavBar">
      <svg
        fill="none"
        height="44"
        viewBox="0 0 24 24"
        width="44"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H20M4 12H12M4 18H20"
          stroke="#FFFFFF"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </button>
    <div class="navBar" :class="showNavBar ? 'showNavBarBlock' : ''">
      <div class="links" @click="openNavBar">
        <router-link to="/">Home</router-link>
        <router-link to="/catalog">Catalog</router-link>
        <router-link to="/about_us">About Us</router-link>
      </div>
      <div class="search_navBar" v-click-outside="onClickOutside">
        <input
          type="text"
          placeholder="Search"
          @input="debounce"
          :value="searchText"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import vClickOutside from "v-click-outside";

export default {
  name: "NavBar",
  data() {
    return {
      showNavBar: false,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    ...mapMutations(["setSearchText"]),
    debounce(e) {
      this.setSearchText(e.target.value);
    },
    onClickOutside() {
      this.setSearchText("");
    },
    openNavBar() {
      this.showNavBar = !this.showNavBar;
    },
  },
  computed: {
    ...mapGetters(["searchText"]),
  },
};
</script>

<style lang="scss">
.nav_bar {
  display: flex;
  justify-content: space-between;
  padding: 20px 150px;
  background-color: #0a2445;

  .right_section {
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 26px;
    font-family: "Long-wink";
    a {
      color: rgb(10, 78, 155);
      text-decoration: none;
    }
    a:active {
      color: rgb(125, 125, 156);
    }
    .search_bar {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(245, 235, 235);
      input {
        color: #ffffff;
        padding: 10px 5px;
        background-color: unset;
        border: 0px;
        outline: none;
      }
      ::placeholder {
        color: rgb(245, 235, 235);
      }
    }
  }
  .burger {
    width: 44px;
    height: 44px;
    border: none;
    background: none;
    display: none;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .navBar {
    background-color: #7e94b1;
    z-index: 99;
    position: absolute;
    padding: 20px 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    top: 9%;
    left: 0;
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s;
    transform: translate3d(0px, -5px, 0px);
    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 13px;
      a {
        color: rgb(10, 78, 155);
        text-decoration: none;
      }
      a:active {
        color: rgb(125, 125, 156);
      }
    }
    .search_navBar {
      margin-top: 10px;
      text-align: center;
      input {
        color: #ffffff;
        padding: 10px 5px;
        background-color: unset;
        border: 0px;
        outline: none;
        border-bottom: 1px solid rgb(245, 235, 235);
      }
      ::placeholder {
        color: rgb(245, 235, 235);
      }
    }
  }

  .showNavBarBlock {
    visibility: visible;
    opacity: 1;
    transition: all 0.4s ease-in;
    transform: translate3d(0px, 0px, 0px);
  }

  .logo {
    width: 65px;
    img {
      width: 100%;
    }
  }
}
@media only screen and (max-width: 1300px) {
  .nav_bar {
    padding: 20px 80px;
  }
}
@media only screen and (max-width: 1080px) {
  .nav_bar {
    padding: 20px 50px;
    .logo {
      width: 55px;
    }
  }
}

@media only screen and (max-width: 700px) {
  .nav_bar {
    padding: 20px 30px;
    align-items: center;
    .right_section {
      gap: 15px;
      font-size: 22px;
      .search_bar {
        input {
          padding: 7px 2px;
        }
      }
    }
  }
}
@media only screen and (max-width: 580px) {
  .nav_bar {
    padding: 10px 30px;
    .burger {
      display: block;
    }
    .right_section {
      display: none;
      .search_bar {
        input {
          padding: 7px 2px;
        }
      }
    }
    .logo {
      width: 40px;
    }
  }
}
@media only screen and (max-width: 330px) {
  .nav_bar { 
    .navBar{
      top:8%
    }
    .burger {
      width: 36px;
    height: 36px;
    }
 
    .logo {
      width: 36px;
    }
  }
}



</style>
