<script>
import Layout from "../components/Layout.vue"
import GetInTouch from "../components/shared/GetInTouch.vue";
import ListFeatures from "../components/ListFeatures.vue";
import ListDesigns from "../components/ListDesigns.vue";

export default {
  name: 'HomeView',
  mounted() {
    document.title = "Designo Agency Website Challenge"
  },
  components: {
    Layout,
    GetInTouch,
    ListFeatures,
    ListDesigns
  } 
}
</script>

<template>
  <Layout>
    <main>
      <div class="container">
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
        <ListDesigns />
      </div>
      <ListFeatures />
      <GetInTouch />
    </main>
  </Layout>
</template>

<style scoped>

.container {
  padding: 0px 165px 0px 165px;
}
.introduction {
  margin: 0 auto;
  border-radius: 15px;
  max-width: 540px;
  height: 640px;
  display: flex;
  max-width: 1110px;
  padding: 145px 96px 145px 96px;
  color: #FFFFFF;
  overflow: hidden;
  position: relative;
  background: #E7816B url("../assets/home/desktop/bg-pattern-hero-home.svg") no-repeat right;
}

.introduction a {
  display: grid;
  place-content: center;
  background: #FFFFFF;
  border-radius: 8px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 1px;
  color: #333136;
  width: 152px;
  height: 56px;
}

.introduction a:hover {
  transition: 0.4s ease-in-out;
  color: #FFFFFF;
  background: #FFAD9B;
}

.introduction .col1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  max-width: 540px;
}


.introduction .col1 h1 {
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
}

.introduction .col1 p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.introduction .col2 {
  width: 100%;
}

.introduction .col2 img {
  object-fit: cover;
  position: absolute;
  bottom: -240px;
  right: -77px;
  width: 625px;
  height: auto;
}

@media (max-width: 1280px) {
  .container {
    padding: 0px 20px 0px 20px;
  }
}

@media (max-width: 950px) {
  .introduction {
    padding: 60px 20px 145px 20px;
    flex-direction: column;
    align-items: center;
    height: 843px;
  }
  .introduction .col1 {
    text-align: center;
    align-items: center;
  }
  .introduction .col2 {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    top: -100px;
  }
  .introduction img {
    width: 625px !important;
    position: initial !important;
  }
}
</style>