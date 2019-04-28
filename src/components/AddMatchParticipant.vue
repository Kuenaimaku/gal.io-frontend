<template>
  <nav class="level">
    <div class="level-left">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              class="is-rounded"
              v-bind:src="
                'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                  participant.summonerDto.profileIconId +
                  '.png'
              "
              alt="Summoner Icon"
            />
          </figure>
        </div>
        <div class="media-content is-vcentered">
          <p class="title is-4">{{ participant.name }}</p>
          <p class="subtitle is-6">{{ participant.role }}</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Api from "@/api";

export default {
  name: "AddMatchParticipant",
  props: ["participant"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav.level {
  padding: 0.5rem;
}
img.is-rounded {
  box-shadow: 0 0 0 2px rgba(10, 10, 10, 0.2), 0 0 0 4px rgba(10, 10, 10, 0.1)
}
</style>
