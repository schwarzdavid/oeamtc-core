<template>
	<v-card>
		<v-card-text>
			<v-layout row align-start justify-space-between wrap>

				<!-- CURRENT MISSION -->
				<v-flex xs12 class="px-2">
					<v-text-field label="Aktueller Auftrag" v-model="missionTitle" disabled></v-text-field>
				</v-flex>
				<!-- / CURRENT MISSION -->

				<!-- FIXED PRICE -->
				<v-flex xs12 sm6 class="px-2">
					<v-checkbox label="Fixpreis" true-value disabled></v-checkbox>
				</v-flex>
				<!-- / FIXED PRICE -->

				<!-- BASIC CHARGE -->
				<v-flex xs12 sm6 class="px-2">
					<v-checkbox label="Grundgebühr" true-value disabled></v-checkbox>
				</v-flex>
				<!-- BASIC CHARGE -->

				<!-- UNS KM -->
				<v-flex xs12 sm6 class="px-2">
					<v-text-field label="UNS Kilometer" value="5" color="info"></v-text-field>
				</v-flex>
				<!-- / UNS KM -->

				<!-- KM TO PAY -->
				<v-flex xs12 sm6 class="px-2">
					<v-text-field label="KM zu bezahlen" value="20" color="info"></v-text-field>
				</v-flex>
				<!-- / KM TO PAY -->

			</v-layout>
		</v-card-text>
	</v-card>
</template>

<script lang="ts">
	import Vue from 'vue';
    import {IMission} from "../../store/missions/types";

	export default Vue.extend({
		computed: {
		    missionTitle(): string {
		        return (<IMission>this.mission).car + ' - ' + (<IMission>this.mission).defect;
		    }
		},

		props: ['mission']
	});
</script>