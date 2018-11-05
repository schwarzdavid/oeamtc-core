import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import {config} from '../plugins/config/lib';
import DashboardComponent from '../components/dashboard/Dashboard.vue';
import AuthComponent from '../components/auth/Auth.vue';
import MissionsComponent from '../components/dashboard/Missions.vue';
import MissionComponent from '../components/mission/Mission.vue';
import ArrivingComponent from '../components/mission/Arriving.vue';
import AtWorkComponent from '../components/mission/AtWork.vue';
import MovingOnComponent from '../components/mission/MovingOn.vue';
import MissionPreviewComponent from '../components/dashboard/MissionPreview.vue'

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
            redirect: {
                name: 'missions'
            },
            children: [
                {
                    path: '',
                    name: 'missions',
                    component: MissionsComponent
                },
                {
                    path: 'preview',
                    name: 'preview',
                    component: MissionPreviewComponent
                }
            ]
        }
    ]
});

if (config.get('useDefaultMissionRoutes')) {
    const routes = config.get('routes');

    router.addRoutes([
        {
            path: '/mission',
            name: 'mission',
            component: MissionComponent,
            children: [
                {
                    path: routes.arriving,
                    name: routes.arriving,
                    component: ArrivingComponent
                },
                {
                    path: routes.atWork,
                    name: routes.atWork,
                    component: AtWorkComponent
                },
                {
                    path: routes.movingOn,
                    name: routes.movingOn,
                    component: MovingOnComponent
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
        return next({name: 'auth'});
    }

    return next();
});

export default router;
