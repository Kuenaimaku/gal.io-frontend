<template>
  <nav class="level">
    <div class="level-left">
      <div class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img class="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Summoner Icon">
          </figure>
        </div>
        <div class="media-content is-vcentered">
          <p class="title is-4">{{participant.name}}</p>
          <p class="subtitle is-6">{{participant.role}}</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Api from "@/api"

export default {
    name: "Participant",
    props:["participant"],
    data() {
        return {
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav .level{
  margin: 1rem 5rem;
}
</style>
