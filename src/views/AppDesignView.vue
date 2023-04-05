<script>
import Layout from '../components/Layout.vue';
import GetInTouch from '../components/shared/GetInTouch.vue';

export default {
  name: "App Design",
  mounted() {
    document.title = "Designo - App Design"
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
          <h1>App Design</h1>
          <p>Our mobile designs bring intuitive digital solutions
          to your customers right at their fingertips.</p>
        </section>
        <section class="designs">
          <ul>
            <li>
              <img src="../assets/app-design/desktop/image-airfilter.jpg" alt="">
              <div class="text">
                <h2>airfilter</h2>
                <p>Solving the problem of poor indoor air quality by filtering the air</p>
              </div>
            </li>
            <li>
              <img src="../assets/app-design/desktop/image-eyecam.jpg" alt="">
              <div class="text">
                <h2>eyecam</h2>
                <p>Product that lets you edit your favorite photos and videos at any time</p>
              </div>
            </li>
            <li>
              <img src="../assets/app-design/desktop/image-faceit.jpg" alt="">
              <div class="text">
                <h2>faceit</h2>
                <p>Get to meet your favorite internet superstar with the faceit app</p>
              </div>
            </li>
            <li>
              <img src="../assets/app-design/desktop/image-todo.jpg" alt="">
              <div class="text">
                <h2>todo</h2>
                <p>A todo app that features cloud sync with light and dark mode</p>
              </div>
            </li>
            <li>
              <img src="../assets/app-design/desktop/image-loopstudios.jpg" alt="">
              <div class="text">
                <h2>loopstudios</h2>
                <p>A VR experience app made for Loopstudios</p>
              </div>
            </li>
          </ul>
        </section>
      
        <section class="projects">
          <RouterLink class="web" to="/web-design">
            <h3>web design</h3>
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
  padding: 72px 96px 72px 96px;
  margin: 0 auto;
  max-width: 1111px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  flex-direction: column;
  border-radius: 15px;
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
.text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.875rem 1.25rem;
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
  background: #000000 url("../assets/home/desktop/image-web-design-small.jpg") no-repeat;
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
  .projects {
    flex-direction: column;
    height: 100%;
  }
  .projects a {
    height: 12.5rem;
  }
  .projects .web {
    background: #000000 url("../assets/home/tablet/image-web-design.jpg") no-repeat;
  }
  .projects .graphic {
    background: url("../assets/home/tablet/image-graphic-design.jpg");
  }
}
/* mobile */
@media (max-width: 23.125rem) {
  .projects .web {
    background: url("../assets/home/mobile/image-web-design.jpg");
  }
  .projects .graphic {
    background: url("../assets/home/mobile/image-graphic-design.jpg");
  }
}
@media (max-width: 23.4375rem) {
  .container {
    padding: 0rem 0rem 10rem 0rem;
  }
  li {
    width: 100%;
    max-width: unset;
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