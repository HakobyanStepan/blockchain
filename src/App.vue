<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/header/NavBar.vue"; 
import Footer from "./components/footer/Footer.vue";
export default {
  name: 'App',
  components: {
    NavBar,
    Footer 
  }
}
</script>

<style>
*{
  margin:0px;
  padding: 0px;
}
@font-face {
  font-family: "Long-wink";
  src: local("Long-wink"),
   url(fonts/Long-wink.ttf) format("truetype");
}
</style>
