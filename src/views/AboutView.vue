<script>
import Layout from '../components/Layout.vue';
export default {
  name: "Estou no teste",
  mounted() {
    document.title = "Designo - About"
  },
  components: {
    Layout
  }
}
</script>

<template>
  <Layout>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </Layout>
</template>