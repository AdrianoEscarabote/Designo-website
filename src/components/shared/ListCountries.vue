<script>
import { RouterLink } from 'vue-router';

export default {
  name: "List Countries",
  components: {
    RouterLink
  }
}
</script>

<template>
  <section>
    <ul>
      <li>
        <img src="../../assets/shared/desktop/illustration-canada.svg" alt="Canada" />
        <p>Canada</p>
        <RouterLink to="/locations" aria-label="Location Canada">see location</RouterLink>
      </li>
      <li>
        <img src="../../assets/shared/desktop/illustration-australia.svg" alt="Australia">
        <p>Australia</p>
        <RouterLink to="/locations" aria-label="Location Australia">see location</RouterLink>
      </li>
      <li>
        <img src="../../assets/shared/desktop/illustration-united-kingdom.svg" alt="United Kingdom">
        <p>United Kingdom</p>
        <RouterLink to="/locations" aria-label="Location United Kingdom">see location</RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
}
ul {
  padding: 10rem 0rem 10rem 0rem;
  max-width: 69.375rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
li {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.625rem;
  position: relative;
}
li::before {
  content: "";
  position: absolute;
  width: 12.625rem;
  height: 12.625rem;
  border-radius: 50%;
  left: 0rem;
  top: 1.25rem;
  background: url("../../assets/shared/desktop/bg-pattern-small-circle.svg") no-repeat;
}
li p {
  font-weight: 500;
  font-size: 1.25rem;
  text-transform: uppercase;
  line-height: 1.625rem;
}
li a {
  width: 9.5rem;
  height: 3.5rem;
  display: grid;
  place-content: center;
  background: #E7816B;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  text-transform: uppercase;
  color: #FFFFFF;
}
/* tablet */
@media (max-width: 59.25rem) {
  ul {
    padding: 10rem 1.25rem 10rem 1.25rem;
  }
}
/* mobile */
@media (max-width: 41.875rem) {
  ul {
    flex-direction: column;
  }
}
</style>