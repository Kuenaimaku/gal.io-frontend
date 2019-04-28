<template>
  <section id ="participant">
      <nav class="level">
          <div class="level-item-left">
            <figure class="image is-64x64 is-champion">
              <img
                class="is-rounded"
                v-bind:src="'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/'+ participant.champion.key +'/'+ participant.champion.key +'000.jpg'"
                alt="champ"
              />
               <figure class="image is-24x24 is-overlay is-summoner">
                <img
                  class="is-rounded"
                  v-bind:src="
                    'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                      participant.player.leagueAccount.profileIconId +
                      '.png'"
                  alt="summoner"
                />
              </figure>
            </figure>
          </div>
          <div class="level-item-left">
            <figure class="image is-24x24 is-spell">
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
            <figure class="image is-24x24 is-spell">
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
          <div class="level-item">
            {{participant.player.summonerName}}
          </div>
          <div class="level-item">
            {{ participant.kills + '/' + participant.deaths + '/' + participant.assists}}
            </div>
          <div class="level-item level-right">
            <figure class="image is-24x24"
              v-for="(item, index) in this.items" :key=index>
              <img v-if="item != 0"
                class="is-sqaure"
                v-bind:src="
                  'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/item/'+
                    item +
                    '.png'
                "
              />
              <img v-else
                class="is-sqaure"
                src="https://bulma.io/images/placeholders/32x32.png"
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
      isOpen: false,
      items: []
    };
  },
  mounted(){
    this.items.push(this.participant.item0Id, this.participant.item1Id,this.participant.item2Id,this.participant.item3Id,this.participant.item4Id,this.participant.item5Id, this.participant.item6Id)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#participant{
  margin: 0.5em 0;
}
.is-champion{
  margin: 0 0.25em 0 0
}
.is-summoner{
  position:relative;
  top: -20px;
  left: 38px;
}
.is-spell{
  margin: 0.25em 0;
}
div.collapse.expand {
  margin-bottom: 1rem;
}
</style>
