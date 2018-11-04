<template>
    <v-container>

        <v-layout row align-center justify-space-between>

            <h1>Aufträge</h1>
            <v-spacer></v-spacer>

            <!-- RELOAD MISSIONS MANUALLY -->
            <v-btn flat @click="reloadMissions()">
                <v-icon>mdi-reload</v-icon>
                <span class="pl-2">Neu laden</span>
            </v-btn>
            <!-- / RELOAD MISSIONS MANUALLY -->

        </v-layout>

        <!-- CURRENT MISSIONS -->
        <v-card class="mt-4">
            <v-card-text>
                <v-data-table disable-initial-sort :headers="headers" :items="missions" hide-actions
                              :loading="reloadingMissions">
                    <template slot="items" slot-scope="props">
                        <tr @click.prevent="selectMission(props.item)">
                            <td>{{props.item.id}}</td>
                            <td>{{props.item.at}}</td>
                            <td>{{props.item.place}}</td>
                            <td class="text-xs-right">{{props.item.car}}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
        <!-- / CURRENT MISSIONS -->

    </v-container>
</template>

<script type="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                reloadingMissions: false,
                headers: [
                    {
                        text: 'Nr.',
                        align: 'left',
                        sortable: false
                    },
                    {
                        text: 'AT',
                        align: 'left',
                        sortable: false
                    },
                    {
                        text: 'Ort',
                        align: 'left',
                        sortable: false
                    },
                    {
                        text: 'Kfz',
                        align: 'right',
                        sortable: false
                    }
                ]
            };
        },

        computed: {
            missions(){
                return this.$store.state.missions;
            }
        },

        created(){
            this.reloadMissions();
        },

        methods: {
            async reloadMissions(){
                if(this.reloadingMissions){
                    return;
                }
                this.reloadingMissions = 'info';

                try {
                    await this.$store.dispatch('missions/reload');
                } catch(e) {
                    // TODO: add error message
                } finally {
                    this.reloadingMissions = false;
                }

            },
            selectMission(mission){
                // TODO: implement logic
            }
        }
    });
</script>