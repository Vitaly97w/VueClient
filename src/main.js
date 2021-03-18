import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'

const Application = createApp(App)
Application.use(router)

Application.mount('#app')
