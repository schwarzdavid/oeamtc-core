<template>
	<div>

		<!-- HEADING -->
		<v-layout row align-center justify-space-between wrap>

			<h1>Auftragsvorschau</h1>
			<v-spacer></v-spacer>

			<!-- BACK TO OVERVIEW -->
			<v-btn to="/" color="success" flat replace>
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
		<v-card class="mt-4">
			<v-card-text>
				<loading-spinner></loading-spinner>
			</v-card-text>
		</v-card>
		<!-- / MISSION PREVIEW -->

		<v-snackbar v-model="selectError" bottom right>
			<span>Fehler beim Auswählen</span>
			<v-btn color="primary" flat @click="selectError = false">Schließen</v-btn>
		</v-snackbar>
	</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import LoadingSpinner from '../partials/LoadingSpinner.vue';

    export default Vue.extend({
        data() {
            return {
                assignInProgress: false,
                selectError: false
            };
        },

	    components: {
            LoadingSpinner
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