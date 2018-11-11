<template>
	<div>
		<application-wrapper>
			<router-view name="drawer"></router-view>
		</application-wrapper>

		<!-- CONTENT -->
		<v-content style="height:inherit;">
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-content>
		<!-- / CONTENT -->

		<v-snackbar v-model="socketOpen" bottom right>
			<span>Verbindung hergestellt</span>
			<v-btn color="primary" flat @click.prevent="socketOpen = false">Schließen</v-btn>
		</v-snackbar>

		<v-snackbar v-model="socketClosed" bottom right>
			<span>Verbindung unterbrochen</span>
			<v-btn color="primary" flat @click.prevent="socketClosed = false">Schließen</v-btn>
		</v-snackbar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import ApplicationWrapper from './ApplicationWrapper.vue'

	export default Vue.extend({
		components: {
			ApplicationWrapper
		}
	});
</script>