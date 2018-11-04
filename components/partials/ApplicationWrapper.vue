<template>
	<div>

		<!-- SIDE NAVIGATION -->
		<v-navigation-drawer v-model="drawer" app fixed clipped mobile-break-point="1000">

			<!-- NAVIGATION ITEMS -->
			<slot name="navigationDrawer"></slot>
			<!-- / NAVIGATION ITEMS -->

			<!-- CURRENT USER -->
			<v-list>
				<v-list-tile>
					<v-list-content>
						<v-list-tile-title>Aktueller Status: <strong>BEREIT</strong></v-list-tile-title>
						<v-list-tile-sub-title>Servicestelle: 1234 Zentrale Erdberg</v-list-tile-sub-title>
					</v-list-content>
				</v-list-tile>
			</v-list>
			<!-- / CURRENT USER -->

		</v-navigation-drawer>
		<!-- / SIDE NAVIGATION -->

		<!-- TOOLBAR -->
		<v-toolbar app absolute clipped-left color="primary">

			<!-- NAVIGATION TOGGLE BUTTON -->
			<v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
			<!-- / NAVIGATION TOGGLE BUTTON -->

			<!-- TITLE -->
			<span class="title ml3 mr-5">ÖAMTC Roadpatrol</span>
			<!-- / TITLE -->

			<!-- ONLINE INDICATOR -->
			<!-- TODO: implement online indicator -->
			<!-- / ONLINE INDICATOR -->

			<v-spacer></v-spacer>

			<!-- ALERT -->
			<v-btn color="red" dark>Alarm</v-btn>
			<!-- / ALERT -->

			<!-- CALL DESIRE -->
			<v-btn class="hidden-xs-only">Sprachwunsch</v-btn>
			<!-- / CALL DESIRE -->

			<!-- TIME -->
			<span class="subheading px-3 hidden-xs-only">{{time}}</span>
			<!-- / TIME -->

		</v-toolbar>
		<!-- / TOOLBAR -->

	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		data(){
		    return {
                drawer: null
		    };
		}
	});
</script>