<script setup></script>

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
      <RouterLink to="/home" aria-label="Designo - Home">
        <img src="../assets/shared/desktop/logo-dark.png" alt="" width="196" height="24" />
      </RouterLink>
      <ul>
        <li>
          <a href="/" aria-label="Designo - Company">our company</a>
        </li>
        <li>
          <a href="/" aria-label="Designo - Locations">locations</a>
        </li>
        <li>
          <a href="/" aria-label="contact">contact</a>
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
}
</style>