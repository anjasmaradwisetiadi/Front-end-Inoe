import { defineStore } from 'pinia';

export const useFilterProductStore = defineStore('filterProduct', {
  state: () =>{
    return {
      loading: false,
      filterOptionsProductType: [],
      selectedFilterProductType: '',
      filterOptionsSize: [],
      selectedFilterSize: '',
      filterOptionsGrade: [],
      selectedFilterGrade: '',
      selectedFilterConnection: '',
      filterOptionsConnection: []
    };
  },

  actions: {

    setFilterOptionsProductType (payload){
      this.filterOptionsProductType = payload;
    },

    setSelectedFilterProductType (payload){
      this.selectedFilterProductType = payload;
    },
    setFilterOptionsSize (payload){
      this.filterOptionsSize = payload;
    },

    setSelectedOptionsSize (payload){
      this.selectedFilterSize = payload;
    },
    
    setFilterOptionsGrade (payload){
      this.filterOptionsGrade = payload;
    },

    setSelectedOptionsGrade (payload){
      this.selectedFilterGrade = payload;
    },

    setFilterOptionsConnection (payload){
      this.filterOptionsGrade = payload;
    },

    setSelectedOptionsConnection (payload){
      this.selectedFilterConnection = payload;
    }
  },

  getters: {
    getterLoading (state) {
      return state.loading;
    }
  }
});
