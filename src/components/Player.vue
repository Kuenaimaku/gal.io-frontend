<template>
  <div class="column is-one-fifth">
    <div class="card">
      <div class="card-image">
        <nav class="level">
          <div class="level-item">
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                v-bind:src="
                  'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                    player.summonerDto.profileIconId +
                    '.png'
                "
                alt="Summoner Icon"
              />
            </figure>
          </div>
        </nav>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-5 has-text-centered">
              {{ player.summonerName }}
            </p>
            <p class="subtitle is-6 has-text-centered">{{ player.name }}</p>
          </div>
        </div>

        <div class="content">
          <p id="notes">{{ player.notes }}</p>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Details</a>
        <a class="card-footer-item" v-if="user">Edit</a>
        <a class="card-footer-item" v-if="user" @click="removePlayer">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script>
import Api from "@/api";
import { mapGetters } from "vuex";
export default {
  name: "Player",
  props: ["player"],
  data() {
    return {};
  },
  methods: {
    async removePlayer() {
      const res = await Api.players.removePlayer(this.player.id);
      await this.$parent.fetchPlayers();
    }
  },
  computed: {
    ...mapGetters(["user", "loggedIn"])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  margin-top: 1rem;
  box-shadow: 0 0 0 2px rgba(10, 10, 10, 0.2), 0 0 0 4px rgba(10, 10, 10, 0.1)
}

p#notes {
    white-space: pre-wrap;
    max-height:25px;
    overflow-y:auto;
}
</style>
