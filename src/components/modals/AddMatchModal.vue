<template>
  <div>
    <div class="modal-content" width="1000px">
      <div class="modal-card-head">
        <p class="modal-card-title has-text-centered">Add Match - {{activeTab}}</p>
      </div>
      <section class="modal-card-body">
        <form action="">
          <div class="modal-card" style="width: auto">
              <section class="modal-card-body">
                <div class="columns">
                  <div class="column">
                    <p class="has-text-centered title is-5">Team One</p>
                    <b-field grouped>
                      <b-field horizontal>
                          <b-input placeholder="Name" required icon="account-circle" v-model="phase1.team1.player_one_name"></b-input>
                          <b-select placeholder="Choose a Position" required icon="cards" v-model="phase1.team1.player_one_role">
                              <option>Top</option>
                              <option>Jungle</option>
                              <option>Middle</option>
                              <option>Bottom</option>
                              <option>Support</option>
                          </b-select>
                      </b-field>
                    </b-field>
                    <b-field grouped>
                      <b-field horizontal>
                          <b-input placeholder="Name" required icon="account-circle" v-model="phase1.team1.player_two_name"></b-input>
                          <b-select placeholder="Choose a Position" required icon="cards" v-model="phase1.team1.player_two_role">
                              <option>Top</option>
                              <option>Jungle</option>
                              <option>Middle</option>
                              <option>Bottom</option>
                              <option>Support</option>
                          </b-select>
                      </b-field>
                    </b-field>
                    <b-field grouped>
                      <b-field horizontal>
                          <b-input placeholder="Name" required icon="account-circle" v-model="phase1.team1.player_three_name"></b-input>
                          <b-select placeholder="Choose a Position" required icon="cards" v-model="phase1.team1.player_three_role">
                              <option>Top</option>
                              <option>Jungle</option>
                              <option>Middle</option>
                              <option>Bottom</option>
                              <option>Support</option>
                          </b-select>
                      </b-field>
                    </b-field>
                    <b-field grouped>
                      <b-field horizontal>
                          <b-input placeholder="Name" required icon="account-circle" v-model="phase1.team1.player_four_name"></b-input>
                          <b-select placeholder="Choose a Position" required icon="cards" v-model="phase1.team1.player_four_role">
                              <option>Top</option>
                              <option>Jungle</option>
                              <option>Middle</option>
                              <option>Bottom</option>
                              <option>Support</option>
                          </b-select>
                      </b-field>
                    </b-field>
                    <b-field grouped>
                      <b-field horizontal>
                          <b-input placeholder="Name" required icon="account-circle" v-model="phase1.team1.player_five_name"></b-input>
                          <b-select placeholder="Choose a Position" required icon="cards" v-model="phase1.team1.player_five_role">
                              <option>Top</option>
                              <option>Jungle</option>
                              <option>Middle</option>
                              <option>Bottom</option>
                              <option>Support</option>
                          </b-select>
                      </b-field>
                    </b-field>
                  </div>
                  <div class="column">
                    <p class="has-text-centered title is-5">Team Two</p>
                    <b-field grouped>
                      <b-field horizontal>
                          <b-input placeholder="Name" required icon="account-circle" v-model="phase1.team2.player_one_name"></b-input>
                          <b-select placeholder="Choose a Position" required icon="cards" v-model="phase1.team2.player_one_role">
                              <option>Top</option>
                              <option>Jungle</option>
                              <option>Middle</option>
                              <option>Bottom</option>
                              <option>Support</option>
                          </b-select>
                      </b-field>
                    </b-field>
                    <b-field grouped>
                      <b-field horizontal>
                          <b-input placeholder="Name" required icon="account-circle" v-model="phase1.team2.player_two_name"></b-input>
                          <b-select placeholder="Choose a Position" required icon="cards" v-model="phase1.team2.player_two_role">
                              <option>Top</option>
                              <option>Jungle</option>
                              <option>Middle</option>
                              <option>Bottom</option>
                              <option>Support</option>
                          </b-select>
                      </b-field>
                    </b-field>
                    <b-field grouped>
                      <b-field horizontal>
                          <b-input placeholder="Name" required icon="account-circle" v-model="phase1.team2.player_three_name"></b-input>
                          <b-select placeholder="Choose a Position" required icon="cards" v-model="phase1.team2.player_three_role">
                              <option>Top</option>
                              <option>Jungle</option>
                              <option>Middle</option>
                              <option>Bottom</option>
                              <option>Support</option>
                          </b-select>
                      </b-field>
                    </b-field>
                    <b-field grouped>
                      <b-field horizontal>
                          <b-input placeholder="Name" required icon="account-circle" v-model="phase1.team2.player_four_name"></b-input>
                          <b-select placeholder="Choose a Position" required icon="cards" v-model="phase1.team2.player_four_role">
                              <option>Top</option>
                              <option>Jungle</option>
                              <option>Middle</option>
                              <option>Bottom</option>
                              <option>Support</option>
                          </b-select>
                      </b-field>
                    </b-field>
                    <b-field grouped>
                      <b-field horizontal>
                          <b-input placeholder="Name" required icon="account-circle" v-model="phase1.team2.player_five_name"></b-input>
                          <b-select placeholder="Choose a Position" required icon="cards" v-model="phase1.team2.player_five_role">
                              <option>Top</option>
                              <option>Jungle</option>
                              <option>Middle</option>
                              <option>Bottom</option>
                              <option>Support</option>
                          </b-select>
                      </b-field>
                    </b-field>
                  </div>
                </div>
              </section>
              <footer>
                  <button class="button is-primary is-fullwidth">Next</button>
              </footer>
          </div>
      </form>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddMatchModal',
  data () {
    return {
      activeTab: 'Team Selection',
        phase1: {
        team1:{
          player_one_name: null,
          player_one_role: null,
          player_two_name: null,
          player_two_role: null,
          player_three_name: null,
          player_three_role: null,
          player_four_name: null,
          player_four_role: null,
          player_five_name: null,
          player_five_role: null
        },
        team2:{
          player_one_name: null,
          player_one_role: null,
          player_two_name: null,
          player_two_role: null,
          player_three_name: null,
          player_three_role: null,
          player_four_name: null,
          player_four_role: null,
          player_five_name: null,
          player_five_role: null
        }
      },
      phase2: {
        match_url: ""
      }
    }
  },
  methods: {

  }
}
</script>
