<script>
import { RouterLink } from 'vue-router'

export default {
  name: "Header",
  watch: {
    isOpen(newValue) {
      newValue ? document.querySelector("body").classList.add("hidden") : document.querySelector("body").classList.remove("hidden");
    }
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
  },
};
</script>

<template>
  <header>
    <nav aria-label="main">
      <RouterLink to="/" aria-label="Designo - Home">
        <img src="../../assets/shared/desktop/logo-dark.png" alt="" width="196" height="24" />
      </RouterLink>
      <button @click="isOpen = !isOpen">
        <img src="../../assets/shared/mobile/icon-hamburger.svg" class="icon-menu" v-if=" !this.$props.isOpen " alt="" />
        <img src="../../assets/shared/mobile/icon-close.svg" class="icon-close" v-if=" this.$props.isOpen " alt="" />
      </button>
      <div class="wrapper_list" :aria-expanded="isOpen ? 'true' : 'false'" :class="{ 'open': isOpen }" @click="isOpen = !isOpen">
        <ul :class="{ 'list-mobile': isOpen }" @click="$event.stopPropagation()">
          <li>
            <RouterLink @click="isOpen = !isOpen" to="/about" aria-label="Designo - Company">our company</RouterLink>
          </li>
          <li>
            <RouterLink @click="isOpen = !isOpen" to="/locations" aria-label="Designo - Locations">locations</RouterLink>
          </li>
          <li>
            <RouterLink @click="isOpen = !isOpen" to="/contact" aria-label="Designo - contact">contact</RouterLink>
          </li>
        </ul>
      </div>
      <ul className="list_desktop">
        <li>
          <RouterLink to="about" aria-label="Designo - Company">our company</RouterLink>
        </li>
        <li>
          <RouterLink to="locations" aria-label="Designo - Locations">locations</RouterLink>
        </li>
        <li>
          <RouterLink to="contact" aria-label="Designo - contact">contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.wrapper_list ul {
  display: none;
}
header {
  display: flex;
  justify-content: center;
}
.icon-menu {
  width: 2.25rem;
  height: 2.25rem;
}
.icon-close {
  width: 2.25rem;
  height: 2.25rem;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90rem;
  padding: 4.0625rem 10.3125rem;
}
nav button {
  display: none;
}
nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.625rem;
}
li a {
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 0.875rem;
  letter-spacing: 0.125rem;
  color: #333136;
}
li a:hover {
  border-bottom: 0.0625rem solid #33313652;
}
@media (max-width: 71.25rem) {
  nav {
    padding: 4.0625rem 1.25rem;
  }
}
/* mobile menu */
@media (max-width: 620px) {
  .list_desktop {
    display: none;
  } 
  .wrapper_list {
    position: fixed;
    left: 0rem;
    top: 8.75rem;
    z-index: 10000 !important;
  }
  button {
    border: unset;
    background: transparent;
  }
  .wrapper_list ul {
    display: flex;
  }
  .wrapper_list.open {
    background-color: rgba(0, 0, 0, 0.589);
    z-index: 100;
    min-height: 100%;
    width: 100%;
  }
  nav {
    width: 100%;
    justify-content: space-between;
  }
  nav button {
    display: block;
    width: 2rem;
    height: 2rem;
  }
  nav ul {
    position: absolute;
    width: 100%;
    left: -1.25rem;
    opacity: 0;
    visibility: hidden;
    height: 0rem;
  }
  ul.list-mobile {
    transition: 0.6s ease-in-out;
    opacity: 1;
    width: 100%;
    left: 0rem;
    height: 17.5rem;
    z-index: 1;
    position: absolute;
    visibility: visible;
    background-color: #333136;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1.25rem;
  }
  ul.list-mobile a {
    color: #ffffff;
    font-size: 1.5rem;
    line-height: 1.5625rem;
  }
}
</style>