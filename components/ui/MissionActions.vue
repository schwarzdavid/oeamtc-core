<template>
	<v-card class="mt-4">
		<v-card-text>

			<!-- OPEN REGISTER -->
			<v-btn>
				<v-btn color="primary" @click="openRegister()">Registrierkasse</v-btn>
			</v-btn>
			<!-- / OPEN REGISTER -->

		</v-card-text>
	</v-card>
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
            atWork() {
                // TODO: implement this
            }
        }
    });
</script>