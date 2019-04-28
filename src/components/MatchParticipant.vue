<template>
  <section id ="participant">
    <div v-if="side==0" class="columns is-vcentered is-centered is-1">
      <div class="column is-2">
        <figure class="image is-64x64 is-champion">
          <img
            class="is-rounded"
            v-bind:src="'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/'+ participant.champion.key +'/'+ participant.champion.key +'000.jpg'"
            alt="champ"
          />
            <figure class="image is-24x24 is-overlay is-summoner-1-blue">
            <img
              class="is-rounded"
              v-bind:src="
                'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/spell/' +
                  participant.summonerSpell1.id +
                  '.png'"
              alt="summoner"
            />
          </figure>
          <figure class="image is-24x24 is-overlay is-summoner-2-blue">
            <img
              class="is-rounded"
              v-bind:src="
                'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/spell/' +
                  participant.summonerSpell2.id +
                  '.png'"
              alt="summoner"
            />
          </figure>
        </figure>
      </div>
      <div class="column is-3">
        <p class="title is-6 has-text-centered">{{participant.player.summonerName}}</p>
        <p class="subtitle is-7 has-text-centered">{{participant.player.name}}</p>
      </div>
      <div class="column is-2">
        <p class="title is-6 has-text-centered">{{participant.kills}}/{{participant.deaths}}/{{participant.assists}}</p>
      </div>
      <div class="column is-3">
        <section class="has-text-centered">
          <div>
            <figure class="image is-24x24 is-item"
              v-for="(item, index) in this.items1" :key=index>
              <img v-if="item != 0"
                class="is-sqaure"
                v-bind:src="
                  'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/item/'+ item + '.png'"
              />
              <img v-else
                class="is-sqaure"
                src="https://bulma.io/images/placeholders/32x32.png"
              />
            </figure>
          </div>
          <div>
            <figure class="image is-24x24 is-item"
              v-for="(item, index) in this.items2" :key=index>
              <img v-if="item != 0"
                class="is-sqaure"
                v-bind:src="
                  'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/item/'+ item + '.png'"
              />
              <img v-else
                class="is-sqaure"
                src="https://bulma.io/images/placeholders/32x32.png"
              />
            </figure>
        </div>
        </section>
      </div>
      <div class="column is-2">
        <p class="title is-6 has-text-centered">{{participant.goldEarned | numFormat}}</p>
        <p class="subtitle is-7 has-text-centered">{{participant.totalMinionsKilled}}</p>
      </div>
    </div>
    <div v-else class="columns is-vcentered is-centered">
      <div class="column is-2">
        <p class="title is-6 has-text-centered">{{participant.goldEarned | numFormat}}</p>
        <p class="subtitle is-7 has-text-centered">{{participant.totalMinionsKilled}}</p>
      </div>
      <div class="column is-3">
        <section class="has-text-centered">
          <div>
            <figure class="image is-24x24 is-item"
              v-for="(item, index) in this.items1" :key=index>
              <img v-if="item != 0"
                class="is-sqaure"
                v-bind:src="
                  'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/item/'+ item + '.png'"
              />
              <img v-else
                class="is-sqaure"
                src="https://bulma.io/images/placeholders/32x32.png"
              />
            </figure>
          </div>
          <div>
            <figure class="image is-24x24 is-item"
              v-for="(item, index) in this.items2" :key=index>
              <img v-if="item != 0"
                class="is-sqaure"
                v-bind:src="
                  'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/item/'+ item + '.png'"
              />
              <img v-else
                class="is-sqaure"
                src="https://bulma.io/images/placeholders/32x32.png"
              />
            </figure>
        </div>
        </section>
      </div>
      <div class="column is-2">
        <p class="title is-6 has-text-centered">{{participant.kills}}/{{participant.deaths}}/{{participant.assists}}</p>
      </div>
      <div class="column is-3">
        <p class="title is-6 has-text-centered">{{participant.player.summonerName}}</p>
        <p class="subtitle is-7 has-text-centered">{{participant.player.name}}</p>
      </div>
      <div class="column is-2">
        <figure class="image is-64x64 is-champion is-right">
          <img
            class="is-rounded"
            v-bind:src="'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/'+ participant.champion.key +'/'+ participant.champion.key +'000.jpg'"
            alt="champ"
          />
            <figure class="image is-24x24 is-summoner-1-red">
            <img
              class="is-rounded"
              v-bind:src="
                'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/spell/' +
                  participant.summonerSpell1.id +
                  '.png'"
              alt="summoner"
            />
          </figure>
          <figure class="image is-24x24 is-summoner-2-red">
            <img
              class="is-rounded"
              v-bind:src="
                'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/spell/' +
                  participant.summonerSpell2.id +
                  '.png'"
              alt="summoner"
            />
          </figure>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MatchParticipant",
  props: ["participant", "side"],
  data() {
    return {
      isOpen: false,
      items1: [],
      items2: [],
      trinket: 0
    };
  },
  mounted(){
    this.items1.push(this.participant.item0Id, this.participant.item1Id,this.participant.item2Id, this.participant.item6Id)
    this.items2.push(this.participant.item3Id,this.participant.item4Id,this.participant.item5Id)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#participant{
  margin: 0.5em 0;
}
.is-summoner{
  position:relative;
  top: -20px;
  left: 38px;
}
.is-summoner-1-blue{
  position:relative;
  top: -52px;
  left: 65px;
}
.is-summoner-2-blue{
  position:relative;
  top: -52px;
  left: 65px;
}

.is-summoner-1-red{
  position:relative;
  top: -52px;
  right: 30px;
}
.is-summoner-2-red{
  position:relative;
  top: -52px;
  right: 30px;
}
.is-item{
  display:inline-block
}
.is-right{
  float:right;
}

</style>
