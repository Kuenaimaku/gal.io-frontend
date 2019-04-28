<template>
  <section class="container">
    <b-collapse class="card expand" :open.sync="isOpen">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title is-pulled-left">{{match.timeStamp | moment("MM/DD/YYYY")}}</p>
        <p class="card-header-title">
          {{ match.teams[0].participants[0].player.summonerName }} VS
          {{ match.teams[1].participants[0].player.summonerName }}
        </p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="columns">
          <MatchTeam
            v-for="(team,number) in match.teams"
            v-bind:key="team.win"
            v-bind:team="team"
            v-bind:side="number">
          </MatchTeam>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import MatchTeam from "@/components/MatchTeam";
export default {
  name: "Match",
  props: ["match"],
  data() {
    return {
      isOpen: false
    };
  },
  components: {
    MatchTeam
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.collapse.expand {
  margin-bottom: 1rem;
}
.is-bans{
  display: inline-block;
  margin: 0.1em;
  position:relative;
  top:6px;
}
</style>
