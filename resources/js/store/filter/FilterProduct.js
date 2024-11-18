import { defineStore } from 'pinia';

export const useFilterProductStore = defineStore('filterProduct', {
  state: () =>{
    return {
      loading: false,
      filterOptionsProductType: [
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
      ],
      selectedFilterProductType: 'Casing',
      filterOptionsSize: [
        {
          'size': '7',
          'total_qty': 0
        },
        {
          'size': '30',
          'total_qty': 0
        },
        {
          'size': '5 1/2',
          'total_qty': 0
        },
        {
          'size': '13 3/8',
          'total_qty': 0
        },
        {
          'size': '18 5/8',
          'total_qty': 0
        },
        {
          'size': '8 5/8',
          'total_qty': 0
        },
        {
          'size': '3 1/2',
          'total_qty': 0
        },
        {
          'size': '9 5/8',
          'total_qty': 0
        },
        {
          'size': '4 1/2',
          'total_qty': 0
        }
      ],
      selectedFilterSize: '30',
      filterOptionsGrade: [
        {
          'grade': 'API 5L X60',
          'total_qty': 24153
        },
        {
          'grade': 'N80-Q',
          'total_qty': 16110
        },
        {
          'grade': 'K55',
          'total_qty': 1037950
        },
        {
          'grade': 'N80-1',
          'total_qty': 5028743
        },
        {
          'grade': 'JFE-13CR-80',
          'total_qty': 0
        },
        {
          'grade': 'P110',
          'total_qty': 0
        },
        {
          'grade': 'L80-1',
          'total_qty': 0
        },
        {
          'grade': 'JFE-HP2-13CR-110',
          'total_qty': 0
        },
        {
          'grade': 'P110-ICY',
          'total_qty': 0
        },
        {
          'grade': 'JFE-13CR-95',
          'total_qty': 0
        },
        {
          'grade': 'Q125',
          'total_qty': 0
        },
        {
          'grade': 'L80-13Cr',
          'total_qty': 0
        },
        {
          'grade': 'L80',
          'total_qty': 0
        }
      ],
      selectedFilterGrade: 'API 5L X60',
      selectedFilterConnection: 'Conductor',
      filterOptionsConnection: [
        {
          'connection': 'Conductor',
          'total_qty': 24153
        },
        {
          'connection': 'Threaded & Coupled',
          'total_qty': 6082803
        }
      ]
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
