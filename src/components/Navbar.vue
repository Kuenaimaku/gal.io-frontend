<template>
  <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://kuenaimaku.com">
        <img
          src="https://kuenaimaku.com/assets/img/logo.png"
          width="73"
          height="32"
        />
      </a>

      <div
        class="navbar-burger burger"
        v-on:click="showNav = !showNav"
        v-bind:class="{ 'is-active': showNav }"
        data-target="navbar"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" v-bind:class="{ 'is-active': showNav }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/matches" class="navbar-item">Matches</router-link>
        <router-link to="/players" class="navbar-item">Players</router-link>
        <router-link to="/champions" class="navbar-item">Champions</router-link>
      </div>
      <div class="navbar-end">
        <a class="navbar-item" @click="showLogin">Log in</a>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    showLogin() {
      this.$modal.open({
        parent: this,
        component: LoginModal
      });
    }
  },
  components: {
  }
};
</script>
