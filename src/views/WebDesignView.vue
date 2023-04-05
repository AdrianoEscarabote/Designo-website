<script>
import Layout from '../components/Layout.vue';
import GetInTouch from '../components/shared/GetInTouch.vue';

export default {
  name: "Designo Web Design",
  mounted() {
    document.title = "Designo - Web Design"
  },
  components: {
    Layout,
    GetInTouch
  } 
}
</script>

<template>
  <Layout>
    <main>
      <div class="container">
        <section class="introduction">
          <h1>Web Design</h1>
          <p>We build websites that serve as powerful marketing tools 
          and bring memorable brand experiences.</p>
        </section>
        <section class="designs">
          <ul>
            <li>
              <img src="../assets/web-design/desktop/image-express.jpg" alt="">
              <div class="text">
                <h2>express</h2>
                <p>A multi-carrier shipping website for ecommerce businesses</p>
              </div>
            </li>
            <li>
              <img src="../assets/web-design/desktop/image-transfer.jpg" alt="">
              <div class="text">
                <h2>transfer</h2>
                <p>Site for low-cost money transfers and sending money within seconds</p>
              </div>
            </li>
            <li>
              <img src="../assets/web-design/desktop/image-photon.jpg" alt="">
              <div class="text">
                <h2>photon</h2>
                <p>A state-of-the-art music player with high-resolution audio and DSP efects</p>
              </div>
            </li>
            <li>
              <img src="../assets/web-design/desktop/image-builder.jpg" alt="">
              <div class="text">
                <h2>builder</h2>
                <p>Connects users with local contractors based on their location</p>
              </div>
            </li>
            <li>
              <img src="../assets/web-design/desktop/image-blogr.jpg" alt="">
              <div class="text">
                <h2>blogr</h2>
                <p>Blogr is a platform for creating an online blog or publication</p>
              </div>
            </li>
            <li>
              <img src="../assets/web-design/desktop/image-camp.jpg" alt="">
              <div class="text">
                <h2>camp</h2>
                <p>Get expert training in coding, data, design, and digital marketing</p>
              </div>
            </li>
          </ul>
        </section>
        <section class="projects">
          <RouterLink class="app" to="/app-design">
            <h3>app design</h3>
            <p>view projects <img src="../assets/shared/desktop/icon-right-arrow.svg" alt=""></p>
          </RouterLink>
          <RouterLink class="graphic" to="/graphic-design">
            <h3>graphic design</h3>
            <p>view projects <img src="../assets/shared/desktop/icon-right-arrow.svg" alt=""></p>
          </RouterLink>
        </section>
      </div>
      <GetInTouch />
    </main>
  </Layout>
</template>

<style scoped>
.container {
  padding: 0rem 10.3125rem 10rem 10.3125rem;
}
.introduction {
  padding: 4.5rem 6rem 4.5rem 6rem;
  margin: 0 auto;
  max-width: 69.4375rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  flex-direction: column;
  border-radius: 0.9375rem;
  background: #E7806B url("../assets/web-design/desktop/bg-pattern-intro-web.svg") no-repeat;
  background-position: right 50%;
  background-size: auto 200%;
}
.introduction h1 {
  font-weight: 500;
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
  color: #FFFFFF;
}
.introduction p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
  max-width: 25.625rem;
  color: #FFFFFF;
}
.designs {
  margin: 0 auto;
}
ul {
  max-width: 69.375rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
}
li {
  background: #FDF3F0;
  border-radius: 0.9375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 21.875rem;
  overflow: hidden;
}
li img {
  object-fit: cover;
  width: 21.875rem;
  height: 20rem;
}
li .text {
  padding: 1.875rem 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
li h2 {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.625rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.3125rem;
  color: #E7816B;
}
li p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
  text-align: center;
  color: #333136;
}
.designs {
  margin: 0 auto;
  margin-top: 10rem;
  max-width: 69.375rem;
}
.projects {
  display: flex;
  text-align: center;
  width: 100%;
  max-width: 69.375rem;
  margin: 10rem auto 0rem auto;
  height: 19.25rem;
  gap: 1.875rem;
}
.projects a {
  border-radius: 0.9375rem;
  width: 100%;
  display: grid;
  gap: 1.25rem;
  place-content: center;
  text-decoration: none;
  color: #FFFFFF;
}
.projects .app {
  background: #000000 url("../assets/home/desktop/image-app-design.jpg") no-repeat;
}
.projects .graphic {
  background: #000000 url("../assets/home/desktop/image-graphic-design.jpg") ;
}
.projects h3 {
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3rem;
  text-align: center;
  letter-spacing: 0.125rem;  
}
.projects p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
}
@media (max-width: 71.25rem) {
  .container {
    padding: 0rem 1.25rem 10rem 1.25rem;
  }
}
@media (max-width: 49.375rem) and (min-width: 36.875rem) {
  ul {
    flex-direction: column;
  }
  li {
    max-width: unset;
    flex-direction: row;
    width: 100%;
  }
}
@media (max-width: 45.5rem) {
  .projects {
    flex-direction: column;
    height: 100%;
  }
  .projects a {
    height: 12.5rem;
  }
  .projects .app {
    background: url("../assets/home/tablet/image-app-design.jpg");
  }
  .projects .graphic {
    background: url("../assets/home/tablet/image-graphic-design.jpg");
  }
}
@media (max-width: 22.5rem) {
  .projects .app {
    background: url("../assets/home/mobile/image-app-design.jpg");
  }
  .projects .graphic {
    background: url("../assets/home/mobile/image-graphic-design.jpg");
  }
}
@media (max-width: 23.4375rem) {
  .container {
    padding: 0rem 0rem 10rem 0rem;
  }
  li,
  a,
  .introduction {
    border-radius: 0rem !important;
  }
  .introduction {
    padding: 4.5rem 3.5rem 4.5rem 3.5rem;
  }
}
</style>