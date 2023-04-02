<script>
import Layout from "../components/Layout.vue"
import GetInTouch from "../components/shared/GetInTouch.vue";
import ListFeatures from "../components/ListFeatures.vue";

export default {
  name: 'HomeView',
  mounted() {
    document.title = "Designo Agency Website Challenge"
  },
  components: {
    Layout,
    GetInTouch,
    ListFeatures
  } 
}
</script>

<template>
  <Layout>
    <main>
      <RouterLink to="/about">ir para about</RouterLink>
      <section class="introduction">
        <div class="col1">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
          <a href="/">learn more</a>
        </div>
        <div class="col2">
          <img src="../assets/home/desktop/image-hero-phone.png" alt="" />
        </div>
      </section>
      <ListFeatures />
      <GetInTouch />
    </main>
  </Layout>
</template>

<style scoped>
.introduction {
  background: #E7816B;
  border-radius: 15px;
  max-width: 540px;
  height: 350px;
  display: flex;
  max-width: 1110px;
  padding: 0px 165px 0px 165px;
}

.introduction a {
  display: grid;
  place-content: center;
  background: #FFFFFF;
  border-radius: 8px;
  text-transform: uppercase;
  text-decoration: none;
  width: 152px;
  height: 56px;
}

</style>