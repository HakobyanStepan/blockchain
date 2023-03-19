<template>
  <div class="about-us">
       <h1>About Us</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae voluptatem fuga consectetur corrupti saepe, debitis minima et labore optio, similique quasi iusto deserunt laboriosam ab, cumque ad ratione ipsum sit velit perferendis illum quis repudiandae? Tempora quas beatae nisi alias fuga laudantium deserunt perspiciatis id, eaque maiores labore, blanditiis architecto quod nesciunt excepturi. Dolore reiciendis fugiat, maxime commodi dolorum non exercitationem incidunt repellendus laboriosam. Voluptatum nisi temporibus, incidunt eos beatae facere ipsam rem necessitatibus sequi vitae tempore facilis repudiandae nihil provident. Maiores ut consequatur ullam deserunt velit saepe ratione, fuga, doloribus rerum eveniet quidem, dolores possimus ducimus tempora quo quis sit! Adipisci ullam itaque, ratione sed beatae facere quos nihil perferendis at officiis blanditiis molestias impedit, non perspiciatis dignissimos accusantium. Labore nostrum tempora dignissimos natus cumque quo. Pariatur voluptatem dolorem inventore ut similique sint, a praesentium! Debitis voluptatibus officia sunt iure numquam sequi ipsa! Tenetur, praesentium totam quos consequatur molestiae similique, possimus impedit alias recusandae voluptates, excepturi commodi voluptatem dicta tempora odit deleniti iste hic. Explicabo quisquam laborum eligendi magnam mollitia facere nesciunt molestias officiis ea. Voluptas illo praesentium reprehenderit? Hic dicta eaque odit nostrum, officiis molestiae atque id est impedit harum? Officiis perferendis, soluta obcaecati quidem ab error vel aperiam quia. Aliquid eum consequatur cumque atque nisi iusto sit aut eos odit quibusdam dolorem, libero voluptatem dolor voluptates dignissimos! Tempore deserunt libero sint minus quis impedit eum saepe dolor, placeat architecto adipisci ducimus fugit officiis molestiae quibusdam accusantium ullam? Numquam aperiam quibusdam non error neque, obcaecati accusantium sunt voluptatem nesciunt expedita. Sapiente, libero voluptatem quisquam deleniti natus modi non sunt voluptatibus unde dolorum ipsum autem officiis laudantium aliquid dolorem ex sint aspernatur! Autem, doloribus porro sit doloremque eos distinctio reprehenderit nam, nobis facere numquam eum ratione voluptatem quidem! Tempore optio illum nobis dolor rem repudiandae exercitationem fugiat enim harum dolorem facere, cumque voluptatem animi placeat ex quaerat nulla iusto recusandae ducimus. At, fugit ex aspernatur iusto atque, autem quibusdam error quisquam laudantium corrupti deserunt dicta soluta commodi incidunt dolores inventore sapiente a sed quaerat? Asperiores illum et saepe rem quae obcaecati libero veritatis adipisci. Ipsam deleniti totam fugiat tempora voluptas. Error sunt esse provident quis commodi veritatis nam ratione animi, consequatur perferendis aut laudantium. Facere sequi molestias eligendi illo. Ea, facere provident dolorum praesentium ab beatae earum rem in illum quidem expedita culpa iste sint voluptatibus pariatur ad quos perspiciatis. Beatae voluptatem et repudiandae eum perferendis! Ea ad incidunt iure modi tempora nam unde possimus ipsum illo delectus vel alias, in, eum, consectetur debitis. Consequuntur harum reiciendis distinctio labore eveniet libero eaque, quaerat cum soluta vel, dolores porro. Cum nobis sit ab praesentium tempora corrupti vero atque quis quo nemo tenetur illum nihil magni molestiae itaque dicta excepturi repellat aspernatur, totam, aliquam eos optio. Ducimus facere quos quas minima, modi vitae id, illo ab soluta omnis, asperiores quae accusantium dolorum. Sequi sit, placeat quod, ex cumque eveniet, architecto autem velit magni possimus ipsam sunt qui quibusdam. A aperiam nobis aliquid maxime et, illo facilis dolores, cupiditate necessitatibus omnis explicabo?</p>
  </div>
</template>

<script>
export default {
name:'about-us'
}
</script>

<style lang="scss" scoped>
.about-us{
  background-color: rgb(195, 215, 241);
  padding: 20px 150px;
  h1 {
      text-align: center;
      color: rgb(10, 78, 155);
      letter-spacing: 2px;
      font-family: "Long-wink";
      margin-bottom: 20px;
    }
    p{  margin: 20px auto;
          text-align: center;
        font-size: 20px;
        width: 70%;
    }
}
@media only screen and (max-width: 1300px) {
  .about-us{
    padding: 20px 80px;
    h1 {
      margin-bottom: 18px;
    }
    p{ 
        font-size: 18px;
        line-height: 26px;
        width: 90%;
    }
  }
}
@media only screen and (max-width: 1080px) {
  .about-us{
    padding: 20px 50px;
    p{ 
        font-size: 16px;
        line-height: 24px; 
    }
  }
}
@media only screen and (max-width: 700px) {
  .about-us{
    padding: 20px 30px;
    p{ 
        font-size: 14px;
        line-height: 20px; 
        width: 100%;
    }
  }
}
</style>