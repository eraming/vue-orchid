
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    routes:[
      {
        path:'/',
        name:'Landing',
        component: () =>import('./components/Lander')
      },

      {
        path:'/gallery',
        name:'Gallery',
        component: () =>import('./components/Gallery')
      },

    ]
});

export default router;
