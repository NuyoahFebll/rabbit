//引入初始化样式文件
import '@/styles/common.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
const app = createApp(App);

//引入懒加载插件指令并且注册
import { lazyPlugin } from '@/directives/index';

// 引入全局组件插件
import { componentPlugin } from '@/components';

app.use(componentPlugin);

app.use(lazyPlugin);

app.use(createPinia());
app.use(router);

app.mount('#app');
