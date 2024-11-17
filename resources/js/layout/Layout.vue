<template>
  <div class="w-full flex flex-col justify-center">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>
<style>

</style>