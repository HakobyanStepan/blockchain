<template>
  <div class="footer">
   <div class="logo"><img src="../../assets/logo1.png" alt=""></div>
   <div class="about"> 
    <router-link to="/">Home</router-link>
    <router-link to="/catalog">Catalog</router-link>
    <router-link to="/about_us">About us</router-link>
    <router-link to="/contact_us">Contact us</router-link>
    <router-link to="/">Message</router-link>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  display: flex;
  justify-content: space-between;
  padding: 20px 150px;
  background-color: #0a2445;
  align-items: center;
  .about{
    display:flex;
    flex-direction: column;
    gap: 10px;
    a {
      font-size:20px ;
      color: rgb(10, 78, 155);
      text-decoration: none;
    }
    a:active {
      color: rgb(125, 125, 156);
    }
  }
  .logo{
    width:100px;
    img{width:100%}
  }
}
@media only screen and (max-width: 700px) {
  .footer{ 
  padding: 20px 80px; 
  .about{
    display:flex;
    flex-direction: column;
    gap: 10px;
    a {
      font-size:18px ; 
    } 
  }
  .logo{
    width:80px; 
  }
}
}
@media only screen and (max-width: 580px) {
  .footer{ 
  padding: 20px 30px; 
 ; 
}
}
@media only screen and (max-width: 360px) {
  .footer{ 
  .about{
    gap: 8px;
    a {
      font-size:16px ; 
    } 
  }
  .logo{
    width:60px; 
  }
}
}
</style>