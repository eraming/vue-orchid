
import Vue from 'vue';
import VueRouter from 'vue-router';
import Photo from './views/Photo.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
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

      {
         path: '/photo/:id',
         name: 'photo',
         component: Photo,
       },

       {
         path:'/slider',
         name:'Slider',
         component: () =>import('./components/Slider')
       },


       {
         path:'/carousal',
         name:'Carousal',
         component: () =>import('./components/Carousal')
       },


    ],
});

export default router;
