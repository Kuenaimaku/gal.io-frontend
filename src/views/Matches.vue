<template>
  <div class="matches">
    <section class="hero is-success is-bold block">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <!-- Left side -->
              <p class="title is-2">Matches</p>
              <p class="subtitle is-5">Under Construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Match
        v-for="match in matches"
        v-bind:key="match.id"
        v-bind:match="match"
      ></Match>
    </section>
    <section id="addMatch">
      <b-tooltip
        label="Add a New Match"
        animated
        position="is-left"
        type="is-info"
      >
        <b-button
          size="is-large"
          type="is-primary"
          class="is-rounded"
          @click="showAddMatch"
        >
          <b-icon icon="message-plus" />
        </b-button>
      </b-tooltip>
    </section>
  </div>
</template>

<script>
import Match from "@/components/Match";
import AddMatchModal from "@/components/modals/AddMatchModal";

import Api from "@/api";

export default {
  name: "Matches",
  data() {
    return {
      loading: true,
      matches: null
    };
  },
  async mounted() {
    try {
      const res = await Api.matches.fetchMatches();
      this.matches = res.data;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    showAddMatch() {
      this.$modal.open({
        parent: this,
        component: AddMatchModal,
        width: "80vw"
      });
    }
  },
  components: {
    Match,
    /* eslint-disable vue/no-unused-components */
    AddMatchModal
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#addMatch {
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
