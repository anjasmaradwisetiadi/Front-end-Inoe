<template>
  <div id="PageNotFound">
    <div class="page-not-found">
      <div class="text-center">
        <h3 class="text-3xl font-bold mb-2">Page Not Found</h3>
        <div class="col d-flex justify-content-center">
          <button
            type="button"
            class="bg-gray-500 text-white rounded-lg py-1 px-4"
            @click="backRoute()"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

onMounted(()=>{

});

function backRoute (){
  router.push('/');
}
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