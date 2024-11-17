import { createApp } from 'vue';

import App from './App.vue';
import axios from 'axios';
import mitt from 'mitt';
import router from './router';
import 'material-symbols';
import '../css/app.css';
import '../sass/app.scss';

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.emitter = emitter;

app.use(router);
app.mount('#app');