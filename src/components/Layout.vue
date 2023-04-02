<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>

<template>
  <div>
    <Header />
      <slot />
    <Footer />
  </div>
</template>