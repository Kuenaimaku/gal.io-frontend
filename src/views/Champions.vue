<template>
  <div>
    <section class="hero is-champion is-bold block">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <!-- Left side -->
              <p class="title is-2">Champions</p>
              <p class="subtitle is-5">Under Construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="champions">
      <div class="container">
        <section
          class="columns is-vcentered is-centered"
          v-for="chunk in championChunks"
          v-bind:key="chunk[0].id"
        >
          <Champion
            v-for="champion in chunk"
            v-bind:key="champion.champion.championKey"
            v-bind:champion="champion"
          ></Champion>
        </section>
      </div>
      <b-loading :active.sync="this.loading" :is-full-page="false"></b-loading>
    </div>
    <div v-else>
      <div class="container">
        <nav class="level">
          <div class="level-item">
            <figure class="image">
              <img class="is-rounded" src="~@/assets/missing.png" />
            </figure>
          </div>
        </nav>
        <b-loading
          :active.sync="this.loading"
          :is-full-page="false"
        ></b-loading>
      </div>
    </div>
  </div>
</template>


<script>
import _ from "lodash";

import Champion from "@/components/Champion"
import Api from "@/api";

import { mapGetters } from "vuex";

export default {
  name: "Champions",
  data() {
    return {
      champions: null,
      loading: true
    };
  },
  async mounted() {
    try {
      const res = await Api.champions.fetchChampions();
      this.champions = res;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {

  },
  computed: {
    championChunks() {
      return _.chunk(Object.values(this.champions), 5);
    },
    ...mapGetters(["user", "loggedIn"])
  },
  components: {
    Champion
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#addPlayer {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  .button {
    border-radius: 9999px;
    height: 3em;
    width: 3em;
  }
}
</style>