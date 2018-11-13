<template>
	<div>

		<!-- HEADING -->
		<v-layout row align-center justify-space-between wrap>

			<h1>Auftragsübersicht</h1>
			<v-spacer></v-spacer>

			<!-- AT WORK -->
			<v-btn @click="atWork()" color="success" :loading="assignInProgress">
				Weiter
			</v-btn>
			<!-- / AT WORK -->

		</v-layout>
		<!-- / HEADING -->

		<!-- MISSION PREVIEW -->
		<v-card class="mt-4">
			<v-card-text>
				<mission-details :mission="mission"></mission-details>
			</v-card-text>
		</v-card>
		<!-- / MISSION PREVIEW -

		<!-- HEADING -->
		<h1 class="mt-4">Aktionen</h1>
		<!-- / HEADING -->

		<!-- MISSION ACTIONS -->
		<v-card class="mt-4">
			<v-card-text>
				<slot name="actions"></slot>
			</v-card-text>
		</v-card>
		<!-- / MISSION ACTIONS -->

	</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import MissionDetails from './MissionDetails.vue';

    export default Vue.extend({
        components: {
            MissionDetails
        },

        computed: {
            mission() {
                return this.$store.state.missions.assignedMission;
            }
        },

        methods: {
            atWork(){
                // TODO: implement this
            }
        }
    });
</script>