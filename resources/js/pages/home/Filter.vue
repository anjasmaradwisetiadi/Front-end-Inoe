<!-- eslint-disable max-len vue/no-v-html -->
<template>
  <div>
    <button
      class="w-full bg-gray-100 border border-gray-300 text-gray-500 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-5 items-center"
      type="button"
    >
      <div
        class="flex justify-between"
        @click="onHandleVisibleDropdown"
      >
        <span>{{ props?.title }} </span>
        <FontAwesomeIcon
          class="text-sm text-yellow-600"
          :icon="(visibleDropdown ? 'chevron-up' : 'chevron-down')"
        />
      </div>
  
      <div class="w-full text-left">
        <template v-if="props?.selectedValue !== ''">
          <div
            class="flex justify-between"
            @click="onClickResetFilter(props?.category)"
          >
            <span class="font-bold text-yellow-600">
              {{ props?.selectedValue }}
            </span>
            <FontAwesomeIcon
              class="text-sm text-gray-500"
              icon="times-circle"
            />
          </div>
        </template>
        <template v-else>
          <span class="font-bold text-yellow-600 uppercase">
            All
          </span>
        </template>
      </div>
    </button>
  
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
            <FontAwesomeIcon
              class="text-sm text-gray-500"
              icon="search"
            />
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
      </ul>
    </div>
  </div>
</template>
  
<script setup>
import { ref, defineEmits, defineProps, onBeforeMount } from 'vue';
import { utilize } from '@utilize/index';
import useEmitter from '@utilize/useEventBus';

const emitter = useEmitter();
const visibleDropdown = ref(false); 
const searchValue = ref('');
const debounce = ref(null);

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
  // change to emiiter
  // this.$eventBus.$on('closeSelectFilter', () => {
  //   visibleDropdown.value = false;
  // });
  // 

  const valueVisibleDropdown = false;
  visibleDropdown.value = valueVisibleDropdown;
    
  emitter.emit('toggle-sidebar', valueVisibleDropdown);
});

function onHandleVisibleDropdown () {
  if (!visibleDropdown.value) {
    // change to emiiter
    // this.$eventBus.$emit('closeSelectFilter');

    emitter.on('closeSelectFilter');
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
  
  this.onHandleVisibleDropdown();
}

function onHandleFilterListItem () {
  clearTimeout(debounce.value);
  debounce.value = setTimeout(() => {
    const value = searchValue.value;
    const category = props?.category;
  
    emit('filterListItem', {
      category,
      value
    });
  }, 1000);
}

</script>