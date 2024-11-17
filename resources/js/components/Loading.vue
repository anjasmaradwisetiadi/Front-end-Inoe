<template>
  <div>
    <div
      id="modal-bg"
      class="w-full h-full z-40 absolute top-0 absolute blur-background"
    />
    <div 
      class="sm:w-[385px] sm:min-w-[30vw] min-w-[60vw] min-h-[30vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 top-1/2 left-1/2 -translate-x-1/2 absolute z-20"
    >
      <img
        src="@assets/icon/spinner.svg"
        alt="spinner"
      >
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
    .page-not-found{
        position: relative;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        display: flex;
    }
</style>