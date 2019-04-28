<template>
  <nav class="level">
    <div class="level-left">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              class="is-rounded"
              v-bind:src="'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/'+ champion.Champion.key +'/'+ champion.Champion.key +'000.jpg'"
              alt="Champion Icon"
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
          <b-icon size="is-large" icon="arrow-right"> </b-icon>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Api from "@/api";

export default {
  name: "AddMatchChampion",
  props: ["champion"],
  data() {
    return {};
  },
  methods: {}
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
