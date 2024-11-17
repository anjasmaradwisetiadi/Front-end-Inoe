import { defineStore } from 'pinia';

export const useCouponStore = defineStore('coupon', {
  state: () =>{
    return {
      loading: false
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
