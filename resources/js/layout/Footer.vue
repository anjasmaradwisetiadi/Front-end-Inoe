<template>
  <nav
    id="footer"
    class="w-full bg-white py-4 border-t border-gray-200"
  >
    <div class="container m-auto flex justify-between items-center">
      <div class="flex gap-4 items-center justify-center">
        <router-link
          to="/"
          class="mt-2"
        >
          <img
            id="skip-image"
            src="@assets/Icon/pipesales.svg"
            alt=""
          >
        </router-link>
          
        <span
          class="ml-2"
        >
          Pipesales &copy; {{ year }} All Rights Reserved.
        </span>
      </div>
  
      <div class="flex gap-4 items-center justify-center">
        <router-link
          to="/"
          class="text-yellow-500 underline"
        >
          Cookie Policy
        </router-link>
        <router-link
          to="/"
          class="text-yellow-500 underline"
        >
          Cookie Settings
        </router-link>
        <router-link
          to="/"
          class="text-yellow-500 underline"
        >
          Privacy Policy
        </router-link>
        <router-link
          to="/"
          class="text-yellow-500 underline"
        >
          Terms and Conditions
        </router-link>
      </div>
    </div>
  </nav>
</template>
  
<script setup>
import { ref } from 'vue';
// eslint-disable-next-line no-undef
const year = ref(new Date().getFullYear());

</script>