<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
    import Navbar from '@/components/Navbar.vue';
    import Footer from '@/components/Footer.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
  
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>

</style>
