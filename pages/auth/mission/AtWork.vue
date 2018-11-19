<template>
	<v-container>

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
		<mission-details :mission="mission"></mission-details>
		<!-- / MISSION PREVIEW -->

		<!-- HEADING -->
		<h1 class="mt-4">Aktionen</h1>
		<!-- / HEADING -->

		<!-- MISSION ACTIONS -->
		<mission-actions></mission-actions>
		<!-- / MISSION ACTIONS -->

	</v-container>
</template>

<script lang="ts">
    import Vue from 'vue';
    import MissionDetails from '../../../components/ui/MissionDetails.vue';
    import MissionActions from '../../../components/ui/MissionActions.vue';

    export default Vue.extend({
        components: {
            MissionDetails,
	        MissionActions
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