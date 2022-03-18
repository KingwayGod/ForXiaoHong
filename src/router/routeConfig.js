import page1 from '../views/GameForXiaoHong';
import page2 from '../views/module1';
import Main from '../views/Main.vue';
export const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/GameLoveXiaoHong',
    component: page1,
  },
  {
    path: '/page2',
    component: page2,
  },
];
