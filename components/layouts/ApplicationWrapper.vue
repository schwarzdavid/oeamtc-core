<template>
	<div>

		<!-- SIDE NAVIGATION -->
		<v-navigation-drawer v-model="drawer" app fixed clipped mobile-break-point="1000">
			<v-list>

				<!-- HOME -->
				<v-list-tile :to="{name:'home'}" active-class="">
					<v-list-tile-action>
						<v-icon>mdi-home</v-icon>
					</v-list-tile-action>

					<v-list-tile-content>
						<v-list-tile-title>Hauptseite</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<!-- / HOME -->

				<v-divider></v-divider>

				<!-- SERVICES -->
				<v-list-group>

					<!-- ACTIVATOR -->
					<v-list-tile slot="activator">
						<v-list-tile-action>
							<v-icon>mdi-toolbox-outline</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>Dienste</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / ACTIVATOR -->

					<!-- BILL W/O OPERATION -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Rechnung ohne Einsatz</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / BILL W/O OPERATION -->

					<!-- NEW OPERATION -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Neuen Fall aufnehmen</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / NEW OPERATION -->

					<!-- SYSTEMDIENSTE -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Systemdienste</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / SYSTEMDIENSTE -->

					<!-- REQUEST CURRENT STATE -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Situationsdarstellung anfordern</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / REQUEST CURRENT STATE -->

					<!-- CHANGE USER-DATA W/O OPERATION -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>MG-Daten ändern ohne Einsatz</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / CHANGE USER-DATA W/O OPERATION -->

				</v-list-group>
				<!-- / SERVICES -->

				<!-- MISSIONS -->
				<v-list-tile v-if="!isOnMission">
					<v-list-tile-action>
						<v-icon>mdi-sitemap</v-icon>
					</v-list-tile-action>

					<v-list-tile-content>
						<v-list-tile-title>Meldungen</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<!-- / MISSIONS -->

				<!-- STATUS -->
				<v-list-group v-if="!isOnMission">

					<!-- ACTIVATOR -->
					<v-list-tile slot="activator">
						<v-list-tile-action>
							<v-icon>mdi-developer-board</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>Status</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / ACTIVATOR -->

					<!-- BEGIN WORK -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Dienstbeginn</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / BEGIN WORK -->

					<!-- READY -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Bereit</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / READY -->

					<!-- END WORK -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Dienstende</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / END WORK -->

					<!-- DESIRE EDUCATION -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Wunsch Schulung</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / DESIRE EDUCATION -->

				</v-list-group>
				<!-- / STATUS -->

				<!-- MEMBER DATA -->
				<v-list-tile v-if="isOnMission">
					<v-list-tile-action>
						<v-icon>mdi-account-card-details</v-icon>
					</v-list-tile-action>

					<v-list-tile-content>
						<v-list-tile-title>MG-Daten</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<!-- / MEMBER DATA -->

				<!-- ADDITIONAL INFORMATIONS -->
				<v-list-group v-if="isOnMission">

					<!-- ACTIVATOR -->
					<v-list-tile slot="activator">
						<v-list-tile-action>
							<v-icon>mdi-one-up</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>Zusatzdaten</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / ACTIVATOR -->

					<!-- GENERAL DATA -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Allgemeine Auftragsdaten</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / GENERAL DATA -->

					<!-- GPS DATA -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Standortdaten</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / GPS DATA -->

					<!-- CAR DATA -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Fahrzeugdaten</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / CAR DATA -->

					<!-- ADDITIONAL CAR DATA -->
					<v-list-tile>
						<v-list-tile-action></v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>Weitere Fahrzeugdetails</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / ADDITIONAL CAR DATA -->

				</v-list-group>
				<!-- / ADDITIONAL INFORMATIONS -->

				<!-- CALL DESIRE -->
				<div class="hidden-sm-and-up">
					<v-list-tile>
						<v-list-tile-action>
							<v-icon>mdi-phone</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>Sprachwunsch</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</div>
				<!-- / CALL DESIRE -->

				<v-divider></v-divider>

				<!-- CURRENT USER -->
				<v-list-tile class="mt-2">
					<v-list-tile-content>
						<v-list-tile-title>Aktueller Status: <strong class="text-uppercase">{{state}}</strong>
						</v-list-tile-title>
						<v-list-tile-sub-title>Servicestelle: {{servicecenter}}</v-list-tile-sub-title>
					</v-list-tile-content>
				</v-list-tile>
				<!-- / CURRENT USER -->

			</v-list>
		</v-navigation-drawer>
		<!-- / SIDE NAVIGATION -->

		<!-- TOOLBAR -->
		<v-toolbar app fixed clipped-left color="primary">

			<!-- NAVIGATION TOGGLE BUTTON -->
			<v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
			<!-- / NAVIGATION TOGGLE BUTTON -->

			<!-- TITLE -->
			<span class="title ml3">ÖAMTC Roadpatrol</span>
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
			<span>Hilfe wird eingeleitet</span>
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
            },
	        isOnMission(): boolean {
                return [UserState.READY, UserState.MISSION_RECEIVED].indexOf(this.$store.state.user.state) < 0;
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