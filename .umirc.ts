import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '西南国土生态环境监测智能预警技术研发与服务平台',
    layout: 'top',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '智能技术',
      path: '/technology',
      component: './SmartTechnology',
    },
    {
      name: ' 算法模型',
      path: '/models',
      component: './AlgorithmicModels',
    },
    {
      name: '应用案例',
      path: '/cases',
      component: './Cases',
    },
    {
      name: ' 人才培养',
      path: '/team',
      component: './TeamDevelopment',
    },
  ],
  npmClient: 'yarn',
});
