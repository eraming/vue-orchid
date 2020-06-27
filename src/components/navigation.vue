 <template>

<div id="app">
  <vue-navigation-bar :options="navbarOptions" />
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

      navbarOptions: {
                 elementId: 'main-navbar',
                 isUsingVueRouter: true,
                 mobileBreakpoint: 992,
                 brandImagePath: './',
                 // brandImage: require('@/assets/images/lockup-color.png'),
                 brandImageAltText: 'brand-image',
                 collapseButtonImageOpen: require('@/assets/images/collapse-menu-dark.png'),
                 collapseButtonImageClose: require('@/assets/images/times.png'),
                 showBrandImageInMobilePopup: true,
                 ariaLabelMainNav: 'Main Navigation',
                 tooltipAnimationType: 'shift-away',
                 menuOptionsLeft: [
                   {
                     type: 'dropdown',
                     subMenuOptions: [
                       {
                         isLinkAction: true,
                         type: "link",
                         text: "home",
                         path: "./",
                         iconLeft: '<i class="fa fa-star fa-fw"></i>'
                       },
                       {
                         type: 'hr',
                       },
                       {
                         type: 'link',
                         text: 'photography',
                         path: './gallery',
                       },
                       {
                         type: 'hr',
                       },
                       {
                         type: 'link',
                         text: 'about',
                         path: './blog',
                       },
                     ]
                   },
                   {
                     type: 'link',
                     text: 'short films',
                     subMenuOptions: [
                       {
                         type: 'link',
                         text: 'tincture',
                         path: './tincture'
                       },
                       {
                         type: 'link',
                         text: 'the catching',
                         path: './catching',
                       }
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
