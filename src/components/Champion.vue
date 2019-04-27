<template>
  <div class="column is-one-fifth">
    <div class="card">
      <div class="card-image">
        <nav class="level">
          <div class="level-item">
            <figure class="image is-128x128">
              <img class="is-rounded"
                v-bind:src="
                'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/'+ champion.champion.key +'/'+ champion.champion.key +'000.jpg'"
                alt="Champion Icon"
                rel="preload"
              />
            </figure>
          </div>
        </nav>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-5 has-text-centered">
              {{ champion.champion.name }}
            </p>
          </div>
        </div>

        <div class="content">
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <b-tooltip v-bind:label="'In ' + ((champion.picks > 0) ? Math.floor(champion.picks / champion.totalMatches*100) + '%':'0%') + ' of games'"
              type="is-info"
              position="is-bottom"
              animated>
                <div>
                  <p class="heading">Picks</p>
                  <p class="subtitle">{{champion.picks}}</p>
                </div>
              </b-tooltip>
            </div>
            <div class="level-item has-text-centered">
              <b-tooltip v-bind:label="'Blue: '+ champion.blueBans + ' Red: ' + champion.redBans"
              type="is-info"
              position="is-bottom"
              animated>
                <div>
                  <p class="heading">Bans</p>
                  <p class="subtitle">{{(champion.blueBans + champion.redBans)}}</p>
                </div>
              </b-tooltip>
            </div>
            <div class="level-item has-text-centered">
              <b-tooltip v-bind:label="((champion.picks > 0) ? Math.floor(champion.wins / champion.picks*100) + '%':'0%') + ' Win Rate'"
              type="is-info"
              position="is-bottom"
              animated>
                <div>
                  <p class="heading">Wins</p>
                  <p class="subtitle">{{champion.wins}}</p>
                </div>
              </b-tooltip>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/api";

export default {
  name: "Champion",
  props: ["champion"],
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  margin-top: 1rem;
  box-shadow: 0 0 0 2px rgba(10, 10, 10, 0.2), 0 0 0 4px rgba(10, 10, 10, 0.1)
}
</style>
