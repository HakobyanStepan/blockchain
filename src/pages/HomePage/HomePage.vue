<template>
  <div class="home_page">
    <AboutBlockchain />
    <Continent
      v-for="continent in getSearchText"
      :key="continent.id"
      :continent="continent"
    />
  </div>
</template>

<script>
import Continent from "@/components/Continent.vue";
import AboutBlockchain from "@/components/AboutBlockchain.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomePage",
  components: { Continent, AboutBlockchain },
  computed: {
    ...mapGetters(["getContinents"]),
    ...mapGetters(["searchText"]),
    getSearchText() {
      return this.getContinents.filter((el) =>
        el.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
    ...mapActions(["fetchPrice"]),
  },
  created() {
    this.fetchPrice();
  }
};
</script>

<style lang="scss" scoped>
.home_page {
  background-color: rgb(195, 215, 241);
  padding: 10px 150px;
  :last-child {
    border-bottom: none;
  }
}
@media only screen and (max-width: 1300px) {
  .home_page{
    padding: 10px 80px;
  }
}
@media only screen and (max-width: 1080px) {
  .home_page{
    padding: 10px 50px;
  }
}
@media only screen and (max-width: 700px) {
  .home_page{
    padding: 10px 30px;
  }
}
</style>
