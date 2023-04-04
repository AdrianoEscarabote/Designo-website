<script>
import Layout from '../components/Layout.vue';
import GetInTouch from '../components/shared/GetInTouch.vue';
import ListCountries from "../components/shared/ListCountries.vue"

export default {
  name: "About",
  mounted() {
    document.title = "Designo - About"
  },
  components: {
    Layout,
    GetInTouch,
    ListCountries
  }
}
</script>

<template>
  <Layout>
    <main>
      <div class="container">
        <section class="about-us">
          <div class="text">
            <h1>About Us</h1>
            <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
          </div>
          <img src="../assets/about/desktop/image-about-hero.jpg" alt="">
        </section>
        <section class="word-class">
          <img src="../assets/about/desktop/image-world-class-talent.jpg" alt="" width="476" />
          <div class="text">
            <h2>Word-class talent</h2>
            <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.

            <span>
              Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
            </span>
          </p>
          </div>
        </section>
        <ListCountries />
        <section class="real-deal">
          <div class="text">
            <h2>The real deal</h2>
            <p>
              As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.

              <span>
                We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
              </span>
            </p>
          </div>
          <img src="../assets/about/desktop/image-real-deal.jpg" alt="" />
        </section>
      </div>
      <GetInTouch />
    </main>
  </Layout>
</template>

<style scoped>
.container {
  padding: 0px 165px;
}

.about-us,
.word-class,
.real-deal {
  margin: 0 auto;
  overflow: hidden;
  max-width: 1110px;
  background-position: 0px -160px;
  border-radius: 15px;
  height: 480px;
  display: flex;
  justify-content: space-between;
}

.about-us {
  background: #E7816B url("../assets/about/desktop/bg-pattern-hero-about-desktop.svg") no-repeat;
  margin-bottom: 160px;
}

.about-us .text {
  padding-left: 95px;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 39px;
}

.text h1 {
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
}

.about-us .text p {
  max-width: 458px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.word-class {
  height: 640px;
  background: #FDF3F0 url("../assets/shared/desktop/bg-pattern-three-circles.svg") no-repeat;
  background-position: 300px bottom;
}

.word-class .text {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 100px;
  gap: 39px;
  max-width: 445px;
}

.text h2 {
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #E7816B;
}

.word-class .text p,
.real-deal .text p {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #333136;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.real-deal {
  background: #FDF3F0 url("../assets/shared/desktop/bg-pattern-two-circles.svg") no-repeat;
  background-position: left bottom;
  border-radius: 15px;
  height: 640px;
  margin-bottom: 160px;
}

.real-deal .text {
  max-width: 445px;
  margin-left: 95px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 1140px) {
  .container {
    padding:  0px 20px;
  }
}

</style>