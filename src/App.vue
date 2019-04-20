<template>
  <div id="app">
    <Navbar />
    <router-view id="view"/>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import api from '@/api'

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
html{
  overflow-y:auto !important;
}
#app {
  display: flex;
  min-height: calc(100vh - 60px);
  flex-direction: column;
}
#view{
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
