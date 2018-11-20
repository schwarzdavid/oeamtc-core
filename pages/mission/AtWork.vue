<template>
	<div>

		<!-- HEADING -->
		<v-layout row align-center justify-space-between wrap>

			<h1>Auftragsübersicht</h1>
			<v-spacer></v-spacer>

			<!-- CONTINUE -->
			<v-btn @click="next()" color="success">
				Weiter
			</v-btn>
			<!-- / CONTINUE -->

		</v-layout>
		<!-- / HEADING -->

		<!-- MISSION PREVIEW -->
		<mission-details :mission="mission"></mission-details>
		<!-- / MISSION PREVIEW -->

		<!-- FINISH AD -->
		<v-card class="mt-4" v-if="mission.type === 'AD'">
			<v-card-text>

				<v-btn color="primary" @click="finish()" style="color:rgba(0,0,0,.87);">
					Kunde fährt nicht mit
				</v-btn>

			</v-card-text>
		</v-card>
		<!-- / FINISH AD -->

		<!-- ERROR SNACK -->
		<v-snackbar v-model="errorSnack" bottom right>
			<span>Ein Unbekannter Fehler ist aufgetreten</span>
			<v-btn color="primary" flat @click.prevent="errorSnack = false">Schließen</v-btn>
		</v-snackbar>
		<!-- / ERROR SNACK -->

	</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import MissionDetails from '../../components/ui/MissionDetails.vue';

    export default Vue.extend({
        components: {
            MissionDetails
        },

        computed: {
            mission() {
                return this.$store.state.missions.assignedMission;
            }
        },

        data() {
            return {
                errorSnack: false
            };
        },

        methods: {
            async next() {
                if (this.mission.type === 'AD') {
                    try {
                        await this.$store.dispatch('missions/movingOn');
                    } catch (err) {
                        console.log(err);
                        this.errorSnack = true;
                    }
                } else {
                    this.$router.push({name: 'finish'});
                }
            },

            finish() {
                this.$router.push({name: 'finish'});
            }
        }
    });
</script>