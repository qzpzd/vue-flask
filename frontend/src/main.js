// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// // 导入Vue
// // import Vue from 'vue'

// // 导入Element Plus库及其样式
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// // 引入axios并将其绑定到Vue原型上
// import axios from 'axios'
// Vue.prototype.$axios = axios // 注意：这里不应该使用Vue.use(axios)，而是直接绑定到原型

// // createApp(App).use(store).use(router).mount('#app')
// // 导入并注册Element Plus
// createApp(App).use(ElementPlus).use(router).use(store).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 导入Element Plus库及其样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入axios并将其绑定到Vue应用程序上下文（Vue Composition API中的setup函数可以访问）
const app = createApp(App)

app.config.globalProperties.$axios = axios

// 注册Element Plus、Router和Store
app.use(ElementPlus)
app.use(router)
app.use(store)

// 挂载到DOM元素上
app.mount('#app')
