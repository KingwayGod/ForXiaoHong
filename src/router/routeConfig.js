import page1 from '../views/module1';
import page2 from '../views/module2';
import Main from '../views/Main.vue';
export const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/page1',
    component: page1,
  },
  {
    path: '/page2',
    component: page2,
  },
];
