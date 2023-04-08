<script>
export default {
  title: "App",
  components: {
    RouterView,
    Spinner
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }
}
</script>

<script setup>
import Spinner from 'vue-spinner/src/PacmanLoader.vue';
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="wrapper_spinner" v-if="isLoading">
    <Spinner :loading="isLoading" :scale="0.5" color="#E7816B" aria-expanded="true" />
  </div>
  <RouterView v-else />
</template>

<style>
/* global styles */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul {
  list-style: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Jost', sans-serif;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.sr-only {
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  padding: 0;
  margin: -0.0625rem;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
body::-webkit-scrollbar {
  width: 0.75rem;              
}
body::-webkit-scrollbar-track {
  background: transparent;        
}
body::-webkit-scrollbar-thumb {
  background: #E7816B; 
}

body::-webkit-scrollbar-thumb:hover {
  background: #FFAD9B; 
}
.hidden {
  overflow: hidden !important;
}
.wrapper_spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
</style>