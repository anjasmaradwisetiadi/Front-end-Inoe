<template>
  <nav class="w-full flex flex-col justify-center bg-white border-b border-gray-200">
    <div class="bg-gray-100 w-full py-2">
      <div class="container flex justify-between m-auto">
        <div class="flex justify-start">
          <router-link
            to="/"
            class="flex items-center mr-[0.5rem]"
          >
            <span class="material-symbols-outlined">
              key
            </span>
            <span class="ml-2 font-semibold">
              Login
            </span>
          </router-link>
          <router-link
            to="/"
            class="flex items-center"
          >
            <span class="material-symbols-outlined">
              account_circle
            </span>
            <span class="ml-2 font-semibold">
              Sign Up
            </span>
          </router-link>
        </div>
        <div class="flex justify-end gap-4">
          <div class="flex flex-col text-center justify-center items-center cursor-pointer">
            <span class="material-symbols-outlined">
              favorite
            </span>
            <span class="text-sm text-gray-600">
              Wishlist
            </span>
          </div>
          <div class="flex flex-col text-center justify-center items-center cursor-pointer">
            <span class="material-symbols-outlined">
              balance
            </span>
            <span class="text-sm text-gray-600">
              My Enquiry
            </span>
          </div>
          <div class="flex flex-col text-center justify-center items-center cursor-pointer">
            <span class="material-symbols-outlined">
              shopping_cart
            </span>
            <span class="text-sm text-gray-600">
              Compare
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container m-auto flex justify-between items-center py-3">
      <div class="flex items-center justify-center">
        <router-link
          to="/"
          class="mt-2"
        >
          <div class="mr-10">
            <img
              src="@assets/Icon/pipesales.svg"
              alt=""
            >
          </div>
        </router-link>
      </div>

      <div class="flex gap-4 items-center justify-center">
        <button class="bg-white border border-gray-300 rounded-lg py-1 px-4">
          About Pipesales
        </button>
        <button class="bg-white border border-gray-300 rounded-lg py-1 px-4">
          OCTG Marketplace
        </button>
        <button class=" border border-gray-300 rounded-lg py-1 px-4 bg-gray-primary">
          Blog
        </button>
        <button class="bg-[#30405b] text-white border border-gray-100 rounded-lg py-1 px-4">
          Search Pipeless
        </button>
        <button class="bg-[#30405b] text-white border border-gray-100 rounded-lg py-1 px-4">
          Shell My Pipes
        </button>
        <button class="bg-[#fe6602] text-white border border-gray-100 rounded-lg py-1 px-4">
          Enquire Now
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup>

</script>