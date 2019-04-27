<template>
  <section>
      <nav class="level">
          <div class="level-item-left">
            <figure class="image is-32x32">
              <img
                class="is-rounded"
                v-bind:src="
                  'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/' +
                    participant.champion.id +
                    '.png'"
                alt="champ"
              />
            </figure>
          </div>
          <div class="level-item-left">
            <figure class="image is-16x16">
              <img
                class="is-sqaure"
                v-bind:src="
                  'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/spell/'+
                    'SummonerFlash' +
                    '.png'
                "
                alt="Summoner Spell 1"
              />
            </figure>
            <figure class="image is-16x16">
              <img
                class="is-sqaure"
                v-bind:src="
                  'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/spell/'+
                    'SummonerDot' +
                    '.png'
                "
                alt="Summoner Spell 2"
              />
            </figure>
          </div>
          <div class="level-item-left tile">
            {{participant.player.summonerName}}
          </div>
          <div class="level-item-left tile">
            {{ participant.kills + '/' + participant.deaths + '/' + participant.assists}}
            </div>
          
          <div class="level-item">
            <figure class="image is-16x16"
              v-for="index in 7" :key=index>
              <img
                class="is-sqaure"
                v-bind:src="
                  'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/'+
                    participant.item0Id +
                    '.png'
                "
                alt="item0"
              />
            </figure>

          </div>
        </nav>
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
