<template>
  <div class="product-page">
    <h1>{{ getCurrentPageData.name }}</h1>
    <div class="product-page-head">
      <div class="statics">
        <div class="statics_icon">
          <img src="@/assets/statics.png" alt="" />
        </div>
        <div class="dollar">{{ getCurrentPageData.price }} <span>$</span></div>
        <span>online</span>
      </div>
      <Converter
        moeda-a="USD"
        :moeda-b="getCurrentPageData.name"
        :price="getCurrentPageData.price"
      />
    </div>
    <div class="images-block">
      <div>
        <img
          :src="`${require('@/assets/' + getCurrentPageData.img)}`"
          class="ready"
        />
      </div>
      <div>
        <img
          :src="`${require('@/assets/' + getCurrentPageData.img1)}`"
          class="ready"
        />
      </div>
      <div>
        <img
          :src="`${require('@/assets/' + getCurrentPageData.img2)}`"
          class="ready"
        />
      </div>
    </div>

    <h2>Information</h2>
    <div class="info-block">
      <p>{{ getCurrentPageData.p1 }}</p>
      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>
      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>
    </div>
    <h2>How to use</h2>
    <div class="info-block">
      <p>{{ getCurrentPageData.p1 }}</p>
      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>

      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>

      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>
      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>
      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>
    </div>
    <h2>Information</h2>
    <div class="info-block">
      <p>{{ getCurrentPageData.p1 }}</p>
      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>
      <p>{{ getCurrentPageData.p2 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>
      <p>{{ getCurrentPageData.p3 }}</p>
    </div>
  </div>
</template>

<script>
import Continent from "@/components/Continent.vue";
import Converter from "@/components/Converter.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "product-page",
  computed: {
    ...mapGetters(["getContinents"]),
    getCurrentPageData() {
      return this.getContinents.find(
        (element) => element.id == this.$route.params.id
      );
    },
  },
  components: {
    Continent,
    Converter,
  },
  methods: {
    ...mapActions(["fetchPrice"]),
  },
  created() {
    this.fetchPrice();
  },
};
</script>

<style lang="scss" scoped>
.product-page {
  background-color: rgb(195, 215, 241);
  padding: 20px 150px;
  h1 {
    text-align: center;
    color: #0a4e9b;
    margin-bottom: 20px;
    letter-spacing: 2px;
    font-family: "Long-wink";
  }
  h2 {
    text-align: center;
    color: #0a4e9b;
    margin-bottom: 20px;
    font-family: "Long-wink";
    margin-top: 30px;
    letter-spacing: 2px;
  }
  .images-block {
    display: flex;
    justify-content: space-between;
    padding: 30px 0px;
    div {
      width: 30%;
      display: flex;
      img {
        width: 100%;
        border-radius: 30px;
      }
      .ready {
        opacity: 1;
        animation-duration: 2s;
        animation-name: animation;
      }
      @keyframes animation {
        0% {
          transform: scale(0.783333333333333);
        }
        50% {
          transform: scale(1.08);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
  .product-page-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .statics {
      display: flex;
      align-items: center;
      gap: 12px;
      .statics_icon {
        width: 70px;
      }
      > span {
        color: #3e89df;
      }
      .dollar {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 28px;
        span {
          font-size: 28px;
        }
      }
      img {
        width: 100%;
      }
    }
  }
  .info-block {
    width: 86%;
    text-align: center;
    margin: 0px auto;
    p {
      font-family: " Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
      font-size: 20px;
      color: rgb(23, 123, 236);
    }
  }
}
@media only screen and (max-width: 1300px) {
  .product-page {
    padding: 10px 80px;
  }
}
@media only screen and (max-width: 1080px) {
  .product-page {
    padding: 10px 50px;
    .info-block {
      p {
        font-size: 18px;
      }
    }
    h2 {
      margin-top: 10px;
    }
  }
}
@media only screen and (max-width: 700px) {
  .product-page {
    padding: 20px 30px;
    .info-block {
      width: 92%;
      p {
        font-size: 16px;
      }
    }
    .product-page-head {
      .statics {
        .statics_icon {
          width: 50px;
        }
        .dollar {
          font-size: 20px;
        }
      }
    }
  }
}
@media only screen and (max-width: 500px) {
  .product-page {
    .product-page-head {
      flex-direction: column-reverse;
      gap: 20px;
      .statics {
        gap:42px;
        .statics_icon {
          width: 40px;
        }
        .dollar {
          font-size: 18px;
        }
      }
    }
  }
}
@media only screen and (max-width: 360px) {
  .product-page { 
    .images-block{
      padding: 22px 0px;
    }
    .info-block {
      width: 100%;
      p {
        font-size: 15px;
      }
    }
    h2 {
      margin-bottom: 10px;
    }
  }
}
</style>
