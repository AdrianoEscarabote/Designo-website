<script>
import { RouterLink } from 'vue-router'

export default {
  name: "Header",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    changeIsOpen() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<template>
  <header>
    <nav aria-label="main">
      <RouterLink to="/" aria-label="Designo - Home">
        <img src="../../assets/shared/desktop/logo-dark.png" alt="" width="196" height="24" />
      </RouterLink>
      <button @click="changeIsOpen">
        <img src="../../assets/shared/mobile/icon-hamburger.svg" class="icon-menu" v-if=" isOpen " />
        <img src="../../assets/shared/mobile/icon-close.svg" class="icon-close" v-if=" !isOpen " />
      </button>
      <ul v-bind:class='{ "list-mobile" : !isOpen }'>
        <li>
          <RouterLink to="/about" aria-label="Designo - Company">our company</RouterLink>
        </li>
        <li>
          <RouterLink to="/locations" aria-label="Designo - Locations">locations</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" aria-label="contact">contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
}
.icon-menu {
  width: 20px;
  height: 20px;
  background: url("../assets/shared/mobile/icon-hamburger.svg");
}
.icon-close {
  width: 20px;
  height: 20px;
  background: url("../assets/shared/mobile/icon-close.svg");
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  padding: 65px 165px;
}
nav button {
  display: none;
}
nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
}
li a {
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #333136;
}
li a:hover {
  border-bottom: 1px solid #33313652;
}
@media (max-width: 1140px) {
  nav {
    padding: 65px 20px;
  }
}
/* mobile menu */
@media (max-width: 620px) {
  nav {
    width: 100%;
    justify-content: space-between;
  }
  nav button {
    display: block;
    width: 32px;
    height: 32px;
  }
  nav ul {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    height: 0px;
  }
  ul.list-mobile {
    transition: 0.6s ease-in-out;
    opacity: 1;
    width: 100%;
    top: 150px;
    left: 0px;
    height: 280px;
    z-index: 1;
    position: absolute;
    visibility: visible;
    background-color: #333136;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
  }
  ul.list-mobile a {
    color: #ffffff;
    font-size: 24px;
    line-height: 25px;
  }
}
</style>