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
  max-width: 90rem;
  margin: 0 auto;
  position: relative;
  padding: 0rem 10.3125rem 0rem 10.3125rem;
}
.container::before {
  content: "";
  position: absolute;
  left: 0rem;
  top: 20rem;
  height: 37.125rem;
  width: 100%;
  max-width: 62.875rem;
  z-index: -100;
  background: url("../assets/shared/desktop/bg-pattern-leaf.svg") no-repeat;
}
.container::after {
  content: "";
  position: absolute;
  right: 0rem;
  bottom: -54.625rem;
  z-index: -100;
  width: 100%;
  max-width: 69.125rem;
  height: 37.125rem;
  background: url("../assets/shared/desktop/bg-pattern-leaf.svg") no-repeat;
  transform: rotate(180deg);
} 
.introduction {
  margin: 0 auto;
  border-radius: 0.9375rem;
  max-width: 33.75rem;
  height: 40rem;
  display: flex;
  max-width: 69.375rem;
  padding: 9.0625rem 6rem 9.0625rem 6rem;
  color: #FFFFFF;
  overflow: hidden;
  position: relative;
  background: #E7816B url("../assets/home/desktop/bg-pattern-hero-home.svg") no-repeat right;
}
.introduction a {
  display: grid;
  place-content: center;
  background: #FFFFFF;
  border-radius: 0.5rem;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  letter-spacing: 0.0625rem;
  color: #333136;
  width: 9.5rem;
  height: 3.5rem;
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
  gap: 2.5rem;
  max-width: 33.75rem;
}
.introduction .col1 h1 {
  font-weight: 500;
  font-size: 3rem;
  line-height: 3rem;
}
.introduction .col1 p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
  max-width: 27.8125rem;
}
.introduction .col2 {
  width: 100%;
}
.introduction .col2 img {
  object-fit: cover;
  position: absolute;
  bottom: -15rem;
  right: -4.8125rem;
  width: 39.0625rem;
  height: auto;
}
@media (max-width: 80rem) {
  .container {
    padding: 0rem 1.25rem 0rem 1.25rem;
  }
}
@media (max-width: 59.375rem) {
  h1 {
    font-size: 3rem;
    line-height: 3rem;
  }
  .container::before,
  .container::after {
    display: none;
  }
  .introduction {
    padding: 3.75rem 1.25rem 9.0625rem 1.25rem;
    flex-direction: column;
    align-items: center;
    height: 52.6875rem;
    z-index: 2;
  }
  .introduction .col1 {
    text-align: center;
    align-items: center;
    z-index: 2;
  }
  .introduction .col2 {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    top: -6.25rem;
  }
  .introduction img {
    width: 39.0625rem !important;
    position: initial !important;
    z-index: -1;
  }
}
@media (max-width: 31rem) {
  h1 {
    font-size: 2rem !important;
    line-height: 2.25rem !important;
  }
  .col2 {
    top: -3.125rem !important;
  }
}
@media (max-width: 26.25rem) {
  .container {
    padding: 0rem;
  }
  .introduction {
    border-radius: 0rem !important;
  }
  .col1 p {
    font-size: 0.9375rem;
    line-height: 1.5625rem;
  }
  .col2 {
    top: unset !important;
    width: 26.25rem !important;
  }
}
</style>