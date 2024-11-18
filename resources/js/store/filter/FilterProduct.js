import { defineStore } from 'pinia';
// import instanceAxios from '../../utilize/InitializeAxios';
// import { getProducts } from '../../utilize/index';


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
      filterOptionsConnection: [],
      selectedFilterConnection: ''
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
      this.filterOptionsConnection = payload;
    },

    setSelectedOptionsConnection (payload){
      this.selectedFilterConnection = payload;
    },

    //******** */ get data product, size, grade, connection type mapping
    setMapDataProductType (data){
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
    
      return productTypeQtyArray;
    },

    setMapDataSize (data){
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
    },
    setMapDataGrade (data){
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
      return gradeQtyArray;
    },

    setMapDataConnection (data){
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
      return connectionQtyArray;
    }

  },

  getters: {
    getterLoading (state) {
      return state.loading;
    }
  }
});
