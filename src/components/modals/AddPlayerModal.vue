<template>
  <div>
    <div class="modal-content">
      <div class="modal-card-head">
        <p
          class="modal-card-title has-text-centered"
          v-if="!this.player.account"
        >
          Add Player
        </p>
        <p class="modal-card-title has-text-centered" v-else>
          Confirm League of Legends Account
        </p>
      </div>
      <section class="modal-card-body" v-if="!this.player.account">
        <div class="modal-card" style="width: auto">
          <section class="modal-card-body">
            <div class="columns">
              <div class="column">
                <b-field label="Account Name">
                  <b-input
                    placeholder="BOOTYWIZARD42069"
                    required
                    icon="gamepad"
                    v-model="player.summonerName"
                  ></b-input>
                </b-field>
                <b-field label="Player Name">
                  <b-input
                    placeholder="An Easier Name to Pronounce"
                    required
                    icon="account-circle"
                    v-model="player.name"
                  ></b-input>
                </b-field>
                <b-field label="Notes">
                  <b-input
                    type="textarea"
                    minlength="0"
                    maxlength="100"
                    placeholder="Any notes about this player (role preferences...)"
                    v-model="player.notes"
                  >
                  </b-input>
                </b-field>
              </div>
            </div>
          </section>
          <footer>
            <button class="button is-primary is-fullwidth" @click="verify">
              <span class="icon">
                <b-icon icon="check-circle-outline" />
              </span>
              <span>Validate</span>
            </button>
          </footer>
        </div>
        <b-loading
          :active.sync="this.loading"
          :is-full-page="false"
        ></b-loading>
      </section>
      <section class="modal-card-body" v-else>
        <div class="modal-card" style="width: auto">
          <nav class="level">
            <div class="level-item">
              <figure class="image is-128x128">
                <img
                  class="is-rounded"
                  v-bind:src="
                    'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                      this.player.account.profileIconId +
                      '.png'
                  "
                  alt="Summoner Icon"
                />
              </figure>
            </div>
          </nav>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-5 has-text-centered">
                  {{ player.summonerName }}
                </p>
                <p class="subtitle is-6 has-text-centered">
                  {{ player.account.summonerLevel }}
                </p>
              </div>
            </div>
          </div>
          <footer>
            <button class="button is-primary is-fullwidth" @click="submit">
              <span class="icon">
                <b-icon icon="account-plus" />
              </span>
              <span>Add Account</span>
            </button>
          </footer>
        </div>
        <b-loading
          :active.sync="this.loading"
          :is-full-page="false"
        ></b-loading>
      </section>
    </div>
  </div>
</template>
<script>
import Api from "@/api";

export default {
  name: "AddPlayerModal",
  data() {
    return {
      player: {
        summonerName: "",
        name: "",
        notes: "",
        account: ""
      },
      loading: false
    };
  },
  methods: {
    async verify() {
      try {
        this.loading = true;
        const res = await Api.players.validate(this.player.summonerName);
        this.loading = false;
        this.player.account = res;
      } catch (err) {
        console.log("Unknown Error");
      }
    },
    async submit() {
      try {
        this.loading = true;
        const res = await Api.players.createPlayer(this.player);
        this.loading = false;
        this.closeModal();
      } catch (err) {
        console.log("Unknown Error");
      }
    },
    closeModal() {
      this.$emit("close", this.$parent.$parent);
    }
  }
};
</script>
