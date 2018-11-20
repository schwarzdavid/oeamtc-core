<template>
	<div>

		<!-- HEADING -->
		<v-layout row align-center justify-space-between wrap>

			<h1>Auftragsabschluss</h1>
			<v-spacer></v-spacer>

			<!-- BACK -->
			<v-dialog v-model="backDialog" presistent max-width="290">
				<v-btn color="red" dark slot="activator">Zurück</v-btn>
				<v-card>
					<v-card-title class="headline">Sind Sie sicher?</v-card-title>
					<v-card-text>Wenn Sie jetzt zurück gehen, verlieren Sie Ihre eingegebenen Daten. Möchten Sie dennoch zurück?</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="warning" flat @click="back()">Ja</v-btn>
						<v-btn color="success" @click="backDialog = false">Nein</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<!-- / BACK -->

		</v-layout>
		<!-- / HEADING -->

		<!-- STEPPER -->
		<v-stepper v-model="step" class="mt-4" vertical>

			<!-- MG DATEN -->
			<v-stepper-step :complete="step > 1" step="1">MG Daten</v-stepper-step>
			<v-stepper-content step="1">
				<div class="text-xs-center">
					<span>Bitte zur Identifizierung Clubkarte einstecken oder Daten eingeben:</span>
				</div>
				<member-data :customer="mission.customer" style="box-shadow:none !important;"></member-data>
				<v-btn color="success" @click="step=2">Weiter</v-btn>
			</v-stepper-content>
			<!-- / MG DATEN -->

			<!-- MISSION RESULT -->
			<v-stepper-step :complete="step > 2" step="2">Fault-Codes</v-stepper-step>
			<v-stepper-content step="2">
				<fault-codes style="box-shadow:none !important;"></fault-codes>
				<v-btn color="success" @click="step=3">Weiter</v-btn>
			</v-stepper-content>
			<!-- / MISSION RESULT -->

			<!-- AD DATEN -->
			<v-stepper-step :complete="step > 3" step="3" v-if="mission.type === 'AD'">Abschleppdaten</v-stepper-step>
			<v-stepper-content step="3" v-if="mission.type === 'AD'">
				<ad-data :mission="mission" style="box-shadow: none !important;"></ad-data>
				<v-btn color="success" @click="step=4">Weiter</v-btn>
			</v-stepper-content>
			<!-- / AD DATEN -->

			<!-- BILLING -->
			<v-stepper-step :complete="step > registerStep" :step="registerStep">Kassa</v-stepper-step>
			<v-stepper-content :step="registerStep">
				<v-btn color="primary" style="color:rgba(0,0,0,.87);" @click="openRegister()">Rechnung erstellen</v-btn>
			</v-stepper-content>
			<!-- / BILLING -->

		</v-stepper>
		<!-- / STEPPER -->

		<!-- ERROR SNACK -->
		<v-snackbar v-model="errorSnack" bottom right>
			<span>Ein Unbekannter Fehler ist aufgetreten</span>
			<v-btn color="primary" flat @click.prevent="errorSnack = false">Schließen</v-btn>
		</v-snackbar>
		<!-- / ERROR SNACK -->

	</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import MemberData from '../../components/ui/MemberData.vue';
    import FaultCodes from '../../components/ui/FaultCodes.vue';
    import AdData from '../../components/ui/AdData.vue';
    import {events} from "../../lib/Utils";
    import {UserState} from "../../store/user/types";

    export default Vue.extend({
        components: {
            MemberData,
            FaultCodes,
            AdData
        },

        computed: {
            mission() {
                return this.$store.state.missions.assignedMission;
            }
        },

        created() {
            if (this.mission.type === 'AD') {
                this.registerStep = 4;
            }

            events.on('register-finished', () => {
                this.finish();
            });
        },

        data() {
            return {
                step: 1,
                registerStep: 3,
                errorSnack: false,
                backDialog: false
            };
        },

        methods: {
            openRegister() {
                events.emit('register-open');
            },

            async finish() {
                try {
                    if (this.mission.type === 'AD' && this.$store.state.user.state === UserState.AT_WORK) {
                        this.$store.commit('missions/setMissionResult');
                        await this.$store.dispatch('missions/movingOn');
                        this.$router.push({name: 'home'});
                    } else {
                        await this.$store.dispatch('missions/finish');
                    }
                } catch (err) {
                    console.log(err);
                    this.errorSnack = true;
                }
            },

	        back(){
		        this.$router.go(-1);
	        }
        }
    });
</script>