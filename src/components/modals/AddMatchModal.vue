<template>
  <div class="modal-card" style="width: auto">
    <div v-if="this.state==0">
      <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Pick your Rosters</p>
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column">
            <p class="has-text-centered title is-5">Team One</p>
            <b-field grouped>
              <b-field horizontal expanded>
                  <b-autocomplete
                    v-model="team1[0].name"
                    placeholder="BOOTYWIZARD42069"
                    :data="players"
                    :loading="isFetching"
                    field="name"
                    @typing="getAsyncData">
                  <template slot-scope="props" style="margin-bottom:2rem">
                    <div class="media">
                        <div class="media-left">
                          <figure class="image is-32x32">
                            <img class="is-rounded"
                              :src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + props.option.summonerDto.profileIconId +'.png'"
                              alt="Summoner Icon">
                          </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{props.option.summonerName}}</p>
                            <p class="subtitle is-7">{{props.option.name}}</p>
                        </div>
                    </div>
                  </template>
                  </b-autocomplete>
                  <b-select placeholder="Choose a Position" required icon="cards" v-model="team1[0].role">
                      <option
                      v-for="position in positions"
                      :value="position"
                      :key="position">
                      {{position}}
                      </option>
                  </b-select>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field horizontal expanded>
                  <b-autocomplete
                    v-model="team1[1].name"
                    placeholder="BOOTYWIZARD42069"
                    :data="players"
                    :loading="isFetching"
                    field="name"
                    @typing="getAsyncData">
                  <template slot-scope="props" style="margin-bottom:2rem">
                    <div class="media">
                        <div class="media-left">
                          <figure class="image is-32x32">
                            <img class="is-rounded"
                              :src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + props.option.summonerDto.profileIconId +'.png'"
                              alt="Summoner Icon">
                          </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{props.option.summonerName}}</p>
                            <p class="subtitle is-7">{{props.option.name}}</p>
                        </div>
                    </div>
                  </template>
                  </b-autocomplete>
                  <b-select placeholder="Choose a Position" required icon="cards" v-model="team1[1].role">
                      <option
                      v-for="position in positions"
                      :value="position"
                      :key="position">
                      {{position}}
                      </option>
                  </b-select>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field horizontal expanded>
                  <b-autocomplete
                    v-model="team1[2].name"
                    placeholder="BOOTYWIZARD42069"
                    :data="players"
                    :loading="isFetching"
                    field="name"
                    @typing="getAsyncData">
                  <template slot-scope="props" style="margin-bottom:2rem">
                    <div class="media">
                        <div class="media-left">
                          <figure class="image is-32x32">
                            <img class="is-rounded"
                              :src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + props.option.summonerDto.profileIconId +'.png'"
                              alt="Summoner Icon">
                          </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{props.option.summonerName}}</p>
                            <p class="subtitle is-7">{{props.option.name}}</p>
                        </div>
                    </div>
                  </template>
                  </b-autocomplete>
                  <b-select placeholder="Choose a Position" required icon="cards" v-model="team1[2].role">
                      <option
                      v-for="position in positions"
                      :value="position"
                      :key="position">
                      {{position}}
                      </option>
                  </b-select>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field horizontal expanded>
                  <b-autocomplete
                    v-model="team1[3].name"
                    placeholder="BOOTYWIZARD42069"
                    :data="players"
                    :loading="isFetching"
                    field="name"
                    @typing="getAsyncData">
                  <template slot-scope="props" style="margin-bottom:2rem">
                    <div class="media">
                        <div class="media-left">
                          <figure class="image is-32x32">
                            <img class="is-rounded"
                              :src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + props.option.summonerDto.profileIconId +'.png'"
                              alt="Summoner Icon">
                          </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{props.option.summonerName}}</p>
                            <p class="subtitle is-7">{{props.option.name}}</p>
                        </div>
                    </div>
                  </template>
                  </b-autocomplete>
                  <b-select placeholder="Choose a Position" required icon="cards" v-model="team1[3].role">
                      <option
                      v-for="position in positions"
                      :value="position"
                      :key="position">
                      {{position}}
                      </option>
                  </b-select>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field horizontal expanded>
                  <b-autocomplete
                    v-model="team1[4].name"
                    placeholder="BOOTYWIZARD42069"
                    :data="players"
                    :loading="isFetching"
                    field="name"
                    @typing="getAsyncData">
                  <template slot-scope="props" style="margin-bottom:2rem">
                    <div class="media">
                        <div class="media-left">
                          <figure class="image is-32x32">
                            <img class="is-rounded"
                              :src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + props.option.summonerDto.profileIconId +'.png'"
                              alt="Summoner Icon">
                          </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{props.option.summonerName}}</p>
                            <p class="subtitle is-7">{{props.option.name}}</p>
                        </div>
                    </div>
                  </template>
                  </b-autocomplete>
                  <b-select placeholder="Choose a Position" required icon="cards" v-model="team1[4].role">
                      <option
                      v-for="position in positions"
                      :value="position"
                      :key="position">
                      {{position}}
                      </option>
                  </b-select>
              </b-field>
            </b-field>
          </div>
          <div class="column">
            <p class="has-text-centered title is-5">Team Two</p>
            <b-field grouped>
              <b-field horizontal expanded>
                  <b-autocomplete
                    v-model="team2[0].name"
                    placeholder="BOOTYWIZARD42069"
                    :data="players"
                    :loading="isFetching"
                    field="name"
                    @typing="getAsyncData">
                  <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                          <figure class="image is-32x32">
                            <img class="is-rounded"
                              :src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + props.option.summonerDto.profileIconId +'.png'"
                              alt="Summoner Icon">
                          </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{props.option.summonerName}}</p>
                            <p class="subtitle is-7">{{props.option.name}}</p>
                        </div>
                    </div>
                  </template>
                  </b-autocomplete>
                  <b-select placeholder="Choose a Position" required icon="cards" v-model="team2[0].role">
                      <option
                      v-for="position in positions"
                      :value="position"
                      :key="position">
                      {{position}}
                      </option>
                  </b-select>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field horizontal expanded>
                  <b-autocomplete
                    v-model="team2[1].name"
                    placeholder="BOOTYWIZARD42069"
                    :data="players"
                    :loading="isFetching"
                    field="name"
                    @typing="getAsyncData">
                  <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                          <figure class="image is-32x32">
                            <img class="is-rounded"
                              :src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + props.option.summonerDto.profileIconId +'.png'"
                              alt="Summoner Icon">
                          </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{props.option.summonerName}}</p>
                            <p class="subtitle is-7">{{props.option.name}}</p>
                        </div>
                    </div>
                  </template>
                  </b-autocomplete>
                  <b-select placeholder="Choose a Position" required icon="cards" v-model="team2[1].role">
                      <option
                      v-for="position in positions"
                      :value="position"
                      :key="position">
                      {{position}}
                      </option>
                  </b-select>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field horizontal expanded>
                  <b-autocomplete
                    v-model="team2[2].name"
                    placeholder="BOOTYWIZARD42069"
                    :data="players"
                    :loading="isFetching"
                    field="name"
                    @typing="getAsyncData">
                  <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                          <figure class="image is-32x32">
                            <img class="is-rounded"
                              :src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + props.option.summonerDto.profileIconId +'.png'"
                              alt="Summoner Icon">
                          </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{props.option.summonerName}}</p>
                            <p class="subtitle is-7">{{props.option.name}}</p>
                        </div>
                    </div>
                  </template>
                  </b-autocomplete>
                  <b-select placeholder="Choose a Position" required icon="cards" v-model="team2[2].role">
                      <option
                      v-for="position in positions"
                      :value="position"
                      :key="position">
                      {{position}}
                      </option>
                  </b-select>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field horizontal expanded>
                  <b-autocomplete
                    v-model="team2[3].name"
                    placeholder="BOOTYWIZARD42069"
                    :data="players"
                    :loading="isFetching"
                    field="name"
                    @typing="getAsyncData">
                  <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                          <figure class="image is-32x32">
                            <img class="is-rounded"
                              :src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + props.option.summonerDto.profileIconId +'.png'"
                              alt="Summoner Icon">
                          </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{props.option.summonerName}}</p>
                            <p class="subtitle is-7">{{props.option.name}}</p>
                        </div>
                    </div>
                  </template>
                  </b-autocomplete>
                  <b-select placeholder="Choose a Position" required icon="cards" v-model="team2[3].role">
                      <option
                      v-for="position in positions"
                      :value="position"
                      :key="position">
                      {{position}}
                      </option>
                  </b-select>
              </b-field>
            </b-field>
            <b-field grouped>
              <b-field horizontal expanded>
                  <b-autocomplete
                    v-model="team2[4].name"
                    placeholder="BOOTYWIZARD42069"
                    :data="players"
                    :loading="isFetching"
                    field="name"
                    @typing="getAsyncData">
                  <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                          <figure class="image is-32x32">
                            <img class="is-rounded"
                              :src="'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' + props.option.summonerDto.profileIconId +'.png'"
                              alt="Summoner Icon">
                          </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">{{props.option.summonerName}}</p>
                            <p class="subtitle is-7">{{props.option.name}}</p>
                        </div>
                    </div>
                  </template>
                  </b-autocomplete>
                  <b-select placeholder="Choose a Position" required icon="cards" v-model="team2[4].role">
                      <option
                      v-for="position in positions"
                      :value="position"
                      :key="position">
                      {{position}}
                      </option>
                  </b-select>
              </b-field>
            </b-field>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
          <button class="button is-primary is-fullwidth" @click="nextSection" :disabled="testStage1">Next</button>
      </footer>
    </div>
    <div v-else-if="this.state==1">
      <header class="modal-card-head" v-if="!this.match">
          <p class="modal-card-title has-text-centered">Add your Match History</p>
      </header>
      <header class="modal-card-head" v-else>
          <p class="modal-card-title has-text-centered">Make sure Assignments are Correct</p>
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column">
            <b-field>
              <b-input expanded v-model="matchUrl" required icon="link"
              placeholder="eg. https://matchhistory.na.leagueoflegends.com/..."
              :disabled="this.match"></b-input>
              <p class="control">
                  <button class="button is-primary" @click="getMatch" v-if="!this.match">Search</button>
                  <button class="button is-primary" @click="clearMatch" v-else>Reset</button>
              </p>
            <b-loading :active.sync="this.matchLoading" :is-full-page=false></b-loading>
            </b-field>
          </div>
        </div>
        <div class="columns" v-if="this.match">
          <div class="column">
            <Champion v-for="(participant) in this.match.teams[0].Participants"
          v-bind:key="participant.participantId"
          v-bind:champion="participant"
          ></Champion>
          </div>
          <div class="column">
            <draggable
              :list="team1"
              class="list-group"
              ghost-class="ghost"
              @start="dragging = true"
              @end="dragging = false">
              <Participant
                class="list-group-item"
                v-for="player in team1"
                :key="player.name"
                :participant="player"
              >
              </Participant>
            </draggable>
          </div>
          <div class="column">
            <Champion v-for="(participant)  in this.match.teams[1].Participants"
          v-bind:key="participant.participantId"
          v-bind:champion="participant"
          ></Champion>
          </div>
          <div class="column">
            <draggable
              :list="team2"
              :disabled="false"
              class="list-group"
              ghost-class="ghost"
              @start="dragging = true"
              @end="dragging = false">
              <Participant
                class="list-group-item"
                v-for="player in team2"
                :key="player.name"
                :participant="player"
              >
              </Participant>
            </draggable>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <div class="columns button-footer">
          <div class="column">
            <button class="button is-primary is-fullwidth" @click="previousSection">Previous</button>
          </div>
        <div class="column">
            <button class="button is-primary is-fullwidth" @click="nextSection">Next</button>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>

import Champion from "@/components/Champion"
import Participant from "@/components/Participant"

import Api from "@/api"
import _ from "lodash"
import draggable from 'vuedraggable'

export default {
  name: 'AddMatchModal',
  data () {
    return {
      players: [],
      positions: ["Top","Jungle","Middle","Bottom","Support"],
      team1:[{name:"",role:""},{name:"",role:""},{name:"",role:""},{name:"",role:""},{name:"",role:""}],
      team2:[{name:"",role:""},{name:"",role:""},{name:"",role:""},{name:"",role:""},{name:"",role:""}],
      matchUrl: '',
      match: null,
      matchLoading: false,
      isFetching: false,
      dragging: false,
      state: 0

    }
  },
  methods: {
    getAsyncData: _.debounce(async function(name) {
      this.isFetching = true;
      const res = await Api.players.searchPlayers(name);
      this.players = res;
      this.isFetching = false;
    },500),
    nextSection(){
      this.state += 1;
      if(this.state == 2){
        this.$parent.close();
      }
    },
    previousSection(){
      this.state -= 1;
    },
    async getMatch(){
      var matchId = this.matchUrl.substring(this.matchUrl.lastIndexOf("NA1/")+4).replace("?tab=overview","").split("/")[0];
      this.matchLoading = true;
      const res = await Api.matches.getMatch(matchId);
      this.match = res;
      this.matchLoading = false;
    },
    clearMatch(){
      this.match = null,
      this.matchUrl = ''
    }
  },
  computed:{
    testStage1(){
      if(this.team1[0].name == "" || this.team1[0].role == "" ||
      this.team1[1].name == "" || this.team1[1].role == "" ||
      this.team1[2].name == "" || this.team1[2].role == "" ||
      this.team1[3].name == "" || this.team1[3].role == "" ||
      this.team1[4].name == "" || this.team1[4].role == "" ||
      this.team2[0].name == "" || this.team2[0].role == "" ||
      this.team2[1].name == "" || this.team2[1].role == "" ||
      this.team2[2].name == "" || this.team2[2].role == "" ||
      this.team2[3].name == "" || this.team2[3].role == "" ||
      this.team2[4].name == "" || this.team2[4].role == "") {
      return true;
    }
    return false;
    }
  },
  components:{
    Champion,
    Participant,
    draggable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.modal-content{
  overflow: visible;
  .modal-card {
    overflow: visible;
    .modal-card-body {
      overflow: visible;
    }
  }
}
.button-footer{
  width:100%;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group-item {
    position: relative;
    display: block;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    cursor:move;
}
</style>
