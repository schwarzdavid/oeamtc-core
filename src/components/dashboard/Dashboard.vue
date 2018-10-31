<template>
	<div style="height:100%">

		<!-- SIDE NAVIGATION -->
		<v-navigation-drawer v-model="drawer" app fixed clipped class="grey-lighten-4">
			Hallo i bims
		</v-navigation-drawer>
		<!-- / SIDE NAVIGATION -->

		<!-- TOOLBAR -->
		<v-toolbar app absolute clipped-left color="light-green darken-2" dark>
			<v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
			<span class="title ml3 mr-5">ÖÄMTC Roadpatrol</span>
			<v-spacer></v-spacer>
			<span>Hallo i bims</span>
		</v-toolbar>
		<!-- / TOOLBAR -->

		<!-- CONTENT -->
		<v-content style="height:inherit;">
			<router-view></router-view>
		</v-content>
		<!-- / CONTENT -->

	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		data(){
		    return {
		        drawer: null
			};
		},

		created(){
			this.$emitSocket('register', {
				username: this.$store.state.user.username
			});
		},

		destroyed(){
		    this.$emitSocket('unregister');
		}
	});
</script>
