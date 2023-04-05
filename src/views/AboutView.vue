<script>
import Layout from '../components/Layout.vue';
import GetInTouch from '../components/shared/GetInTouch.vue';
import ListCountries from "../components/shared/ListCountries.vue"

export default {
  name: "Designo About",
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

          <picture>
            <source
              srcset="../assets/about/tablet/image-about-hero.jpg"
              media="(min-width: 410px) and (max-width: 1148px)"
            />
            <source
              srcset="../assets/about/mobile/image-about-hero.jpg"
              media="(max-width: 410px)"
            />
            <img src="../assets/about/desktop/image-about-hero.jpg" alt="" />
          </picture>

        </section>
        <section class="word-class">

          <picture>
            <source
              srcset="../assets/about/tablet/image-world-class-talent.jpg"
              media="(min-width: 410px) and (max-width: 1148px)"
            />
            <source
              srcset="../assets/about/mobile/image-world-class-talent.jpg"
              media="(max-width: 410px)"
            />
            <img src="../assets/about/desktop/image-world-class-talent.jpg" alt="" />
          </picture>

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

          <picture>
            <source
              srcset="../assets/about/tablet/image-real-deal.jpg"
              media="(min-width: 410px) and (max-width: 1148px)"
            />
            <source
              srcset="../assets/about/mobile/image-real-deal.jpg"
              media="(max-width: 410px)"
            />
            <img src="../assets/about/desktop/image-real-deal.jpg" alt="" />
          </picture>
        </section>
      </div>
      <GetInTouch />
    </main>
  </Layout>
</template>

<style scoped>
.container {
  padding: 0rem 10.3125rem;
}
.about-us,
.word-class,
.real-deal {
  margin: 0 auto;
  overflow: hidden;
  max-width: 69.375rem;
  background-position: 0rem -10rem;
  border-radius: 0.9375rem;
  height: 30rem;
  display: flex;
  justify-content: space-between;
}
.about-us {
  background: #E7816B url("../assets/about/desktop/bg-pattern-hero-about-desktop.svg") no-repeat;
  margin-bottom: 10rem;
}
.about-us .text {
  padding-left: 5.9375rem;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4375rem;
}
.text h1 {
  font-weight: 500;
  font-size: 3rem;
  line-height: 3rem;
}
.about-us .text p {
  max-width: 28.625rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
}
.word-class {
  height: 40rem;
  background: #FDF3F0 url("../assets/shared/desktop/bg-pattern-three-circles.svg") no-repeat;
  background-position: 18.75rem bottom;
}
.word-class .text {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 6.25rem;
  gap: 2.4375rem;
  max-width: 27.8125rem;
}
.text h2 {
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #E7816B;
}
picture img {
  object-fit: cover;
}
.word-class .text p,
.real-deal .text p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
  color: #333136;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
}
.real-deal {
  background: #FDF3F0 url("../assets/shared/desktop/bg-pattern-two-circles.svg") no-repeat;
  background-position: left bottom;
  border-radius: 0.9375rem;
  height: 40rem;
  margin-bottom: 10rem;
}
.real-deal .text {
  max-width: 27.8125rem;
  margin-left: 5.9375rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 71.25rem) {
  .container {
    padding:  0rem 1.25rem;
  }
  .about-us,
  .word-class,
  .real-deal {
    gap: 1.25rem;
  }
  .about-us .text {
    padding-left: 1.25rem;
  }
  .word-class .text {
    margin-right: 1.25rem;
  }
  .real-deal .text {
    margin: 0rem;
    padding-left: 1.25rem;
  }
  .word-class {
    display: flex;
    flex-direction: column;
  }
  .real-deal,
  .about-us {
    display: flex;
    flex-direction: column-reverse;
  }
  .real-deal,
  .about-us,
  .word-class {
    max-width: 43.0625rem;
    height: auto !important;
  }
  .text {
    max-width: unset !important;
    padding: 2.5rem 1.875rem !important;
    text-align: center;
    align-items: center;
  }
}
@media (max-width: 23.4375rem) {
  .container {
    padding: 0rem !important;
  }
  .about-us,
  .word-class,
  .real-deal {
    border-radius: 0rem;
  } 
}
</style>