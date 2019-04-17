<template>
  <div class="matches">
    <section class="hero is-success is-bold block">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <!-- Left side -->
              <p class="title is-2">Matches</p>
              <p class="subtitle is-5">Under Construction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Match v-for="match in matches"
      v-bind:key="match.id"
      v-bind:match="match"
      ></Match>
    </section>
    <section id="addMatch">
      <b-tooltip label="Add a New Match" animated position="is-left" type="is-info">
      <b-button size="is-large" type="is-primary" class="is-rounded" @click="showAddMatch">
        <b-icon icon="message-plus"/>
      </b-button>
      </b-tooltip>
    </section>
  </div>
</template>


<script>
import Match from "@/components/Match";
import AddMatchModal from "@/components/modals/AddMatchModal";

export default {
  name: "Matches",
	data() {
		return {
      matches: [{
        id: 1,
        teams:[
          { id: 1,
            players:
            [
              { 'id': 1, 'summoner_name': 'Kuenaimaku', 'common_name': 'Kyle', 'role': 'Support' },
              { 'id': 2, 'summoner_name': 'Peruman', 'common_name': 'Peru', 'role': 'Jungle' },
              { 'id': 3, 'summoner_name': 'ArmoredKoko47', 'common_name': 'Eric', 'role': 'Bot' },
              { 'id': 4, 'summoner_name': 'Pudash', 'common_name': 'Jason', 'role': 'Top' },
              { 'id': 5, 'summoner_name': 'Sean', 'common_name': 'Sean', 'role': 'Middle' }
            ]
          },
          { id: 2,
            players:
            [
              { 'id': 1, 'summoner_name': 'CheshHat', 'common_name': 'Aline', 'role': 'Middle' },
              { 'id': 2, 'summoner_name': 'About Damn Tahm', 'common_name': 'Matt', 'role': 'Jungle' },
              { 'id': 3, 'summoner_name': 'Xayah Laßeouf', 'common_name': 'Tevin', 'role': 'Top' },
              { 'id': 4, 'summoner_name': 'Pudgy Turtle', 'common_name': 'Ben', 'role': 'Support' },
              { 'id': 5, 'summoner_name': 'msteele1', 'common_name': 'Marshall', 'role': 'Bot' }
            ]
          }
        ]
      },
      {
        id: 2,
        teams:[
          { id: 1,
            players:
            [
              { 'id': 1, 'summoner_name': 'Kuenaimaku', 'common_name': 'Kyle', 'role': 'Support' },
              { 'id': 2, 'summoner_name': 'Peruman', 'common_name': 'Peru', 'role': 'Jungle' },
              { 'id': 3, 'summoner_name': 'ArmoredKoko47', 'common_name': 'Eric', 'role': 'Bot' },
              { 'id': 4, 'summoner_name': 'Pudash', 'common_name': 'Jason', 'role': 'Top' },
              { 'id': 5, 'summoner_name': 'Sean', 'common_name': 'Sean', 'role': 'Middle' }
            ]
          },
          { id: 2,
            players:
            [
              { 'id': 1, 'summoner_name': 'CheshHat', 'common_name': 'Aline', 'role': 'Middle' },
              { 'id': 2, 'summoner_name': 'About Damn Tahm', 'common_name': 'Matt', 'role': 'Jungle' },
              { 'id': 3, 'summoner_name': 'Xayah Laßeouf', 'common_name': 'Tevin', 'role': 'Top' },
              { 'id': 4, 'summoner_name': 'Pudgy Turtle', 'common_name': 'Ben', 'role': 'Support' },
              { 'id': 5, 'summoner_name': 'msteele1', 'common_name': 'Marshall', 'role': 'Bot' }
            ]
          }
        ]
      },
      {
        id: 3,
        teams:[
          { id: 1,
            players:
            [
              { 'id': 1, 'summoner_name': 'Kuenaimaku', 'common_name': 'Kyle', 'role': 'Support' },
              { 'id': 2, 'summoner_name': 'Peruman', 'common_name': 'Peru', 'role': 'Jungle' },
              { 'id': 3, 'summoner_name': 'ArmoredKoko47', 'common_name': 'Eric', 'role': 'Bot' },
              { 'id': 4, 'summoner_name': 'Pudash', 'common_name': 'Jason', 'role': 'Top' },
              { 'id': 5, 'summoner_name': 'Sean', 'common_name': 'Sean', 'role': 'Middle' }
            ]
          },
          { id: 2,
            players:
            [
              { 'id': 1, 'summoner_name': 'CheshHat', 'common_name': 'Aline', 'role': 'Middle' },
              { 'id': 2, 'summoner_name': 'About Damn Tahm', 'common_name': 'Matt', 'role': 'Jungle' },
              { 'id': 3, 'summoner_name': 'Xayah Laßeouf', 'common_name': 'Tevin', 'role': 'Top' },
              { 'id': 4, 'summoner_name': 'Pudgy Turtle', 'common_name': 'Ben', 'role': 'Support' },
              { 'id': 5, 'summoner_name': 'msteele1', 'common_name': 'Marshall', 'role': 'Bot' }
            ]
          }
        ]
      },
      {
        id: 4,
        teams:[
          { id: 1,
            players:
            [
              { 'id': 1, 'summoner_name': 'Kuenaimaku', 'common_name': 'Kyle', 'role': 'Support' },
              { 'id': 2, 'summoner_name': 'Peruman', 'common_name': 'Peru', 'role': 'Jungle' },
              { 'id': 3, 'summoner_name': 'ArmoredKoko47', 'common_name': 'Eric', 'role': 'Bot' },
              { 'id': 4, 'summoner_name': 'Pudash', 'common_name': 'Jason', 'role': 'Top' },
              { 'id': 5, 'summoner_name': 'Sean', 'common_name': 'Sean', 'role': 'Middle' }
            ]
          },
          { id: 2,
            players:
            [
              { 'id': 1, 'summoner_name': 'CheshHat', 'common_name': 'Aline', 'role': 'Middle' },
              { 'id': 2, 'summoner_name': 'About Damn Tahm', 'common_name': 'Matt', 'role': 'Jungle' },
              { 'id': 3, 'summoner_name': 'Xayah Laßeouf', 'common_name': 'Tevin', 'role': 'Top' },
              { 'id': 4, 'summoner_name': 'Pudgy Turtle', 'common_name': 'Ben', 'role': 'Support' },
              { 'id': 5, 'summoner_name': 'msteele1', 'common_name': 'Marshall', 'role': 'Bot' }
            ]
          }
        ]
      },
      {
        id: 5,
        teams:[
          { id: 1,
            players:
            [
              { 'id': 1, 'summoner_name': 'Kuenaimaku', 'common_name': 'Kyle', 'role': 'Support' },
              { 'id': 2, 'summoner_name': 'Peruman', 'common_name': 'Peru', 'role': 'Jungle' },
              { 'id': 3, 'summoner_name': 'ArmoredKoko47', 'common_name': 'Eric', 'role': 'Bot' },
              { 'id': 4, 'summoner_name': 'Pudash', 'common_name': 'Jason', 'role': 'Top' },
              { 'id': 5, 'summoner_name': 'Sean', 'common_name': 'Sean', 'role': 'Middle' }
            ]
          },
          { id: 2,
            players:
            [
              { 'id': 1, 'summoner_name': 'CheshHat', 'common_name': 'Aline', 'role': 'Middle' },
              { 'id': 2, 'summoner_name': 'About Damn Tahm', 'common_name': 'Matt', 'role': 'Jungle' },
              { 'id': 3, 'summoner_name': 'Xayah Laßeouf', 'common_name': 'Tevin', 'role': 'Top' },
              { 'id': 4, 'summoner_name': 'Pudgy Turtle', 'common_name': 'Ben', 'role': 'Support' },
              { 'id': 5, 'summoner_name': 'msteele1', 'common_name': 'Marshall', 'role': 'Bot' }
            ]
          }
        ]
      }
      ]
		}
  },
  methods:{
    showAddMatch() {
			this.$modal.open({
				parent: this,
        component: AddMatchModal,
        width: '70vw'
			});
    }
  },
  components: {
    Match,
    AddMatchModal
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#addMatch {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
  .button{
    border-radius: 9999px;
    height:3em;
    width:3em;
  }
}
</style>