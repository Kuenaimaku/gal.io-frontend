<template>
  <nav class="level">
    <div class="level-left">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              class="is-rounded"
              v-bind:src="
                'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/' +
                  champion.Champion.image.full
              "
              alt="Summoner Icon"
            />
          </figure>
        </div>
        <div class="media-content is-vcentered">
          <p class="title is-4">{{ champion.Champion.name }}</p>
          <p class="subtitle is-6">{{ champion.Champion.title }}</p>
        </div>
      </div>
    </div>
    <div class="level-right">
      <div class="media">
        <div class="media-right">
          <b-icon size="is-large" icon="arrow-left"> </b-icon>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Api from "@/api";

export default {
  name: "Champion",
  props: ["champion"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav .level {
  margin: 1rem 5rem;
}
</style>
