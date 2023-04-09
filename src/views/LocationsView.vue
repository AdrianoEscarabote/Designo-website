<script>
import Layout from '../components/Layout/Layout.vue';
import GetInTouch from '../components/shared/GetInTouch/GetInTouch.vue';

export default {
  name: "DesignoLocations",
  mounted() {
    document.title = "Designo - Locations"

    const iconAu = L.icon({
      iconUrl: "../src/assets/locations/desktop/location.png",
      iconSize: [64, 64],
      iconAnchor: [43.64413273653292, -79.39455013058529]
    })

    const iconUk = L.icon({
      iconUrl: "../src/assets/locations/desktop/location.png",
      iconSize: [64, 64],
      iconAnchor: [-30.329322639132222, 149.78823392523591]
    })

    const iconCa = L.icon({
      iconUrl: "../src/assets/locations/desktop/location.png",
      iconSize: [64, 64],
      iconAnchor: [51.73232364932982, -3.8619642790420636]
    })

    const map = L.map('map').setView([43.64413273653292, -79.39455013058529], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      zoomControl: false,
      attributionControl: false,
    }).addTo(map);

    L.marker([43.64413273653292, -79.39455013058529], { icon: iconCa}).addTo(map)

    const map1 = L.map('map1').setView([-30.329322639132222, 149.78823392523591], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      zoomControl: false,
      attributionControl: false,
    }).addTo(map1);

    L.marker([-30.329322639132222, 149.78823392523591], { icon: iconAu}).addTo(map1)

    const map2 = L.map('map2').setView([51.73232364932982, -3.8619642790420636], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      zoomControl: false,
      attributionControl: false,
    }).addTo(map2);

    L.marker([51.73232364932982, -3.8619642790420636], { icon: iconUk}).addTo(map2)
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
            <div id="map"></div>
          </div>
        </section>
        <section class="country au">
          <div class="col2">
            <div id="map1"></div>
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
            <div id="map2"></div>
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
  height: 100%;
}
.col2 {
  overflow: hidden;
  width: 320px;
  border-radius: 0.9375rem;
  height: 100%;
}

#map,
#map1,
#map2 {
  height: 100%;
  width: 100%;
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
@media (max-width: 1140px) {
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
  .country.au {
    flex-direction: column !important;
  }
  .col2 {
    width: 100%;
    height: 320px;
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