import Banner from '../pages/Home/Banner.vue';
// ********* stil problem with render element image src
// import Footer from '../layout/Footer.vue';
import Explanation from '../pages/Home/Explanation.vue';
import FormQuestion from '../pages/Home/FormQuestion.vue';
import Filter from '../pages/Home/Filter.vue';
import { shallowMount , mount } from '@vue/test-utils';
import useEmitter from '../utilize/useEventBus';
const emitter = useEmitter();

describe('Testing Page Home ', () => {
    
  // Test untuk Component A
  describe('Component Banner', () => {
    test('Display Component Banner renders ', () => {
      const wrapper = shallowMount(Banner);
      const title = wrapper.find('#title-banner').text(); // Ambil teks dari elemen dengan id="title"
      expect(title).toContain('Your global marketplace to');
    });
  });

//   describe('Component Filter', () => {
// 
//     beforeEach(() => {
//       expect.spyOn(emitter, 'emit').mockImplementation(() => {}); // Mock fungsi emit
//     });
//     
//     afterEach(() => {
//       expect.restoreAllMocks(); // Kembalikan fungsi asli setelah setiap tes
//     });
// 
//     it('should not throw error when emit is called', () => {
//       // Tes tanpa error saat emit dipanggil
//       expect(() => {
//         emitter.emit('toggle-sidebar', true);
//       }).not.toThrow();
//     });
// 
//     it('Display Component Filters renders', () => {
//       const wrapper = shallowMount(Filter);
//       expect(wrapper.find('#filter-component').exists()).toBe(true); // Memastikan elemen utama ada
//     });
//   });

  describe('Component Explanation', () => {
    it('Display Component Explanation renders', () => {
      const wrapper = shallowMount(Explanation);
      expect(wrapper.find('#explanation').exists()).toBe(true); // Memastikan elemen utama ada
    });
  });

  describe('Component Form Question', () => {
    it('Display Component Form Question renders', () => {
      const wrapper = shallowMount(FormQuestion);
      expect(wrapper.find('#form-question').exists()).toBe(true); // Memastikan elemen utama ada
    });
  });
});

