<template>
  <nav
    class="navbar is-dark is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
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
      <div class="navbar-end" v-if="loggedIn">
        <span class="navbar-item">{{ user.username }}</span>
        <a class="navbar-item" @click="logout">Logout</a>
      </div>
      <div class="navbar-end" v-else>
        <a class="navbar-item" @click="showLogin">Log in</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import LoginModal from "@/components/modals/LoginModal";
import * as aTypes from "@/store/action-types";

export default {
  name: "Navbar",
  data() {
    return {
      showNav: false
    };
  },
  computed: {
    ...mapGetters(["user", "loggedIn"])
  },
  methods: {
    showLogin() {
      this.$modal.open({
        parent: this,
        component: LoginModal
      });
    },
    logout() {
      this.$store.dispatch(aTypes.LOG_OUT);
    }
  },
  components: {
    /* eslint-disable vue/no-unused-components */
    LoginModal
  }
};
</script>
