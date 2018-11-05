import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import {config} from '../plugins/config/lib';
import DashboardComponent from '../components/dashboard/Dashboard.vue';
import AuthComponent from '../components/auth/Auth.vue';
import MissionsComponent from '../components/dashboard/pages/Missions.vue';
import MissionComponent from '../components/mission/Mission.vue';
import ArrivalComponent from '../components/mission/InArrival.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/',
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
            children: [
                {
                    path: '',
                    name: 'missions',
                    component: MissionsComponent
                }
            ]
        }
    ]
});

console.log('Adding default routes now');
if (config.get('useDefaultMissionRoutes')) {
    console.log('useDefaultMissionRoutes');
    router.addRoutes([
        {
            path: '/mission',
            name: 'mission',
            component: MissionComponent,
            children: [
                {
                    path: 'arrival',
                    name: config.get('routes.arriving'),
                    component: ArrivalComponent
                }
            ]
        }
    ]);
}

router.beforeEach((to, from, next) => {
    if (to.name === 'auth') {
        return next();
    }

    if (!store.getters['user/isAuthenticated']) {
        return next('/auth');
    }

    return next();
});

export default router;
