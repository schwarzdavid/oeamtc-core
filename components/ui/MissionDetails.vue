<template>
	<v-card class="mt-4">
		<v-card-text>

			<!-- CUSTOMER -->
			<v-layout justify-space-between align-center wrap>
				<div>
					<span class="sectionCaption d-block pb-1">Betroffener</span>
					<span class="title d-block">{{mission.customer.firstName}} {{mission.customer.lastName}}</span>
					<span class="d-block">{{mission.customer.type}}</span>
				</div>

				<div>
					<phone-number :tel="mission.customer.tel"></phone-number>
				</div>
			</v-layout>
			<!-- / CUSTOMER -->

			<!-- DESTINATION PLACE -->
			<v-layout class="mt-3" justify-space-between align-center wrap>
				<div>
					<span class="sectionCaption d-block pb-1">Zieladresse</span>
					<span class="d-block">{{mission.address.code}} {{mission.address.city}}<br>{{mission.address.street}}</span>
				</div>

				<div v-if="showNavigation">
					<v-btn>Navigation</v-btn>
				</div>
			</v-layout>
			<!-- / DESTINATION PLACE -->

			<!-- CAR & DAMAGE -->
			<v-layout justify-space-between align-center wrap>
				<div class="mt-3">
					<span class="sectionCaption d-block pb-1">Panneninformation</span>
					<span class="d-block">{{mission.car}}</span>
					<span class="d-block">{{mission.defect}}</span>
					<span class="d-block">{{mission.type}}</span>
				</div>

				<div class="mt-3">
					<span class="sectionCaption d-block pb-1">Anrufzeit</span>
					<span class="d-block">{{mission.callTime}}</span>
					<span class="sectionCaption d-block pb-1 pt-3">Erwartete Ankunftszeit</span>
					<span class="d-block">{{mission.expectedTime}}</span>
				</div>
			</v-layout>
			<!-- / CAR & DAMAGE -->

			<!-- TOW PLACE -->
			<v-layout class="mt-3" justify-space-between align-center wrap v-if="mission.towAddress">
				<div>
					<span class="sectionCaption d-block pb-1">Abschleppadresse</span>
					<span class="d-block">{{mission.towAddress.code}} {{mission.towAddress.city}}<br>{{mission.towAddress.street}}</span>
				</div>

				<div v-if="showTowNavigation">
					<v-btn>Navigation</v-btn>
				</div>
			</v-layout>
			<!-- / TOW PLACE -->

		</v-card-text>
	</v-card>
</template>

<script lang="ts">
    import Vue from 'vue';
    import PhoneNumber from '../common/PhoneNumber.vue';

    export default Vue.extend({
        components: {
            PhoneNumber
        },

        props: ['mission', 'showNavigation', 'showTowNavigation']
    });
</script>

<style lang="scss" scoped>
	.sectionCaption {
		text-transform: uppercase;
		opacity: .7;
		font-size: .95rem;
		font-style: italic;
	}
</style>