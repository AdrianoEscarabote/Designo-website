<script>
export default {
  name: "Header",
  mounted() {
    
  }
}
</script>

<template>
  <header>
    <nav aria-label="main">
      <RouterLink to="/" aria-label="Designo - Home">
        <img src="../assets/shared/desktop/logo-dark.png" alt="" width="196" height="24" />
      </RouterLink>
      <ul>
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
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  padding: 65px 165px;
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

@media (max-width: 1140px) {
  nav {
    padding: 65px 20px;
  }
}

/* mobile menu */
@media (max-width: 610px) {

}
</style>