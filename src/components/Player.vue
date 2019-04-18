<template>
  <div class="column is-one-thirds">
    <div class="card">
      <div class="card-image">
        <nav class="level">
          <div class="level-item">
            <figure class="image is-128x128">
              <img class="is-rounded"
                v-bind:src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + player.profileId +'.png'" 
                alt="Summoner Icon">
            </figure>
          </div>
        </nav>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-5 has-text-centered">{{player.summoner_name}}</p>
            <p class="subtitle is-6 has-text-centered">{{player.common_name}}</p>
          </div>
        </div>

        <div class="content">
          <p>{{player.notes}}</p>
          <span> 5 wins, 7 Losses</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Player",
        props:["player"],
        data() {
            return {
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
  margin-top:1rem;
}
</style>
