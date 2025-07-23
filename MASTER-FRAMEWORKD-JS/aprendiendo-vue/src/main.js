import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueMoment from "vue3-moment";

const moment = require('moment');
require('moment/locale/es');


const app = createApp(App);
app.config.globalProperties.$filters = {
    mayusculas(value){
        return value.toUpperCase();
    }
}
app.use(VueMoment, { moment });
app.use(router);
app.mount('#app');