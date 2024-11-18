<!-- eslint-disable max-len vue/no-v-html -->
<template>
  <div id="filter-component">
    <div
      class="w-full bg-gray-100 border border-gray-300 text-gray-500 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-5 items-center"
    >
      <div
        class="flex justify-between z-0 cursor-pointer px-1 py-1 border-2 border-lg shadow"
        data-test-id="click-handle"
        @click="onHandleVisibleDropdown"
      >
        <span>{{ props?.title }} </span>

        <span class="material-symbols-outlined text-yellow-600">
          {{ visibleDropdown ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
        </span>
      </div>
  
      <div class="w-full text-left z-10 mt-2 cursor-pointer">
        <template v-if="props?.selectedValue !== ''">
          <div
            class="flex justify-between"
            @click="onClickResetFilter(props?.category)"
          >
            <span class="font-bold text-yellow-600">
              {{ props?.selectedValue }}
            </span>
            <span class="material-symbols-outlined text-gray-500">
              cancel
            </span>
          </div>
        </template>
        <template v-else>
          <span class="font-bold text-yellow-600 uppercase">
            All
          </span>
        </template>
      </div>
    </div>
  
    <div
      v-show="visibleDropdown"
      class="w-full mt-2 z-10 bg-white border border-gray-300 rounded-lg "
    >
      <div class="p-3">
        <div>
          <p
            class="text-sm text-gray-500"
            v-html="computeTitleList(props.title)"
          />
        </div>
  
        <label
          for="input-group-search"
          class="sr-only"
        >
          Search
        </label>
  
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <span class="material-symbols-outlined text-gray-500">
              search
            </span>
          </div>
          <input
            v-model="searchValue"
            type="text"
            class="block w-full p-2 pl-6 ps-10 text-sm text-gray-900 border-b border-gray-300 focus:outline-none focus:ring-white"
            placeholder="Search"
            @keyup="onHandleFilterListItem"
          >
        </div>
      </div>
      <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
        <template v-if="!loading">
          <li
            v-for="(item, i) in props?.options"
            :key="i"
            class="flex flex-row justify-between py-2 px-3 hover:bg-gray-100 rounded-lg cursor-pointer"
            @click="onHandleSelectItem(props.category, item)"
          >
            <div>
              <span v-if="props.category === '1'">
                {{ item.product_type }}
              </span>
              <span v-if="props.category === '2'">
                {{ item.size }}
              </span>
              <span v-if="props.category === '3'">
                {{ item.grade }}
              </span>
              <span v-if="props.category === '4'">
                {{ item.connection }}
              </span>
            </div>
            <div>
              <span class="font-bold text-yellow-500">
                {{ computeFormatQty(item.total_qty) }}
              </span>
            </div>
          </li>
        </template>
        <template v-if="loading">
          <li class=" flex w-full justify-center text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
  
<script setup>
import { ref, defineEmits, defineProps, onBeforeMount } from 'vue';
import { utilize } from '../../utilize/index';

const visibleDropdown = ref(false); 
const searchValue = ref('');
const debounce = ref(null);
const loading =ref(false);

const props = defineProps({
  category: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  selectedValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => ([])
  }
});

const emit = defineEmits([
  'filterListItem',
  'closeSelectFilter',
  'onResetData',
  'onSelectData'
]);

onBeforeMount(()=>{
  const valueVisibleDropdown = false;
  visibleDropdown.value = valueVisibleDropdown;
});

function onHandleVisibleDropdown () {
  if (!visibleDropdown.value) {
    visibleDropdown.value = true;
  }
  else {
    visibleDropdown.value = false;
  }
}
function onClickResetFilter (category) {
  emit('onResetData', {
    category
  });
  
  visibleDropdown.value = false;
}
function computeTitleList (type) {
  let result = '';
  
  if (type === 'Product Type') {
    result = 'Select a <strong>Product Type</strong> below';
  }
  if (type === 'Size') {
    result = 'Select an <strong>OD</strong> below';
  }
  if (type === 'Grade') {
    result = 'Select a <strong>Grade Type</strong> below';
  }
  if (type === 'Connection') {
    result = 'Select a <strong>Connection Type</strong> below';
  }
  
  return result;
}
function computeFormatQty (param) {
  return utilize.formatedNumber(param);
}
function onHandleSelectItem (category, data) {
  emit('onSelectData', {
    category,
    data
  });
  
  onHandleVisibleDropdown();
}

function onHandleFilterListItem () {
  loading.value = true;
  clearTimeout(debounce.value);
  debounce.value = setTimeout(() => {
    const value = searchValue.value;
    const category = props?.category;
  
    emit('filterListItem', {
      category,
      value
    });
    loading.value =false;
  }, 1000);
}

</script>