import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import DashboardComponent from '../components/dashboard/Dashboard.vue';
import AuthComponent from '../components/auth/Auth.vue';
import MissionComponent from '../components/dashboard/pages/Missions.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/auth',
			name: 'auth',
			component: AuthComponent
		},
		{
			path: '/',
			name: 'dashboard',
			component: DashboardComponent,
			beforeEnter(to, from, next){
				if(!store.getters['user/isAuthenticated']){
					console.log("im here once again");
					return next('/auth');
				}
				return next();
			},
			children: [
                {
                    path: '',
					name: 'missions',
					component: MissionComponent
                }
			]
		}
	]
});

export default router;
