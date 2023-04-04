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
            <img src="../assets/locations/desktop/image-map-canada.png" alt="" width="350" height="326" />
          </div>
        </section>
        <section class="country">
          <div class="col2">
            <img src="../assets/locations/desktop/image-map-australia.png" alt="" width="350" height="326" />
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
            <img src="../assets/locations/desktop/image-map-united-kingdom.png" alt="" width="350" height="326" />
          </div>
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

.country {
  display: flex;
  gap: 30px;
  height: 326px;
  max-width: 1110px;
  margin: 0 auto 30px auto;
}

.col1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 0px 95px;
  background: #FDF3F0 url("../assets/shared/desktop/bg-pattern-two-circles.svg") no-repeat;
  background-position: bottom left;
  border-radius: 15px;
  width: 100%;
  max-width: 730px;
}

.col2 {
  border-radius: 15px;
  overflow: hidden;
}

h2 {
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #E7816B;
}
.text {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
}

.text p {
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #333136;
  display: flex;
  flex-direction: column;
}

.text span {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #333136;
}

</style>