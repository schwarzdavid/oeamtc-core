<template>
	<div>

		<!-- HEADING -->
		<v-layout row align-center justify-space-between wrap>

			<h1>Auftragsvorschau</h1>
			<v-spacer></v-spacer>

			<!-- BACK TO OVERVIEW -->
			<v-btn to="/" color="success" flat>
				Zurück
			</v-btn>
			<!-- / BACK TO OVERVIEW -->

			<!-- START MISSION -->
			<v-btn @click="assignMission()" color="success" :loading="assignInProgress">
				Weiter
			</v-btn>
			<!-- / START MISSION -->

		</v-layout>
		<!-- / HEADING -->

		<!-- MISSION PREVIEW -->
		<loading-spinner v-if="!mission"></loading-spinner>
		<mission-details v-if="mission" :mission="mission" :show-navigation="true"></mission-details>
		<!-- / MISSION PREVIEW -->

		<v-snackbar v-model="selectError" bottom right>
			<span>Fehler beim Auswählen</span>
			<v-btn color="primary" flat @click="selectError = false">Schließen</v-btn>
		</v-snackbar>
	</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import LoadingSpinner from '../../components/common/LoadingSpinner.vue';
    import MissionDetails from '../../components/ui/MissionDetails.vue';

    export default Vue.extend({
        data() {
            return {
                assignInProgress: false,
                selectError: false,
                mission: null
            };
        },

        components: {
            LoadingSpinner,
            MissionDetails
        },

        async created() {
            try {
                this.mission = await this.$api.get('/missions/next').then(response => response.data);
            } catch (e) {
                this.$router.push({
                    name: this.$config('routes.waiting')
                });
            }
        },

        methods: {
            async assignMission() {
                if (this.assignInProgress) {
                    return;
                }
                this.assignInProgress = true;

                try {
                    await this.$store.dispatch('missions/assignMission');
                } catch (err) {
                    this.selectError = true;
                    this.assignInProgress = false;
                }
            }
        }
    });
</script>