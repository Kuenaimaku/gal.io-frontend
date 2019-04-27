<template>
  <section>
    <figure class="image is-64x64">
      <img
        class="is-rounded"
        v-bind:src="
          'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
            participant.player.leagueAccount.profileIconId +
            '.png'
        "
        alt="Summoner Icon"
      />
    </figure>
    <p>{{participant.role}}</p>
  </section>
</template>

<script>
export default {
  name: "MatchParticipant",
  props: ["participant"],
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.collapse.expand {
  margin-bottom: 1rem;
}
</style>
