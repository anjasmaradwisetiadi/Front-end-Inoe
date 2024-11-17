<template>
  <div class="row">
    <div>
      Wellcome, this page will show to all user dada
    </div>
    <section class="w-full">
      <div class="container mx-auto flex flex-col lg:flex-row gap-4">
        <div class="w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 -mt-8 z-10 oveflow-hidden h-28">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Filter
              category="1"
              title="Product Type"
              :selected-value="selectedFilterProductType"
              :options="filterOptionsProductType"
            />
          </div>
        </div>
      </div>  
    </section>
  </div>
</template>
<script setup>
import Filter from './Filter.vue';
const selectedFilterProductType = 'Sandscreen';
const filterOptionsProductType = [ 
  {
    product_type: 'Casing',
    total_qty: 6106956
  },
  {
    product_type: 'Sandscreen',
    total_qty: 18579
  },
  {
    product_type: 'Pup Joint',
    total_qty: 8530
  },
  {
    product_type: 'Coupling',
    total_qty: 2049779
  }
];
</script>