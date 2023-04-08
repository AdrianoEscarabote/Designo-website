<script>
import Layout from '../components/Layout/Layout.vue';
import GetInTouch from '../components/shared/GetInTouch/GetInTouch.vue';

export default {
  name: "Designo Graphic",
  mounted() {
    document.title = "Designo - Graphic"
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
          <h1>Graphic Design</h1>
          <p>We deliver eye-catching branding materials that are 
          tailored to meet your business objectives.</p>
        </section>
        <section class="designs">
          <ul>
            <li>
              <img src="../assets/graphic-design/desktop/image-change.jpg" alt="">
              <div class="text">
                <h2>tim brown</h2>
                <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
              </div>
            </li>
            <li>
              <img src="../assets/graphic-design/desktop/image-boxed-water.jpg" alt="">
              <div class="text">
                <h2>boxed water</h2>
                <p>A simple packaging concept made for Boxed Water</p>
              </div>
            </li>
            <li>
              <img src="../assets/graphic-design/desktop/image-science.jpg" alt="">
              <div class="text">
                <h2>science!</h2>
                <p>A poster made in collaboration with the Federal Art Project</p>
              </div>
            </li>
          </ul>
        </section>
        <section class="projects">
          <RouterLink class="app" to="/app-design">
            <h3>app design</h3>
            <p>view projects <img src="../assets/shared/desktop/icon-right-arrow.svg" alt=""></p>
          </RouterLink>
          <RouterLink class="web" to="/web-design">
            <h3>web design</h3>
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
  max-width: 90rem;
  margin: 0 auto;
  position: relative;
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
  max-width: 21.875rem;
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
  justify-content: flex-start;
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
.text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.875rem 1.25rem;
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
.projects .web {
  background: #00000099 url("../assets/home/desktop/image-web-design-small.jpg") no-repeat;
  background-blend-mode: overlay;
  transition: 0.2s ease-in-out;
}
.projects .app {
  background: #00000099 url("../assets/home/desktop/image-app-design.jpg") no-repeat;
  background-blend-mode: overlay;
  transition: 0.2s ease-in-out;
}
.projects .app:hover,
.projects .app:focus-visible,
.projects .web:hover,
.projects .web:focus-visible {
  background-color: #e7826b3b;
}
.projects h3 {
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3rem;
  text-align: center;
  letter-spacing: 0.125rem;  
  text-transform: uppercase;
}
.projects p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
}
@media (max-width: 89.9375rem) {
  ul {
    justify-content: center;
  }
}
@media (max-width: 71.25rem) {
  .container {
    padding: 0rem 1.25rem 10rem 1.25rem;
  }
}
@media (max-width: 49.375rem) and (min-width: 36.875rem) {
  li {
    width: 100%;
    max-width: unset;
    flex-direction: row;
  }
  .text {
    width: 100%;
  }
}
/* tablet */
@media (max-width: 45.5rem) {
  .container::before {
    display: none;
  }
  .projects {
    flex-direction: column;
    height: 100%;
  }
  .projects a {
    height: 12.5rem;
  }
  .projects .web {
    background: #00000099 url("../assets/home/tablet/image-web-design.jpg") no-repeat;
  }
  .projects .app {
    background: #00000099 url("../assets/home/tablet/image-app-design.jpg");
  }
}
/* mobile */
@media (max-width: 23.125rem) {
  .projects .web {
    background: #00000099 url("../assets/home/mobile/image-web-design.jpg");
  }
  .projects .app {
    background: #00000099 url("../assets/home/mobile/image-app-design.jpg");
  }
  .container {
    padding: 0rem 0rem 10rem 0rem;
  }
  .introduction {
    padding: 72px 56px 72px 56px;
    border-radius: 0rem;
  }
  li {
    max-width: unset;
    border-radius: unset;
  }
  a {
    border-radius: 0rem !important;
  }
}
</style>