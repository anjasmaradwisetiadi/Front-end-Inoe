<template>
  <div class="w-full">
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
              @onSelectData="onHandleSelectdata($event)"
              @onResetData="onHandleResetdata($event)"
              @filterListItem="onHandleFilterListItem($event)"
            />
          </div>
        </div>
      </div>  
    </section>
    <template v-if="getLoading">
      <Loading />
    </template>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import Filter from './Filter.vue';
import Loading from '@components/Loading.vue';
import { useFilterProductStore } from '@store/filter/FilterProduct';
import { getDataProduct } from '@utilize/index';

const filterProductStore = useFilterProductStore();

// const selectedFilterProductType = 'Sandscreen';
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

onMounted(()=>{
  initialize();
});

const selectedFilterProductType = computed(()=>{
  return filterProductStore?.selectedFilterProductType;
});

const selectedFilterSize = computed(()=>{
  return filterProductStore?.selectedFilterSize;
});

const selectedFilterGrade = computed(()=>{
  return filterProductStore?.selectedFilterSize;
});

const selectedFilterConnection = computed(()=>{
  return filterProductStore?.selectedFilterConnection;
});

const getLoading = ref(false);

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
  if (withLoader) {
    setTimeout(() => {
      getLoading.value = true;
    }, 1000);
  }


  const res = await getAllProduct();
  const body = {};

  console.log('selectedFilterProductType initialize = ');
  console.log(selectedFilterProductType);

  if (selectedFilterProductType !== '') {
    body['product_type'] = selectedFilterProductType;
  }
  if (selectedFilterSize !== '') {
    body['size'] = selectedFilterSize;
  }
  if (selectedFilterGrade !== '') {
    body['grade'] = selectedFilterGrade;
  }
  if (selectedFilterConnection !== '') {
    body['connection'] = selectedFilterConnection;
  }

  const resFilterData = filterData(res, body);

  const resDataProductType = getDataProductType(resFilterData);
  console.log('resDataProductType = ');
  console.log(resDataProductType);
  // make store setFilterOptionsProductType

  // const resDatasSize = getDataSize(resFilterData);
  // make store setFilterOptionsSize

  // const resDataGrade = getDataGrade(resFilterData);
  // make store setFilterOptionsGrade

  // const resDataConnection = getDataConnection(resFilterData);
  // make store setFilterOptionsConnection


  if (withLoader) {
    getLoading.value = false;
  }
};


// ********* start submit Fliter function handle
function onHandleSelectdata (event){
  console.log('onHandleSelectdata = ');
  console.log(event);
}
function onHandleResetdata (event){
  console.log('onHandleResetdata = ');
  console.log(event);
}


function onHandleFilterListItem (event){
  console.log('onHandleFilterListItem = ');
  console.log(event);
}

// ********* end submit Fliter function handle

function filterData (data, paramFilter) {
  console.log('data = ');
  console.log(data);
  console.log('paramFilter = ');
  console.log(paramFilter);
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

//******** */ get data product type mapping
function getDataProductType (data) {
  const productTypeQtySum = data.reduce((acc, curr) => {
    if (acc[curr.product_type]) {
      acc[curr.product_type] += parseInt(curr.qty);
    }
    else {
      acc[curr.product_type] = parseInt(curr.qty);
    }
    return acc;
  }, {});

  const productTypeQtyArray = Object.keys(productTypeQtySum).map((productType) => ({
    product_type: productType,
    total_qty: productTypeQtySum[productType]
  }));
  console.log('SET_FILTER_OPTIONS_PRODUCT_TYPE access = ');
  console.log(productTypeQtyArray);

  return productTypeQtyArray;
}

function getDataSize (data){
  console.log('getDataSize = ');
  console.log(data);
  return data;
}

function getDataGrade (data){
  console.log('getDataGrade = ');
  console.log(data);
  return data;
}
function getDataConnection (data){
  console.log('getDataConnection = ');
  console.log(data);
  return data;
}


</script>