import { defineStore } from 'pinia';

export const useFilterProductStore = defineStore('filterProduct', {
  state: () =>{
    return {
      loading: false,
      filterOptionsProductType: [],
      selectedFilterProductType: 'Sandscreen',
      selectedFilterSize: '30',
      selectedFilterConnection: 'Conductor'
    };
  },

  actions: {

    couponList (){
      console.log('trial get');
      this.loading = false;
    }
  },

  getters: {
    getterLoading (state) {
      return state.loading;
    }
  }
});
