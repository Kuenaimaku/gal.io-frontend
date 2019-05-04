<template>
  <div>
    <section class="hero is-player is-bold">
      <div class="hero-body">
        <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-narrow">
                <figure class="image is-128x128">
                  <img
                    class="is-rounded"
                    v-bind:src="
                      'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                        player.LeagueAccount.profileIconId +
                        '.png'
                    "
                    alt="Summoner Icon"
                  />
                </figure>
              </div>
              <div class="column">
                <div class="media-content">
                  <p class="title is-2">{{player.SummonerName}}</p>
                  <p class="subtitle is-4">{{player.Name}}</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <li v-bind:class="{'is-active': currentTab == 'overview'}"><a @click.prevent="changeTab('overview')">Overview</a></li>
              <li v-bind:class="{'is-active': currentTab == 'history'}"><a @click.prevent="changeTab('history')">Match History</a></li>
              <li v-bind:class="{'is-active': currentTab == 'badges'}"><a @click.prevent="changeTab('badges')">Badges</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section class="section">
      <div class="container" v-if="currentTab == 'overview'">
        Overview
      </div>
      <div class="container" v-if="currentTab == 'history'">
        <div v-if="this.matches">
          <section>
            <Match
              v-for="match in matches"
              v-bind:key="match.id"
              v-bind:match="match"
            ></Match>
          </section>
        </div>
      </div>
      <div class="container" v-if="currentTab == 'badges'">
        <div class="columns">
          <div class="column is-narrow" v-if="player.BestAlly">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Together Forever
                </p>
              </header>
              <div class="card-image">
                <nav class="level">
                  <div class="level-item">
                    <figure class="image is-64x64">
                      <img
                        class="is-rounded"
                        v-bind:src="
                          'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                            player.LeagueAccount.profileIconId +
                            '.png'
                        "
                        alt="Summoner Icon"
                      />
                    </figure>
                    <b-icon icon="heart" size="is-large" type="is-danger"/>
                    <figure class="image is-64x64">
                      <img
                        class="is-rounded"
                        v-bind:src="
                          'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                            player.BestAlly.Player.LeagueAccount.profileIconId +
                            '.png'
                        "
                        alt="Summoner Icon"
                      />
                    </figure>
                  </div>
                </nav>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="has-centered-text">
                    {{player.SummonerName}} and <router-link v-bind:to="/players/ + player.BestAlly.Player.PlayerId">{{player.BestAlly.Player.SummonerName}}</router-link> are <strong>the best of allies.</strong>
                    <br>
                    <small>{{player.SummonerName}} wins the most when {{player.BestAlly.Player.SummonerName}} is on their team.</small>
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-narrow" v-if="player.Rival">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  It Doesn't Have to Be This Way
                </p>
              </header>
              <div class="card-image">
                <nav class="level">
                  <div class="level-item">
                    <figure class="image is-64x64">
                      <img
                        class="is-rounded"
                        v-bind:src="
                          'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                            player.LeagueAccount.profileIconId +
                            '.png'
                        "
                        alt="Summoner Icon"
                      />
                    </figure>
                    <b-icon icon="flash" size="is-large" type="is-warning"/>
                    <figure class="image is-64x64">
                      <img
                        class="is-rounded"
                        v-bind:src="
                          'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                            player.Rival.Player.LeagueAccount.profileIconId +
                            '.png'
                        "
                        alt="Summoner Icon"
                      />
                    </figure>
                  </div>
                </nav>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="has-centered-text">
                    {{player.SummonerName}} and <router-link v-bind:to="/players/ + player.Rival.Player.PlayerId">{{player.Rival.Player.SummonerName}}</router-link> are <strong>Fated Rivals.</strong>
                    <br>
                    <small>{{player.SummonerName}} plays against {{player.Rival.Player.SummonerName}} in a majority of matches.</small>
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-narrow" v-if="player.PlayerBadges.indexOf('Captain') >= 0">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  I'm The Captain Now
                </p>
              </header>
              <div class="card-image">
                <nav class="level">
                  <div class="level-item">
                    <figure class="image is-64x64">
                      <img
                        class="is-rounded"
                        v-bind:src="
                          'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                            player.LeagueAccount.profileIconId +
                            '.png'
                        "
                        alt="Summoner Icon"
                      />
                    </figure>
                    <b-icon icon="bullhorn" size="is-large" type="is-info"/>
                    <b-icon icon="account-multiple" size="is-large" type="is-info"/>
                  </div>
                </nav>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="has-centered-text">
                    {{player.SummonerName}} has lead their team to victory numerous times.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-narrow" v-if="player.PlayerBadges.indexOf('MVP') >= 0">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Hate Me Cuz They Ain't Me
                </p>
              </header>
              <div class="card-image">
                <nav class="level">
                  <div class="level-item">
                    <figure class="image is-64x64">
                      <img
                        class="is-rounded"
                        v-bind:src="
                          'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                            player.LeagueAccount.profileIconId +
                            '.png'
                        "
                        alt="Summoner Icon"
                      />
                    </figure>
                    <b-icon icon="star-circle" size="is-large" type="is-info"/>
                  </div>
                </nav>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="has-centered-text">
                    {{player.SummonerName}} is high on the priority list for captains.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-narrow" v-if="player.PlayerBadges.indexOf('Role-Top') >= 0">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Role Player - Top
                </p>
              </header>
              <div class="card-image">
                <nav class="level">
                  <div class="level-item">
                    <figure class="image is-64x64">
                      <img
                        class="is-rounded"
                        v-bind:src="
                          'http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/' +
                            player.LeagueAccount.profileIconId +
                            '.png'
                        "
                        alt="Summoner Icon"
                      />
                    </figure>
                    <b-icon icon="star-circle" size="is-large" type="is-info"/>
                  </div>
                </nav>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="has-centered-text">
                    {{player.SummonerName}} tends to get Top Lane.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <b-loading :active.sync="this.loading" :is-full-page="false"></b-loading>
    </section>
  </div>
</template>

<script>
import Match from "@/components/Match";

import _ from "lodash";
import Api from "@/api";
import { mapGetters } from "vuex";

export default {
  name: "PlayerDetail",
  data() {
    return {
      loading: true,
      currentTab: 'overview',
      player: null,
      matches:null,
    };
  },
  async mounted() {
    try {
      const res = await Api.players.getPlayer(this.$route.params.id);
      this.player = res;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async changeTab(tab) {
      this.currentTab = tab;
      if (this.currentTab == 'history'){
        await this.fetchMatchesByPlayer();
      }
    },
    async fetchMatchesByPlayer() {
        try {
          const res = await Api.matches.fetchMatchesByPlayer(this.$route.params.id);
          this.matches = res;
          this.loading = false;
        } catch (err) {
          console.log(err);
        }
      }
  },
  computed: {
    ...mapGetters(["user", "loggedIn"])
  },
  components: {
    Match
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card-image{
  padding-top:1rem;
}

</style>