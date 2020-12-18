import Vue from 'vue'
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

Vue.use(Vuetify);

import fa from './i18n/fa';
import en from './i18n/en';

const options = {
    rtl: true,
    iconfont: 'fa',
    lang: {
        locales: { fa, en },
        current: 'fa',
    },
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
};

export default new Vuetify(options)
