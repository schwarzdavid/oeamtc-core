<template>
	<div>

		<v-layout row align-center justify-space-between>

			<h1>Aufträge</h1>
			<v-spacer></v-spacer>

			<!-- SHOW PREVIEW -->
			<v-btn to="preview" color="success" :disabled="missions.length === 0" replace>
				<span class="hidden-sm-and-up">Vorschau</span>
				<span class="hidden-xs-only">Auftragsvorschau</span>
			</v-btn>
			<!-- / SHOW PREVIEW -->

		</v-layout>

		<!-- CURRENT MISSIONS -->
		<v-card class="mt-4">
			<v-card-text>
				<v-data-table disable-initial-sort :headers="headers" :items="missions" hide-actions
				              :loading="reloadingMissions">
					<template slot="items" slot-scope="props">
						<tr>
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

		<!-- RELOAD MISSIONS MANUALLY -->
		<v-btn flat @click="reloadMissions()">
			<v-icon>mdi-reload</v-icon>
			<span class="pl-2">Neu laden</span>
		</v-btn>
		<!-- / RELOAD MISSIONS MANUALLY -->

		<v-snackbar v-model="missionAdded" bottom right>
			<span>Neuer Auftrag</span>
			<v-btn color="primary" flat @click="missionAdded = false">Schließen</v-btn>
		</v-snackbar>

		<v-snackbar v-model="reloadError" bottom right>
			<span>Fehler beim Laden</span>
			<v-btn color="primary" flat @click="reloadError = false">Schließen</v-btn>
		</v-snackbar>

		<v-snackbar v-model="reloadSuccess" bottom right>
			<span>Aufträge erfolgreich geladen</span>
			<v-btn color="primary" flat @click="reloadSuccess = false">Schließen</v-btn>
		</v-snackbar>

	</div>
</template>

<script type="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                reloadError: false,
                reloadSuccess: false,
                reloadingMissions: false,
                missionAdded: false,
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
            missions() {
                return this.$store.state.missions.missions;
            }
        },

	    created(){
            this.$onSocket('mission:added', () => {
                this.missionAdded = true;
            });
	    },

        methods: {
            async reloadMissions() {
                if (this.reloadingMissions) {
                    return;
                }
                this.reloadingMissions = 'info';

                try {
                    await this.$store.dispatch('missions/reload');
                    this.reloadSuccess = true;
                } catch (e) {
                    this.reloadError = true;
                } finally {
                    this.reloadingMissions = false;
                }

            }
        }
    });
</script>