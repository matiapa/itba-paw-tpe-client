import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import 'bootstrap';

import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-select.min.css';

import './assets/fonts/fontawesome-all.min.css'
import './assets/fonts/font-awesome.min.css'
import './assets/fonts/material-icons.min.css'
import './assets/fonts/simple-line-icons.min.css'
import './assets/fonts/fontawesome5-overrides.min.css'

import './assets/css/buttons.css';
import './assets/css/cards.css';
import './assets/css/fab.css';
import './assets/css/nav-tabs.css';
import './assets/css/sidebar.css';
import './assets/css/overlay.css';
import './assets/css/containers.css';


createApp(App).use(i18n).use(store).use(router).mount('#app')