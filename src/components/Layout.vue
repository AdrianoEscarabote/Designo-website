<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>

<script>
export default {
  name: "Layout",
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<template>
  <div>
    <Header :is-open="isOpen" />
      <slot />
    <Footer />
  </div>
</template>