<template>
	<div>

		<!-- HEADING -->
		<v-layout row align-center justify-space-between wrap>

			<h1>Auftragsübersicht</h1>
			<v-spacer></v-spacer>

			<!-- AT WORK -->
			<v-btn @click="finish()" color="success" :loading="assignInProgress">
				Weiter
			</v-btn>
			<!-- / AT WORK -->

		</v-layout>
		<!-- / HEADING -->

		<!-- MISSION PREVIEW -->
		<mission-details :mission="mission" :show-tow-navigation="true"></mission-details>
		<!-- / MISSION PREVIEW -->

	</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import MissionDetails from '../../components/ui/MissionDetails.vue';

    export default Vue.extend({
        data() {
            return {}
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
            async finish() {
	            if(this.mission.finishAdded) {
                    if (this.assignInProgress) {
                        return;
                    }
                    this.assignInProgress = true;
                    try {
                        await this.$store.dispatch('missions/finish');
                    } catch (err) {
                        console.log(err);
                        this.selectError = true;
                    } finally {
                        this.assignInProgress = false;
                    }
                } else {
                    this.$router.push({name: 'finish'});
	            }
            }
        }
    });
</script>