<template>
  <div>
    <section class="hero is-player is-bold">
      <div class="hero-body">
        <div class="container">
            <div class="columns is-vcentered" v-if="!player">
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
        <div v-if="player.GenericBadges">
          <section
            class="columns is-centered is-vcentered"
            v-for="chunk in genericBadgeChunks"
            v-bind:key="chunk[0].id"
          >
            <Badge
              v-for="badge in chunk"
              v-bind:key="badge.title"
              v-bind:badge="badge"
            ></Badge>
          </section>
        </div>
        <div v-if="player.GenericBadges">
          <h3>Related Badges</h3>
          <section
            class="columns is-centered is-vcentered"
            v-for="chunk in relationalBadgeChunks"
            v-bind:key="chunk[0].id"
          >
            <RelationalBadge
              v-for="badge in chunk"
              v-bind:key="badge.title"
              v-bind:badge="badge"
            ></RelationalBadge>
          </section>
        </div>
      </div>
    <b-loading :active.sync="this.loading" :is-full-page="false"></b-loading>
    </section>
  </div>
</template>

<script>
import Match from "@/components/Match";

import Badge from "@/components/GenericBadge";
import RelationalBadge from "@/components/RelationalBadge";

import _ from "lodash";
import Api from "@/api";
import { mapGetters } from "vuex";
import { setTimeout } from 'timers';

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
    async fetchData() {
      try {
        this.loading= true;
        this.matches = null;
        this.player = null;
        await this.changeTab('overview');
        const res = await Api.players.getPlayer(this.$route.params.id);
        this.player = res;
        this.loading = false;
      } catch (err) {
        console.log(err);
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
    ...mapGetters(["user", "loggedIn"]),
    genericBadgeChunks() {
      return _.chunk(Object.values(this.player.GenericBadges), 4);
    },
    relationalBadgeChunks() {
      return _.chunk(Object.values(this.player.RelationalBadges), 3);
    }
  },
  watch: {
  // when redirect to new category_name, this will be callback
  '$route': 'fetchData'
  },
  components: {
    Match,
    Badge,
    RelationalBadge
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card-image{
  padding-top:1rem;
}

</style>