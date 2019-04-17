<template>
    <div class="columns">
      <div class="column">
        <b-table
            :data="isEmpty ? [] : data"
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :loading="isLoading"
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards">

            <template slot-scope="props">
                <b-table-column field="id" label="Order" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="summoner_name" label="Summoner">
                    {{ props.row.summoner_name }}
                </b-table-column>

                <b-table-column field="common_name" label="Name">
                    {{ props.row.common_name }}
                </b-table-column>

                <b-table-column field="role" label="Role" centered>
                    <span class="tag is-success">
                        {{ props.row.role }}
                    </span>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>
      </div>
      <div class="column">
        <b-table
            :data="isEmpty ? [] : data"
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :loading="isLoading"
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards">

            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="summoner_name" label="Summoner">
                    {{ props.row.summoner_name }}
                </b-table-column>

                <b-table-column field="last_name" label="Name">
                    {{ props.row.common_name }}
                </b-table-column>

                <b-table-column field="role" label="Role" centered>
                    <span class="tag is-success">
                        {{ props.row.role }}
                    </span>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            const data = [
                { 'id': 1, 'summoner_name': 'Kuenaimaku', 'common_name': 'Kyle', 'role': 'Support' },
                { 'id': 2, 'summoner_name': 'Peruman', 'common_name': 'Peru', 'role': 'Jungle' },
                { 'id': 3, 'summoner_name': 'ArmoredKoko47', 'common_name': 'Eric', 'role': 'Bot' },
                { 'id': 4, 'summoner_name': 'Pudash', 'common_name': 'Jason', 'role': 'Top' },
                { 'id': 5, 'summoner_name': 'GlacialPuppy', 'common_name': 'Sean', 'role': 'Mid' },
            ]

            return {
                data,
                isEmpty: false,
                isBordered: false,
                isStriped: false,
                isNarrowed: false,
                isHoverable: false,
                isFocusable: false,
                isLoading: false,
                hasMobileCards: true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
