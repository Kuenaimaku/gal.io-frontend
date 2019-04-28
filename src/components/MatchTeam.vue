<template>
  <div class="column">
    <div v-if="side == 0">
      <p class="title is-4 has-text-centered">
        Blue Team - <span v-if="team.win"> Win </span><span v-else> Defeat</span>
      </p>
      <div class="columns is-centered is-vcentered">
        <div class = "column is-2 has-text-centered">
          Champion
        </div>
        <div class = "column is-3 has-text-centered">
          Player
        </div>
        <div class = "column is-2 has-text-centered">
          Stats
        </div>
        <div class = "column is-3 has-text-centered">
          Items
        </div>
        <div class = "column is-2 has-text-centered">
          Gold/Minions
        </div>
      </div>
      <MatchParticipant
        v-for="participant in team.participants"
        v-bind:key="participant.role"
        v-bind:participant="participant"
        v-bind:side="side"
        v-bind:patch="patch"
      >
      </MatchParticipant>
      <footer>
        <div class="columns">
          <div class="column is-5">
            <div v-if="team.bans.length > 0">Bans:
            <figure class="image is-32x32 is-champion" v-for="(ban, index) in team.bans" :key=index>
              <img
                v-bind:src="'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/'+ ban.champion.key +'/'+ ban.champion.key +'000.jpg'"
                alt="champ"
              />
            </figure>
            </div>
          </div>
          <div class="column is-1">
          </div>
          <div class="column is-1">
            <b-tooltip label="Towers" type="is-info">
              <figure class="image is-32x32">
                <img v-bind:class="{loss: !this.team.firstTower}"
                  src="~@/assets/tower.png"
                  alt="Tower"
                />
              </figure>
            </b-tooltip>
            <p class="title is-6 has-text-centered">
              {{ team.towerKills }}
            </p>
          </div>
          <div class="column is-1">
            <b-tooltip label="Inhibitors" type="is-info">
              <figure class="image is-32x32">
                <img v-bind:class="{loss: !this.team.firstInhibitor}"
                  src="~@/assets/inhibitor.png"
                  alt="Inhibitor"
                />
            </figure>
            </b-tooltip>
            <p class="title is-6 has-text-centered">
              {{ team.inhibitorKills }}
            </p>
          </div>
          <div class="column is-1">
            <b-tooltip label="Dragons" type="is-info">
              <figure class="image is-32x32">
                <img v-bind:class="{loss: !this.team.firstDragon}"
                  src="~@/assets/dragon.png"
                  alt="Dragon"
                />
              </figure>
            </b-tooltip>
            <p class="title is-6 has-text-centered">
              {{ team.dragonKills }}
            </p>
          </div>
          <div class="column is-1">
            <b-tooltip label="Rift Herald" type="is-info">
              <figure class="image is-32x32">
                <img v-bind:class="{loss: !this.team.firstRiftHerald}"
                  src="~@/assets/herald.png"
                  alt="Rift Herald"
                />
              </figure>
            </b-tooltip>
            <p class="title is-6 has-text-centered">
              {{ this.heraldKills }}
            </p>
          </div>
          <div class="column is-1">
            <b-tooltip label="Barons" type="is-info">
              <figure class="image is-32x32">
                <img v-bind:class="{loss: !this.team.firstBaron}"
                  src="~@/assets/baron.png"
                  alt="Baron"
                />
              </figure>
            </b-tooltip>
            <p class="title is-6 has-text-centered">
              {{ team.baronKills }}
            </p>
          </div>
        </div>
      </footer>
    </div>
    <div v-else>
      <p class="title is-4 has-text-centered">
        Red Team - <span v-if="team.win"> Win </span><span v-else> Defeat</span>
      </p>
      <div class="columns is-centered is-vcentered">
        <div class = "column is-2 has-text-centered">
          Gold/Minions
        </div>
        <div class = "column is-3 has-text-centered">
          Items
        </div>
        <div class = "column is-2 has-text-centered">
          Stats
        </div>
        <div class = "column is-3 has-text-centered">
          Player
        </div>
        <div class = "column is-2 has-text-centered">
          Champion
        </div>
      </div>
      <MatchParticipant
        v-for="participant in team.participants"
        v-bind:key="participant.role"
        v-bind:participant="participant"
        v-bind:side="side"
        v-bind:patch="patch"
      >
      </MatchParticipant>
      <footer>
        <div class="columns is-vcentered is-centered">
          <div class="column is-1">
            <b-tooltip label="Barons" type="is-info">
              <figure class="image is-32x32">
                <img v-bind:class="{loss: !this.team.firstBaron}"
                  src="~@/assets/baron.png"
                  alt="Baron"
                />
              </figure>
            </b-tooltip>
            <p class="title is-6 has-text-centered">
              {{ team.baronKills }}
            </p>
          </div>
          <div class="column is-1">
            <b-tooltip label="Rift Herald" type="is-info">
              <figure class="image is-32x32">
                <img v-bind:class="{loss: !this.team.firstRiftHerald}"
                  src="~@/assets/herald.png"
                  alt="Rift Herald"
                />
              </figure>
            </b-tooltip>
            <p class="title is-6 has-text-centered">
              {{ this.heraldKills }}
            </p>
          </div>
          <div class="column is-1">
            <b-tooltip label="Dragons" type="is-info">
              <figure class="image is-32x32">
                <img v-bind:class="{loss: !this.team.firstDragon}"
                  src="~@/assets/dragon.png"
                  alt="Dragon"
                />
              </figure>
            </b-tooltip>
            <p class="title is-6 has-text-centered">
              {{ team.dragonKills }}
            </p>
          </div> 
          <div class="column is-1">
            <b-tooltip label="Inhibitors" type="is-info">
              <figure class="image is-32x32">
                <img v-bind:class="{loss: !this.team.firstInhibitor}"
                  src="~@/assets/inhibitor.png"
                  alt="Inhibitor"
                />
              </figure>
            </b-tooltip>
            <p class="title is-6 has-text-centered">
              {{ team.inhibitorKills }}
            </p>
          </div>
          <div class="column is-1">
            <b-tooltip label="Towers" type="is-info">
              <figure class="image is-32x32">
                <img v-bind:class="{loss: !this.team.firstTower}"
                  src="~@/assets/tower.png"
                  alt="Tower"
                />
              </figure>
            </b-tooltip>
            <p class="title is-6 has-text-centered">
              {{ team.towerKills }}
            </p>
          </div>
          <div class="column is-1">
          </div>
          <div class="column is-5 is-right">
            <div v-if="team.bans.length > 0">
              <figure class="image is-32x32 is-champion" v-for="(ban, index) in team.bans" :key=index>
                <img
                  v-bind:src="'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/'+ ban.champion.key +'/'+ ban.champion.key +'000.jpg'"
                  alt="champ"
                />
              </figure>
              :Bans
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>


<script>

import MatchParticipant from "@/components/MatchParticipant";

export default {
  name: "MatchTeam",
  props: ["team", "side", "patch"],
  data() {
    return {
      heraldKills: 0,
    };
  },
  mounted() {
    if (this.team.firstRiftHerald == true){
      this.heraldKills = 1
    }
  },
  components:{
    MatchParticipant
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.is-champion{
  display: inline-block;
  position:relative;
  top:12px;
  margin:0em 0.1em !important;
  box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2), 0 0 0 3px rgba(10, 10, 10, 0.1)
}
.is-right{
  float:right;
  text-align:right;
}
footer{
  border-top: 1px solid #DFDFDF;
}
.loss{
  filter: brightness(50%);
}
.image{
  margin: 0.1em auto;
}
</style>
