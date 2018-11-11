import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import {config} from '../plugins/config/lib';
import {UserState} from "../store/user/types";
import Utils, {events} from '../lib/Utils';

import AuthComponent from '../components/auth/Auth.vue';
import MissionsComponent from '../components/dashboard/Missions.vue';
import ArrivingComponent from '../components/mission/Arriving.vue';
import AtWorkComponent from '../components/mission/AtWork.vue';
import MovingOnComponent from '../components/mission/MovingOn.vue';
import MissionPreviewComponent from '../components/dashboard/MissionPreview.vue';
import LayoutComponent from '../components/layouts/ApplicationLayout.vue';

Vue.use(VueRouter);

const routes = config.get('routes');

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
            name: 'home',
            beforeEnter(to, from, next) {
                const routes = config.get('routes');
                switch (store.state.user.state) {
                    case UserState.ARRIVING:
                        next({name: routes.arriving});
                        break;

                    case UserState.AT_WORK:
                        next({name: routes.atWork});
                        break;

                    case UserState.MOVING_ON:
                        next({name: routes.movingOn});
                        break;

                    default:
                        next({name: routes.ready});
                        break;
                }
            }
        },
        {
            path: '/missions',
            component: LayoutComponent,
            meta: {
                requireState: [UserState.READY, UserState.MISSION_RECEIVED]
            },
            children: [
                {
                    path: '',
                    name: routes.ready,
                    component: MissionsComponent
                },
                {
                    path: '/mission-preview',
                    name: 'preview',
                    component: MissionPreviewComponent
                }
            ]
        },
        {
            path: '/mission',
            component: LayoutComponent,
            children: events.emit('mission-routes', [
                {
                    path: routes.arriving,
                    name: routes.arriving,
                    component: ArrivingComponent,
                    meta: {
                        requireState: UserState.ARRIVING
                    }
                },
                {
                    path: routes.atWork,
                    name: routes.atWork,
                    component: AtWorkComponent,
                    meta: {
                        requireState: UserState.AT_WORK
                    }
                },
                {
                    path: routes.movingOn,
                    name: routes.movingOn,
                    component: MovingOnComponent,
                    meta: {
                        requireState: UserState.MOVING_ON
                    }
                }
            ])
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.name === 'auth') {
        return next();
    }

    if (!store.getters['user/isAuthenticated']) {
        return next({name: 'auth'});
    }

    if (!Utils.checkStatePrecondition(to, store.state.user.state)) {
        return next({name: 'home'});
    }

    return next();
});

console.log(router);

export default router;
