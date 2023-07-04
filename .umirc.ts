import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  favicons: [
    // 完整地址
    // 'https://domain.com/favicon.ico',
    // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
    '/favicon.png',
  ],
  layout: {
    title: '西南国土生态环境监测智能预警技术研发与服务平台',
    layout: 'top',
  },
  routes: [
    {
      name: '登录',
      path: '/login',
      component: './Login',
      layout: 'top',
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      // footerRender: false,
      // 不展示菜单
      menuRender: false,
      fixedHeader: true,
      hideNav: true,
      // 不展示菜单顶栏
      // menuHeaderRender: false,
      hideInMenu: true,
      // flatMenu: false,
      // disabled: true,
      // access: 'canRead',
      // hideChildrenInMenu: true,
    },
    {
      path: '/',
      redirect: '/login',
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
      routes: [
        {
          name: '模型详情',
          path: '/models/detail/:id',
          component: './AlgorithmicModels/ModelDetail',
          hideChildrenInMenu: true,
          hideInMenu: true,
        },
      ],
    },
    {
      name: '模型详情',
      path: '/modelDetail/:id',
      component: './AlgorithmicModels/ModelDetail',
      hideChildrenInMenu: true,
      hideInMenu: true,
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
