<template>
	<v-app>
		<router-view></router-view>
		<slot></slot>
	</v-app>
</template>

<script>
	import Vue from 'vue';
	import router from './router/index';
	import store from './store/index';
	import {Socket} from './plugins/socket/index';
	import Vuetify from 'vuetify';
	import {Config} from "./plugins/config";
	import {Api} from "./plugins/rest";
	import ApplicationDrawer from './components/layouts/ApplicationWrapper.vue';

	Vue.use(Vuetify, {
		iconfont: 'mdi',
		theme: {
			primary: '#ffdc00',
			secondary: '#ffb600',
			accent: '#da2032',
			error: '#da2032',
			warning: '#ff4a00',
			info: '#0071bb',
			success: '#62b339'
		}
	});
	Vue.use(Socket);
	Vue.use(Config);
	Vue.use(Api);

	let savedUser;
	try {
		savedUser = JSON.parse(localStorage.getItem('user'));
	} catch (e) {
		console.log('Cannot get saved user');
	}

	if (savedUser) {
		store.commit('user/setUser', savedUser);
		console.log('Setting stored user');
	}

	export default Vue.extend({
		router,
		store,

		data() {
			return {
				socketOpen: false,
				socketClosed: false
			};
		},

		components: {
			ApplicationDrawer
		},

		created() {
			this.$onSocket('close', () => {
				this.socketClosed = true;
			});

			this.$onSocket('open', () => {
				this.socketOpen = true;

				const username = this.$store.state.user.username;
				if (username) {
					this.$emitSocket('register', {username});
				}
			});
		}
	});
</script>

<style src="~/@mdi/font/css/materialdesignicons.css"></style>
<style src="~/vuetify/dist/vuetify.min.css"></style>

<style lang="scss">
	html, body {
		height: 100%;
		overflow: auto;
	}

	#app, .application--wrap {
		min-height: 100%;
	}
</style>
