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

onMounted(()=>{
  initialize();
});


const selectedFilterProductType = computed(()=>{
  return filterProductStore?.selectedFilterProductType;
});

const filterOptionsProductType = computed(()=>{
  return filterProductStore?.filterOptionsProductType;
});

const selectedFilterSize = computed(()=>{
  return filterProductStore?.selectedFilterSize;
});

const filterOptionsSize = computed(()=>{
  return filterProductStore?.filterOptionsSize;
});

const selectedFilterGrade = computed(()=>{
  return filterProductStore?.selectedFilterGrade;
});

const filterOptionsGrade = computed(()=>{
  return filterProductStore?.filterOptionsGrade;
});

const selectedFilterConnection = computed(()=>{
  return filterProductStore?.selectedFilterConnection;
});


const filterOptionsConnection = computed(()=>{
  return filterProductStore?.filterOptionsConnection;
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

  console.log('res = ');
  console.log(res);

  
  console.log('body = ');
  console.log(body);

  const resFilterData = filterData(res, body);


  const resDataProductType = getDataProductType(resFilterData);
  console.log('resDataProductType = ');
  console.log(resDataProductType);
  // make store setFilterOptionsProductType

  const resDatasSize = getDataSize(resFilterData);
  console.log('resDatasSize = ');
  console.log(resDatasSize);
  // make store setFilterOptionsSize

  console.log('filterOptionsGrade = ');
  console.log(filterOptionsGrade);

  const resDataGrade = getDataGrade(resFilterData);
  console.log('resDataGrade = ');
  console.log(resDataGrade);
  // make store setFilterOptionsGrade

  const resDataConnection = getDataConnection(resFilterData);
  console.log('resDataConnection = ');
  console.log(resDataConnection);
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
  const sizeQtySum = data.reduce((acc, curr) => {
    if (acc[curr.size]) {
      acc[curr.size] += parseInt(curr.qty);
    }
    else {
      acc[curr.size] = parseInt(curr.qty);
    }
    return acc;
  }, {});

  const sizeQtyArray = Object.keys(sizeQtySum).map((size) => ({
    size,
    total_qty: sizeQtySum[size]
  }));

  return sizeQtyArray;
}

function getDataGrade (data){
  const gradeQtySum = data.reduce((acc, curr) => {
    if (acc[curr.grade]) {
      acc[curr.grade] += parseInt(curr.qty);
    }
    else {
      acc[curr.grade] = parseInt(curr.qty);
    }
    return acc;
  }, {});

  const gradeQtyArray = Object.keys(gradeQtySum).map((grade) => ({
    grade,
    total_qty: gradeQtySum[grade]
  }));
  console.log('getDataGrade = ');
  console.log(gradeQtyArray);
  return gradeQtyArray;
}
function getDataConnection (data){
  const connectionQtySum = data.reduce((acc, curr) => {
    if (acc[curr.connection]) {
      acc[curr.connection] += parseInt(curr.qty);
    }
    else {
      acc[curr.connection] = parseInt(curr.qty);
    }
    return acc;
  }, {});

  const connectionQtyArray = Object.keys(connectionQtySum).map((connection) => ({
    connection,
    total_qty: connectionQtySum[connection]
  }));
  console.log('connectionQtyArray = ');
  console.log(connectionQtyArray);
  return connectionQtyArray;
}


</script>