<template>
  <div>
    <section class="hero is-info is-bold block">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <!-- Left side -->
              <p class="title is-2">Players</p>
              <p class="subtitle is-5">Under Construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="players">
      <div class = "container">
        <section class="columns is-vcentered" v-for="chunk in playerChunks" v-bind:key="chunk[0].id">
          <Player v-for="player in chunk"
          v-bind:key="player.id"
          v-bind:player="player"
          ></Player>
        </section>
      </div>
      <b-loading :active.sync="this.loading" :is-full-page=false></b-loading>
    </div>
    <div v-else>
      <div class = "container">
          <nav class="level">
            <div class="level-item">
              <figure class="image">
                <img class="is-rounded" src="../assets/missing.png">
              </figure>
            </div>
          </nav>
        <b-loading :active.sync="this.loading" :is-full-page=false></b-loading>
      </div>
    </div>
    <section id="addPlayer">
      <b-tooltip label="Add a New Player" animated position="is-left" type="is-info">
      <b-button size="is-large" type="is-primary" class="is-rounded" @click="showAddPlayer">
        <b-icon icon="account-plus"/>
      </b-button>
      </b-tooltip>
    </section>
  </div>
</template>

<script>

import _ from "lodash";

import Player from "@/components/Player"
import AddPlayerModal from "@/components/modals/AddPlayerModal";
import Api from "@/api"

export default {
  name: "Players",
	data() {
		return {
      players: null,
      loading: true
    }
  },
  async mounted() {
    try{
      const res = await Api.players.fetchPlayers();
      this.players = res;
      this.loading = false;
    }
    catch (err){
      console.log(err)
    }
  },
  methods:{
    async fetchPlayers() {
      try{
        const res = await Api.players.fetchPlayers();
        this.players = res;
        this.loading = false;
      }
      catch (err){
        console.log(err)
      }
    },
    showAddPlayer() {
			this.$modal.open({
				parent: this,
        component: AddPlayerModal,
        width: '30vw',
        hasModalCard: true,
        events: {
          close(p){
            p.fetchPlayers();
          }
        }
			});
    } 
  },
  computed:{
    playerChunks(){
      return _.chunk(Object.values(this.players), 5)
    }
  },
  components: {
    /* eslint-disable vue/no-unused-components */
    AddPlayerModal,
    Player
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#addPlayer {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
  .button{
    border-radius: 9999px;
    height:3em;
    width:3em;
  }
}
</style>