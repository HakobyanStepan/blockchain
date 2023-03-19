<template>
  <div>
    <div class="conversor" v-click-outside="onClickOutside">
      <div class="exchange">
        <i>{{ moedaB }}</i>
        <div><img src="@/assets/exchange.png" alt="" /></div>
        <i> USD</i>
      </div>
      <input
        type="text"
        maxlength="8"
        @input="debounce"
        v-on:keyup="converter"
        :value="moedaA_value"
      />
      <h5>{{ moedaB_value }} $</h5>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import vClickOutside from "v-click-outside";

export default {
  name: "conversor",
  props: ["moedaB", "price"],
  data() {
    return {
      moedaA_value: "",
      moedaB_value: "_",
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  computed: {
    ...mapGetters(["getContinents"]),
  },
  methods: {
    ...mapActions(["fetchPrice"]),
    converter() {
      let value = this.price;
      let partialvalue = parseFloat(this.moedaA_value);
      let changed = (partialvalue * value).toFixed(2);
      this.moedaB_value = changed === "NaN" ? 0 : changed;
    },
    onClickOutside() {
      this.moedaA_value = " ";
      this.moedaB_value = "_";
    },
    debounce(e) {
      this.moedaA_value = e.target.value;
    },
  },

  created() {
    this.fetchPrice();
  },
};
</script>

<style lang="scss" scoped>
.conversor {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 10px 20px;
  color: #9bcaff;
  background: #0a4e9b;
  .exchange {
    display: flex;
    gap: 5px;
    div {
      width: 20px;
      img {
        width: 100%;
      }
    }
  }
  input {
    outline: none;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    margin: 10px 0px;
  }
}
@media only screen and (max-width: 1080px) {
  .conversor {
    padding: 6px 10px;
    input {
      padding: 4px 6px;
      margin: 5px 0px;
    }
  }
}
@media only screen and (max-width: 500px) {
  .conversor {
    padding: 12px 30px;
    input {
      padding: 7px 9px;
      margin: 7px 0px;
    }
  }
}
</style>
