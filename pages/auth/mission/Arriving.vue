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
				<mission-details :mission="mission" :show-navigation="true"></mission-details>
			</v-card-text>
		</v-card>
		<!-- / MISSION PREVIEW -->

	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import MissionDetails from '../../../components/ui/MissionDetails.vue';

	export default Vue.extend({
		data(){
		    return {

		    }
		},

		components: {
		    MissionDetails
		},

		computed: {
		    mission() {
		        return this.$store.state.missions.assignedMission;
		    }
		},

		methods: {
		    async atWork(){
                if (this.assignInProgress) {
                    return;
                }
                this.assignInProgress = true;

                try {
                    await this.$store.dispatch('missions/arrived');
                } catch (err) {
                    this.selectError = true;
                    this.assignInProgress = false;
                }
		    }
		}
	});
</script>