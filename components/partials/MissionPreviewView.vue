<template>
	<div>

		<!-- CUSTOMER -->
		<v-layout justify-space-between align-center wrap>
			<div>
				<span class="sectionCaption d-block pb-1">Betroffener</span>
				<span class="title d-block">{{mission.customer.name}}</span>
				<span class="d-block">{{mission.customer.type}}</span>
			</div>

			<div>
				<v-btn>{{mission.customer.tel}}</v-btn>
			</div>
		</v-layout>
		<!-- / CUSTOMER -->

		<!-- DESTINATION PLACE -->
		<v-layout class="mt-3" justify-space-between align-center wrap>
			<div>
				<span class="sectionCaption d-block pb-1">Zieladresse</span>
				<span class="d-block">{{mission.address.code}} {{mission.address.city}}<br>{{mission.address.street}}</span>
			</div>

			<div>
				<v-btn>Navigieren</v-btn>
			</div>
		</v-layout>
		<!-- / DESTINATION PLACE -->

		<!-- CAR & DAMAGE -->
		<v-layout class="mt-3" justify-space-between align-center wrap>
			<div>
				<span class="sectionCaption d-block pb-1">Panneninformation</span>
				<span class="d-block">{{mission.car}}</span>
				<span class="d-block">{{mission.defect}}</span>
				<span class="d-block">{{mission.type}}</span>
			</div>

			<div>
				<span class="sectionCaption d-block pb-1">Anrufzeit</span>
				<span class="d-block">{{mission.callTime}}</span>
				<span class="sectionCaption d-block pb-1 pt-3">Erwartete Ankunftszeit</span>
				<span class="d-block">{{mission.expectedTime}}</span>
			</div>
		</v-layout>
		<!-- / CAR & DAMAGE -->

	</div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                mission: null
            };
        },

        props: ['mission']
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