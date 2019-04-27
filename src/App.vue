<template>
  <div id="app">
    <Navbar />
    <router-view id="view" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import api from "@/api";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$match: #173F5F;
$match-invert: findColorInvert($match);
$player: #3CAEA3;
$player-invert: findColorInvert($player);
$champion: #ED553B;
$champion-invert: findColorInvert($champion);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "match": ($match, $match-invert),
    "player": ($player, $player-invert),
    "champion": ($champion, $champion-invert),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

html {
  overflow-y: auto !important;
}
#app {
  display: flex;
  min-height: calc(100vh - 60px);
  flex-direction: column;
}
#view {
  flex: 1;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
