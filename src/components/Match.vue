<template>
  <section class="container">
    <b-collapse class="card expand" :open.sync="isOpen">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title is-pulled-left">{{match.timeStamp}}</p>
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
          <div
            class="column"
            v-for="(team, number) in match.teams"
            v-bind:key="team.id"
            v-bind:team="match.team"
          >
            <p class="title is-4 has-text-centered"><span v-if="team.win"> Victory</span><span v-else> Defeat</span></p>
            <MatchParticipant
            v-for="participant in team.participants"
            v-bind:key="participant.role"
            v-bind:participant="participant"
            ></MatchParticipant>
          </div>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import MatchParticipant from "@/components/MatchParticipant";
export default {
  name: "Match",
  props: ["match"],
  data() {
    return {
      isOpen: false
    };
  },
  components: {
    MatchParticipant
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.collapse.expand {
  margin-bottom: 1rem;
}
</style>
