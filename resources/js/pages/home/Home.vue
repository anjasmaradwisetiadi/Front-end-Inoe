<template>
  <div class="w-full">
    <Banner />
    <section class="w-full bg-gray-100">
      <div class="container mx-auto flex flex-col lg:flex-row gap-4">
        <div class="w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 -mt-8 z-10 oveflow-hidden h-36">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Filter
              category="1"
              title="Product Type"
              :selected-value="selectedFilterProductType"
              :options="filterOptionsProductType"
              @onSelectData="onHandleSelectdata($event)"
              @onResetData="onHandleResetdata($event)"
              @filterListItem="onHandleFilterListItem($event)"
            />
            <Filter
              category="2"
              title="Size"
              :selected-value="selectedFilterSize"
              :options="filterOptionsSize"
              @onSelectData="onHandleSelectdata($event)"
              @onResetData="onHandleResetdata($event)"
              @filterListItem="onHandleFilterListItem($event)"
            />
            <Filter
              category="3"
              title="Grade"
              :selected-value="selectedFilterGrade"
              :options="filterOptionsGrade"
              @onSelectData="onHandleSelectdata($event)"
              @onResetData="onHandleResetdata($event)"
              @filterListItem="onHandleFilterListItem($event)"
            />
            <Filter
              category="4"
              title="Connection"
              :selected-value="selectedFilterConnection"
              :options="filterOptionsConnection"
              @onSelectData="onHandleSelectdata($event)"
              @onResetData="onHandleResetdata($event)"
              @filterListItem="onHandleFilterListItem($event)"
            />
          </div>
        </div>
      </div>  
    </section>
    <Explanation />
    <FormQuestion />
    <!-- <template v-if="getLoading">
      <Loading />
    </template> -->
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import Filter from './Filter.vue';
import Banner from './Banner.vue';
import Explanation from './Explanation.vue';
import FormQuestion from './FormQuestion.vue';
// import Loading from '@components/Loading.vue';
import { useFilterProductStore } from '@store/filter/FilterProduct';
import { getDataProduct } from '@utilize/index';

const filterProductStore = useFilterProductStore();

// const selectedFilterProductType = 'Sandscreen';

onMounted(()=>{
  initialize();
});

const getLoading = ref(false);

const selectedFilterProductType = computed(()=>{
  return filterProductStore.selectedFilterProductType;
});

const filterOptionsProductType = computed(()=>{
  return filterProductStore.filterOptionsProductType;
});

const selectedFilterSize = computed(()=>{
  return filterProductStore.selectedFilterSize;
});

const filterOptionsSize = computed(()=>{
  return filterProductStore.filterOptionsSize;
});

const selectedFilterGrade = computed(()=>{
  return filterProductStore.selectedFilterGrade;
});

const filterOptionsGrade = computed(()=>{
  return filterProductStore.filterOptionsGrade;
});

const selectedFilterConnection = computed(()=>{
  return filterProductStore.selectedFilterConnection;
});


const filterOptionsConnection = computed(()=>{
  return filterProductStore.filterOptionsConnection;
});


const getAllProduct = async () => {
  try {
    let response = await getDataProduct();
    return response;
  }
  catch (error) {
    console.log(error);
  }
};


const initialize = async (withLoader = false)=> {
  const res = await getAllProduct();

  if (withLoader) {
    await setTimeout(() => {
      // console.log('masuk sini timeout = ');
      // getLoading.value = true;
    }, 1000);
  }
  
  const body = {};

  console.log('selectedFilterProductType value = ', selectedFilterProductType);
  if (selectedFilterProductType.value !== '') {
    body['product_type'] = selectedFilterProductType.value;
  }
  if (selectedFilterSize.value !== '') {
    body['size'] = selectedFilterSize.value;
  }
  if (selectedFilterGrade.value !== '') {
    body['grade'] = selectedFilterGrade.value;
  }
  if (selectedFilterConnection.value !== '') {
    body['connection'] = selectedFilterConnection.value;
  }

  const resFilterData = filterData(res, body);

  const resDataProductType = filterProductStore.setMapDataProductType(resFilterData);
  filterProductStore?.setFilterOptionsProductType(resDataProductType);

  const resDatasSize = filterProductStore.setMapDataSize(resFilterData);
  filterProductStore?.setFilterOptionsSize(resDatasSize);

  const resDataGrade = filterProductStore.setMapDataGrade(resFilterData);
  filterProductStore?.setFilterOptionsGrade(resDataGrade);

  const resDataConnection =  filterProductStore.setMapDataConnection(resFilterData);
  filterProductStore?.setFilterOptionsConnection(resDataConnection);

  console.log('sudah sampai sini initialize -------- ');
  // getLoading.value = false;
  if (withLoader) {
    // console.log('bisa masuk sini');
    getLoading.value = false;
  }
};


// ********* start submit Fliter function handle
function onHandleSelectdata (event){
  if (event.category === '1') {
    filterProductStore?.setSelectedFilterProductType(event.data.product_type);
  }
  if (event.category === '2') {
    filterProductStore?.setSelectedOptionsSize(event.data.size);
  }
  if (event.category === '3') {
    filterProductStore?.setSelectedOptionsGrade(event.data.grade);
  }
  if (event.category === '4') {
    filterProductStore?.setSelectedOptionsConnection(event.data.connection);
  }

  initialize(true);
}
function onHandleResetdata (event){
  if (event.category === '1') {
    filterProductStore?.setSelectedFilterProductType('');
  }
  if (event.category === '2') {
    filterProductStore?.setSelectedOptionsSize('');
  }
  if (event.category === '3') {
    filterProductStore?.setSelectedOptionsGrade('');
  }
  if (event.category === '4') {
    filterProductStore?.setSelectedOptionsConnection('');
  }

  initialize(true);
}


function onHandleFilterListItem (event){
  const valueSearch = new RegExp(event.value, 'i');
  if (event.category === '1') {
    const filtered = filterOptionsProductType.value.filter((item) => {
      return valueSearch.test(item.product_type);
    });

    if (filtered.length > 0) {
      filterProductStore?.setFilterOptionsProductType(filtered);
    }
  }
  if (event.category === '2') {
    const filtered = filterOptionsSize.value.filter((item) => {
      return valueSearch.test(item.size);
    });

    if (filtered.length > 0) {
      filterProductStore?.setFilterOptionsSize(filtered);
    }
  }
  if (event.category === '3') { 
    const filtered = filterOptionsGrade.value.filter((item) => {
      return valueSearch.test(item.grade);
    });

    if (filtered.length > 0) {
      filterProductStore?.setFilterOptionsGrade(filtered);
    }
  }
  if (event.category === '4') {
    const filtered = filterOptionsConnection.value.filter((item) => {
      return valueSearch.test(item.connection);
    });

    if (filtered.length > 0) {
      filterProductStore?.setFilterOptionsConnection(filtered);
    }
  }
  if (event.value === '') {
    initialize();
  }
}

// ********* end submit Fliter function handle

function filterData (data, paramFilter) {
  let filterCriteria = paramFilter;

  const applyFilter = (data, criteria) => {
    if (!criteria) {
      return data; 
    }
    return data.filter((item) => {
      for (const key in criteria) {
        if (item[key] !== criteria[key]) {
          return false;
        }
      }
      return true;
    });
  };

  const filteredData = applyFilter(data, filterCriteria);
  const notFilteredData = data.filter((item) => !applyFilter([item], filterCriteria).length);
  const modifiedNotFilteredData = notFilteredData.map((item) => {
    return { ...item, qty: 0 };
  });

  const combinedData = [...filteredData, ...modifiedNotFilteredData];
  return combinedData;
}

</script>