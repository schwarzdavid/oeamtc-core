<template>
	<div>

		<!-- SIDE NAVIGATION -->
		<v-navigation-drawer v-model="drawer" app fixed clipped mobile-break-point="1000">

			<!-- NAVIGATION ITEMS -->
			<slot name="navigationDrawer"></slot>
			<!-- / NAVIGATION ITEMS -->

			<v-list class="hidden-sm-and-up">
				<v-list-tile>
					<v-list-tile-action>
						<v-icon>mdi-phone</v-icon>
					</v-list-tile-action>

					<v-list-tile-content>
						<v-list-tile-title>Sprachwunsch</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
			<!-- / CALL DESIRE -->

			<v-divider></v-divider>

			<!-- CURRENT USER -->
			<v-list>
				<v-list-tile>
					<v-list-content>
						<v-list-tile-title>Aktueller Status: <strong class="text-uppercase">{{state}}</strong>
						</v-list-tile-title>
						<v-list-tile-sub-title>Servicestelle: {{servicecenter}}</v-list-tile-sub-title>
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
			<v-btn color="red" :loading="alertPending" @click="alert()" dark>
				Alarm
			</v-btn>
			<!-- / ALERT -->

			<!-- CALL DESIRE -->
			<v-btn class="hidden-xs-only" :loading="callDesirePending" @click="callDesire()">
				Sprachwunsch
			</v-btn>
			<!-- / CALL DESIRE -->

			<!-- TIME -->
			<span class="subheading pl-3 hidden-xs-only">{{time}}</span>
			<!-- / TIME -->

		</v-toolbar>
		<!-- / TOOLBAR -->

		<v-snackbar v-model="reportError" bottom right>
			<span>Fehler bei Übermittlung der Anfrage</span>
			<v-btn color="primary" flat @click="reportError = false">Schließen</v-btn>
		</v-snackbar>

		<v-snackbar v-model="callDesireSuccess" bottom right>
			<span>Anfrage erfolgreich</span>
			<v-btn color="primary" flat @click="callDesireSuccess = false">Schließen</v-btn>
		</v-snackbar>

		<v-snackbar v-model="alertSuccess" bottom right>
			<span>Hilfe wurde eingeleitet</span>
			<v-btn color="primary" flat @click="alertSuccess = false">Schließen</v-btn>
		</v-snackbar>

	</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {UserState} from '../../store/user/types'

    const translations = {
        READY: 'bereit',
        MISSION_RECEIVED: 'auftrag erhalten',
        ARRIVING: 'in anfahrt',
        AT_WORK: 'in arbeit',
        MOVING_ON: 'in weiterfahrt'
    } as {[key in keyof typeof UserState]: string};

    function getTime(): string {
        return new Date().toTimeString().substr(0, 5);
    }

    export default Vue.extend({
        data() {
            return {
                drawer: null,
                alertPending: false,
                alertSuccess: false,
                callDesirePending: false,
                callDesireSuccess: false,
                reportError: false,
                time: getTime()
            };
        },

        created() {
            setInterval(() => {
                this.time = getTime();
            }, 1000);
        },

        computed: {
            state(): string {
                return translations[UserState[this.$store.state.user.state]];
            },
            servicecenter(): string {
                return `${this.$store.state.user.servicecenter.id} ${this.$store.state.user.servicecenter.name}`;
            }
        },

        methods: {
            async alert() {
                this.alertPending = true;

                try {
                    await this.$api.post('/utility/alert');
                    this.alertSuccess = true;
                } catch (e) {
                    this.reportError = true;
                } finally {
                    this.alertPending = false;
                }
            },

            async callDesire() {
                this.callDesirePending = true;

                try {
                    await this.$api.post('/utility/call-desire');
                    this.callDesireSuccess = true;
                } catch (e) {
                    this.reportError = true;
                } finally {
                    this.callDesirePending = false;
                }
            }
        }
    });
</script>