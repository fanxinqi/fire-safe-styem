// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/account',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: '登录',
          path: '/account/login',
          component: './account/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/user/org',
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              name: '首页',
              icon: 'home',
              path: '/home',
              component: './Home',
            },
            {
              name: '用户管理',
              icon: 'user',
              path: '/user',
              routes: [
                {
                  name: '机构管理',
                  icon: 'smile',
                  path: '/user/org',
                  component: './User/Org',
                },
                {
                  name: '角色管理',
                  icon: 'smile',
                  path: '/user/role',
                  component: './User/Role',
                },
                {
                  name: '用户列表',
                  icon: 'smile',
                  path: '/user/user',
                  component: './User/User',
                },
              ],
            },
            {
              name: '资产管理',
              icon: 'TransactionOutlined',
              path: '/asset',
              routes: [
                {
                  name: '产品类型',
                  icon: 'smile',
                  path: '/asset/product_type',
                  component: './Asset/ProductType',
                },
                {
                  name: '地址管理',
                  icon: 'smile',
                  path: '/asset/address',
                  component: './Asset/Address',
                },
                {
                  name: '存放点管理',
                  icon: 'smile',
                  path: '/asset/storage',
                  component: './Asset/Storage',
                },
                {
                  name: '设备管理',
                  icon: 'smile',
                  path: '/asset/device',
                  component: './Asset/Device',
                },
                // {
                //   name: '地图管理',
                //   icon: 'smile',
                //   path: '/asset/storage',
                //   component: './Asset/Map',
                // },
              ],
            },
            {
              name: '任务管理',
              icon: 'SolutionOutlined',
              path: '/task',
              routes: [
                {
                  name: '合同管理',
                  icon: 'smile',
                  path: '/task/contract',
                  component: './Task/Contract',
                },
                {
                  name: '任务管理',
                  icon: 'smile',
                  path: '/task/manage',
                  component: './Task/Manage',
                }
              ]
              },
            // {
            //   name: '标准列表',
            //   icon: 'smile',
            //   path: '/listbasiclist',
            //   component: './ListBasicListTwo',
            // },
            // {
            //   name: '标准列表',
            //   icon: 'smile',
            //   path: '/listbasiclist',
            //   component: './ListBasicList',
            // },
            // {
            //   name: 'list.table-list',
            //   icon: 'table',
            //   path: '/list',
            //   component: './ListTableList',
            // },
            // {
            //   name: '工作台',
            //   icon: 'smile',
            //   path: '/dashboardworkplace',
            //   component: './DashboardWorkplace',
            // },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.custormColor,
    // 'menu-dark-bg': '#ffffff',
    'layout-sider-background': '#ffffff', // 'menu-dark-submenu-bg': '#000B14',
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
