<template>
  <div>
    <div class="modal-content" width="1000px">
      <div class="modal-card-head">
        <p class="modal-card-title has-text-centered">Add Player</p>
      </div>
      <section class="modal-card-body">
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
                  <button class="button is-primary is-fullwidth" @click="submit">
                    <span class="icon">
                      <b-icon icon="account-plus"/>
                    </span>
                    <span>Add Player</span>
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
    async submit() {
      try {
        const res = await Api.players.validate(this.summoner_name);
        console.log(res);
      } catch(err){
        console.log("Unknown Error");
      }
    }

  }
}
</script>
