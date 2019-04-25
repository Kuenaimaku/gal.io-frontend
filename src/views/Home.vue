<template>
  <div>
    <section class="hero is-primary is-bold is-medium block">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <!-- Left side -->
              <p class="title is-2">League Recorder</p>
              <p class="subtitle is-5">Record Custom Game Statistics</p>
            </div>
            <div class="column has-centered-text">
              <!-- Right side -->
              <router-link to="matches/" class="button is-large is-info block">
                <span class="icon">
                  <b-icon icon="database-search" size="is-large" />
                </span>
                <span>Find your Game</span>
              </router-link>
              <p class="subtitle is-5 block">
                Contribute to us via
                <a
                  class="tag is-medium is-black"
                  href="https://github.com/Kuenaimaku/league-recorder"
                  target="_blank"
                >
                  <span class="icon">
                    <b-icon icon="github-face" />
                  </span>
                  <span>github</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
