<script>
import Layout from '../components/Layout.vue';
import GetInTouch from '../components/shared/GetInTouch.vue';

export default {
  name: "Designo Locations",
  mounted() {
    document.title = "Designo - Locations"
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
      <h1 class="sr-only">See our locations below</h1>      
      <div class="container">
        <section class="country">
          <div class="col1">
            <h2>Canada</h2>
            <div class="text">
              <p>
                Designo Central Office
                <span>3886 Wellington Street</span>
                <span>Toronto, Ontario M9C 3J5</span>
              </p>
              <p>
                Contact
                <span>P : +1 253-863-8967</span>
                <span>M : contact@designo.co</span>
              </p>
            </div>
          </div>
          <div class="col2">
            <picture>
              <source
                srcset="../assets/locations/tablet/image-map-canada.png"
                media="(max-width: 1148px)"
              />
              <img src="../assets/locations/desktop/image-map-canada.png" alt="" width="350" height="326" />
            </picture>
          </div>
        </section>
        <section class="country au">
          <div class="col2">
            <picture>
              <source
                srcset="../assets/locations/tablet/image-map-australia.png"
                media="(max-width: 1148px)"
              />
              <img src="../assets/locations/desktop/image-map-australia.png" alt="" width="350" height="326" />
            </picture>
          </div>
          <div class="col1">
            <h2>Australia</h2>
            <div class="text">
              <p>
                Designo AU Office
                <span>19 Balonne Street</span>
                <span>New South Wales 2442</span>
              </p>
              <p>
                Contact
                <span>P : (02) 6720 9092</span>
                <span>M : contact@designo.au</span>
              </p>
            </div>
          </div>
        </section>
        <section class="country">
          <div class="col1">
            <h2>United Kingdom</h2>
            <div class="text">
              <p>
                Designo UK Office
                <span>13 Colorado Way</span>
                <span>Rhyd-y-fro SA8 9GA</span>
              </p>
              <p>
                Contact
                <span>P : 078 3115 1400</span>
                <span>M : contact@designo.uk</span>
              </p>
            </div>
          </div>
          <div class="col2">
            <picture>
              <source
                srcset="../assets/locations/tablet/image-map-uk.png"
                media="(max-width: 1148px)"
              />
              <img src="../assets/locations/desktop/image-map-united-kingdom.png" alt="" width="350" height="326" />
            </picture>
          </div>
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
.country {
  display: flex;
  gap: 1.875rem;
  height: 20.375rem;
  max-width: 69.375rem;
  margin: 0 auto 1.875rem auto;
}
.col1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  padding: 0rem 5.9375rem;
  background: #FDF3F0 url("../assets/shared/desktop/bg-pattern-two-circles.svg") no-repeat;
  background-position: bottom left;
  border-radius: 0.9375rem;
  width: 100%;
  max-width: 45.625rem;
}
.col2 {
  border-radius: 0.9375rem;
  overflow: hidden;
}
h2 {
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #E7816B;
}
.text {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
}
.text p {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.625rem;
  color: #333136;
  display: flex;
  flex-direction: column;
}
.text span {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
  color: #333136;
}
@media (max-width: 71.25rem) {
  .container {
    padding: 0rem 1.25rem 10rem 1.25rem;
  }
  .country {
    max-width: 43.0625rem;
    align-items: center;
    flex-direction: column-reverse;
    height: auto;
  }
  .country img {
    height: auto !important;
    width: 100%;
    object-fit: cover;
  }
  .col2 {
    height: 100%;
  }
  .country.au {
    flex-direction: column !important;
  }
  .col1 {
    padding: 2.5rem 5.9375rem;
  }
}
@media (max-width: 37.5rem) {
  .col1 {
    padding: 2.5rem;
    text-align: center;
  }
  .text {
    display: flex !important;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  h2 {
    font-size: 2rem;
    line-height: 2.25rem;
  }
}
@media (max-width: 23.4375rem) {
  .container {
    padding: 0rem 0rem 10rem 0rem;
  }
  .country {
    gap: 0rem;
  }
  .col1,
  .col2 {
    border-radius: 0rem;
  }
}
</style>