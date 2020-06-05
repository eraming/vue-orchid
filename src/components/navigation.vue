<template>


<div id="app">
  <nav>

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

</div>


</template>

<script>

export default {
  el: '#app',
  name: 'navigation',
  data() {
    return {
      items: [
        {
          name: "Home",
          routeUrl: "/"
        },

        {
          name: "Photography",
          routeUrl: "/gallery"
        },

        {
          name: "Film Projects",
          routeUrl: "/filmprojects"
        },
        {
          name: "About",
          routeUrl: "/about"
        }
      ],
      show: false,

    };
  }
}

</script>

<style lang="scss">

// @import url('https://fonts.googleapis.com/css?family=Karla');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
$color-purple: #523F79;
$color-lavender: #807BE4;
$color-teal: #73CFF0;
$color-sea: #AFFFEA;
body {
  display: flex;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  align-items: center;
  height: 65vh;
}

nav {
  background-color: $color-purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 60px;
}

ul {
  align-self: flex-start;
  background-color: $color-purple;
  border-top: solid 3px $color-teal;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 60px;
  width: 100%;
}

li {
  align-items: center;
  color: $color-teal;
  cursor: pointer;
  display: flex;
  font-size: 1.5em;
  height: 2em;
  justify-content: center;
  list-style-type: none;

  transition: all .3s ease;
  &:hover {
    background-color: $color-lavender;
    color: $color-sea;
  }
}

#app {
  align-items: left;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 850px;
}

@media (max-width: 3000px) {
  #app {
    width: 100vw;
    height: 100vh;
  }
}

.card {
  margin-bottom: 5%;
  width: 90%;
  height: 26%;
  &:first-of-type {
    margin-top: 5%;
  }
}

// .fade-enter-active,
// .fade-leave-active {
//   topacity .2s ease;
// }

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.menu,
.clear {
  cursor: pointer;
  font-size: 3em;
  padding-left: 5%;
  transition: all .3s ease;
  width: 1.5em;
}

.menu {
  color: $color-lavender;
  &:hover,
  &:active {
    color: $color-teal;
  }
}

.clear {
  color: $color-teal;
  &:hover,
  &:active {
    color: $color-lavender;
  }
}




</style>
