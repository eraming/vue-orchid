 <template>

<div id="app">
  <vue-navigation-bar :options="navbarOptions" />


   <!-- <router-view/> -->
  <!-- <nav>

    <transition name="fade" mode="out-in">
      <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu">menu</i>
      <i class="material-icons clear" v-else @click="show = !show" key="clear">clear</i>
    </transition>

    <transition name="fade">
      <ul v-if="show">
        <li v-for="item in items" :key="item" >
          <router-link :to="item.routeUrl" v-if="show"> {{item.name}}</router-link>
        </li>
      </ul>
    </transition>

  </nav>

</div> -->
</div>
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import VueNavigationBar from "vue-navigation-bar";

export default {
  components: { VueNavigationBar },


  el: '#router-nav',
  name: 'navigation',
  data() {
    return {
      // items: [
      //   {
      //     name: "Home",
      //     routeUrl: "/"
      //   },
      //
      //   {
      //     name: "Photography",
      //     routeUrl: "/gallery"
      //   },
      //
      //   {
      //     name: "Film Projects",
      //     routeUrl: "/filmprojects"
      //   },
      //   {
      //     name: "About",
      //     routeUrl: "/about"
      //   }
      // ],
      // show: false,
navbarOptions: {
           elementId: 'main-navbar',
           isUsingVueRouter: true,
           mobileBreakpoint: 600,
           brandImagePath: './',
           brandImage: require('@/assets/images/lockup-color.png'),
           brandImageAltText: 'brand-image',
           collapseButtonImageOpen: require('@/assets/images/collapse-menu-dark.png'),
           collapseButtonImageClose: require('@/assets/images/times.png'),
           showBrandImageInMobilePopup: true,
           ariaLabelMainNav: 'Main Navigation',
           tooltipAnimationType: 'shift-away',
           menuOptionsLeft: [
             {
               type: 'link',
               text: 'About',
               subMenuOptions: [
                 {
                   isLinkAction: true,
                   type: "link",
                   text: "Contact",
                   subText: "short film",
                   path: "./filmprojects",
                   iconLeft: '<i class="fa fa-star fa-fw"></i>'
                 }

               ]
             },
             {
               type: 'link',
               text: 'Film Projects',
               subMenuOptions: [
                 {
                   isLinkAction: true,
                   type: "link",
                   text: "The Catching",
                   subText: "short film",
                   path: "./filmprojects",
                   iconLeft: '<i class="fa fa-star fa-fw"></i>'
                 },
                 {
                   type: 'hr',
                 },
                 {
                   type: 'link',
                   text: 'Tincture',
                   path: './tincture',
                 }
               ]
             },
             {
               type: 'link',
               text: 'Photography',
               subMenuOptions: [
                 {
                   type: 'link',
                   text: 'Customer Service',
                   path: './gallery'
                 }
                 // {
                 //   type: 'hr',
                 // },
                 // {
                 //   type: 'link',
                 //   text: 'Reception',
                 //   path: './reception',
                 //   iconLeft: '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>',
                 // },
               ]
             }

           ]
         }
       }
     }

 }

</script>

<style lang="scss">

.vnb {
  .button-red {
    background: #ff3b30;

    &:hover {
      background: darken(#ff3b30, 10%);
    }
  }

  &__menu-options {
    &--left {
      color: red;
    }
  }

  &__sub-menu-options {
    &__option {

      &__link {
        color: black;
        &:hover {

        }
      }

}
}
}

// @import url('https://fonts.googleapis.com/css?family=Karla');
// @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
// $color-purple: #523F79;
// $color-lavender: #807BE4;
// $color-teal: #73CFF0;
// $color-sea: #AFFFEA;
// body {
//   display: flex;
//   font-family: 'Roboto', sans-serif;
//   justify-content: center;
//   align-items: center;
//   height: 65vh;
// }
//
// nav {
//   background-color: $color-purple;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   width: 100%;
//   height: 60px;
// }
//
// ul {
//   align-self: flex-start;
//   background-color: $color-purple;
//   border-top: solid 3px $color-teal;
//   margin: 0;
//   padding: 0;
//   position: absolute;
//   top: 60px;
//   width: 100%;
// }
//
// li {
//   align-items: center;
//   color: $color-teal;
//   cursor: pointer;
//   display: flex;
//   font-size: 1.5em;
//   height: 2em;
//   justify-content: center;
//   list-style-type: none;
//
//   transition: all .3s ease;
//   &:hover {
//     background-color: $color-lavender;
//     color: $color-sea;
//   }
// }
//
// #app {
//   align-items: left;
//   display: flex;
//   flex-direction: column;
//   width: 500px;
//   height: 850px;
// }
//
// @media (max-width: 3000px) {
//   #app {
//     width: 100vw;
//     height: 100vh;
//   }
// }
//
// .card {
//   margin-bottom: 5%;
//   width: 90%;
//   height: 26%;
//   &:first-of-type {
//     margin-top: 5%;
//   }
// }
//
// // .fade-enter-active,
// // .fade-leave-active {
// //   topacity .2s ease;
// // }
//
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }
//
// .menu,
// .clear {
//   cursor: pointer;
//   font-size: 3em;
//   padding-left: 5%;
//   transition: all .3s ease;
//   width: 1.5em;
// }
//
// .menu {
//   color: $color-lavender;
//   &:hover,
//   &:active {
//     color: $color-teal;
//   }
// }
//
// .clear {
//   color: $color-teal;
//   &:hover,
//   &:active {
//     color: $color-lavender;
//   }
// }




</style>
