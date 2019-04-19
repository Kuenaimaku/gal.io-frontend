<template>
  <div>
    <div class="modal-content">
      <div class="modal-card-head">
        <p class="modal-card-title has-text-centered">Add Player</p>
      </div>
      <section class="modal-card-body" v-if="!this.account">
          <div class="modal-card" style="width: auto">
              <section class="modal-card-body">
                <div class="columns">
                  <div class="column">
                      <b-field  label="Account Name">
                          <b-input placeholder="BOOTYWIZARD42069" required icon="gamepad" v-model="summoner_name"></b-input>
                      </b-field>
                      <b-field  label="Player Name">
                          <b-input placeholder="An Easier Name to Pronounce" required icon="account-circle" v-model="common_name"></b-input>
                      </b-field>
                      <b-field  label="Notes">
                          <b-input type="textarea"
                            minlength="0"
                            maxlength="100"
                            placeholder="Any notes about this player (role preferences...)">
                          </b-input>
                      </b-field>
                  </div>
                </div>
              </section>
              <footer>
                  <button class="button is-primary is-fullwidth" @click="verify">
                    <span class="icon">
                      <b-icon icon="check-circle-outline"/>
                    </span>
                    <span>Validate</span>
                  </button>
              </footer>
          </div>
      </section>
      <section class="modal-card-body" v-else>
        <div class="modal-card" style="width: auto">
          <nav class="level">
            <div class="level-item">
              <figure class="image is-128x128">
                <img class="is-rounded"
                  v-bind:src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + this.account.profileIconId +'.png'"
                  alt="Summoner Icon">
              </figure>
            </div>
          </nav>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-5 has-text-centered">{{summoner_name}}</p>
                <p class="subtitle is-6 has-text-centered">{{account.summonerLevel}}</p>
              </div>
            </div>
          </div>
          <footer>
            <button class="button is-primary is-fullwidth" @click="submit">
              <span class="icon">
                <b-icon icon="account-plus"/>
              </span>
              <span>Add Account</span>
            </button>
        </footer>
        </div>
      </section>
    </div>
  </div>
</template>
<script>

import Api from "@/api"

export default {
  name: 'AddPlayerModal',
  data () {
    return {
      summoner_name: null,
      common_name : null,
      notes: null,
      account: null
    }
  },
  methods: {
    async verify() {
      try {
        const res = await Api.players.validate(this.summoner_name);
        console.log(res);
        this.account = res;
      } catch(err){
        console.log("Unknown Error");
      }
    },
    async submit() {
      try {
        const res = await Api.players.createPlayer({summonerName: this.summoner_name, name: this.common_name, notes: this.notes});
        vm.$forceUpdate()
        this.$parent.close()
      } catch(err){
        console.log("Unknown Error");
      }
    }

  }
}
</script>
