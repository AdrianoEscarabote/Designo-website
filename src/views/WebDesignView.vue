<script>
import Layout from '../components/Layout.vue';
import GetInTouch from '../components/shared/GetInTouch.vue';

export default {
  name: "Designo About",
  mounted() {
    document.title = "Designo - Design"
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
              <h2>express</h2>
              <p>A multi-carrier shipping website for ecommerce businesses</p>
            </li>
            <li>
              <img src="../assets/web-design/desktop/image-transfer.jpg" alt="">
              <h2>transfer</h2>
              <p>Site for low-cost money transfers and sending money within seconds</p>
            </li>
            <li>
              <img src="../assets/web-design/desktop/image-photon.jpg" alt="">
              <h2>photon</h2>
              <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
            </li>
            <li>
              <img src="../assets/web-design/desktop/image-builder.jpg" alt="">
              <h2>builder</h2>
              <p>Connects users with local contractors based on their location</p>
            </li>
            <li>
              <img src="../assets/web-design/desktop/image-blogr.jpg" alt="">
              <h2>blogr</h2>
              <p>Blogr is a platform for creating an online blog or publication</p>
            </li>
            <li>
              <img src="../assets/web-design/desktop/image-camp.jpg" alt="">
              <h2>camp</h2>
              <p>Get expert training in coding, data, design, and digital marketing</p>
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
  padding: 0px 165px 160px 165px;
}

.introduction {
  padding: 4.5rem 6rem 4.5rem 6rem;
  margin: 0 auto;
  max-width: 69.4375rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  text-align: center;
  flex-direction: column;
  border-radius: 0.9375rem;
  background: #E7806B url("../assets/web-design/desktop/bg-pattern-intro-web.svg") no-repeat;
  background-position: right 50%;
  background-size: auto 200%;
}

.introduction h1 {
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  color: #FFFFFF;
}

.introduction p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  max-width: 410px;
  color: #FFFFFF;
}

.designs {
  margin: 0 auto;
}

ul {
  max-width: 1110px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

li {
  background: #FDF3F0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  overflow: hidden;
}

li img {
  object-fit: cover;
  width: 350px;
  height: 320px;
}

li h2 {
  padding-top: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 5px;
  color: #E7816B;
}

li p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #333136;
  padding: 0px 20px 20px 20px;
}

.designs {
  margin: 0 auto;
  margin-top: 160px;
  max-width: 1110px;
}

.projects {
  display: flex;
  text-align: center;
  width: 100%;
  max-width: 1110px;
  margin: 160px auto 0px auto;
  height: 308px;
  gap: 30px;
}

.projects a {
  border-radius: 15px;
  width: 100%;
  display: grid;
  gap: 20px;
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
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 2px;  
}

.projects p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 1140px) {
  .container {
    padding: 0px 20px 160px 20px;
  }
}

@media (max-width: 728px) {
  .projects {
    flex-direction: column;
    height: 100%;
  }
  .projects a {
    height: 200px;
  }
  .projects .app {
    background: url("../assets/home/tablet/image-app-design.jpg");
  }
  .projects .graphic {
    background: url("../assets/home/tablet/image-graphic-design.jpg");
  }
}

@media (max-width: 360px) {
  .projects .app {
    background: url("../assets/home/mobile/image-app-design.jpg");
  }
  .projects .graphic {
    background: url("../assets/home/mobile/image-graphic-design.jpg");
  }
}

</style>