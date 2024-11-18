import dataProduct from './DataProduct.json';
export const getDataProduct = () => {
  return dataProduct;
};

export const utilize = {
  formatedNumber (number, format = '.'){
    if(number){
      const formattedNumber = number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, format);
      return formattedNumber;
    } 
    return number;
  },
  formatRupiah (value){
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0, // Tidak menampilkan desimal
      maximumFractionDigits: 0
    }).format(value);
  }
};