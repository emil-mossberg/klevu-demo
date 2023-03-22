import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { KlevuConfig } from "@klevu/core";

import App from './App.vue'
import router from './router'

import './assets/main.css'

KlevuConfig.init({
    url: "INSERT_URL",
    apiKey: "INSERT_KEY",
  });

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
