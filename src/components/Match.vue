<template>
    <section class="container">
        <b-collapse class="card expand" :open.sync="isOpen">
            <div
                slot="trigger"
                slot-scope="props"
                class="card-header"
                role="button">
                <p class="card-header-title is-pulled-left">12/01/2019</p>
                <p class="card-header-title">
                    {{match.teams[0].players[0].common_name}} VS {{match.teams[1].players[0].common_name}}
                </p>
                <a class="card-header-icon">
                    <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="columns">
                    <div class ="column"
                    v-for ="team in match.teams"
                    v-bind:key ="team.id"
                    v-bind:team="match.team">
                        <p class="title is-4 has-text-centered">Team {{team.id}} - Win</p>
                        <b-table :data="team.players">
                            <template slot-scope="players">
                                <b-table-column field="common_name" label="Name">
                                    {{ players.row.common_name }}
                                </b-table-column>
                                <b-table-column field="summoner_name" label="Ingame">
                                    {{ players.row.summoner_name }}
                                </b-table-column>
                                <b-table-column field="role" label="Role">
                                    {{ players.row.role }}
                                </b-table-column>
                            </template>
                        </b-table>
                    </div>
                </div>
            </div>
        </b-collapse>
    </section>
</template>

<script>
    export default {
        name: "Match",
        props:["match"],
        data() {
            return {
                isOpen: false
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.collapse.expand{
    margin-bottom:1rem;
}
</style>
