<template>
	<div style="height:100%">

		<application-wrapper>
			<template slot="navigationDrawer">
				<v-list>

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
					<v-list-tile>
						<v-list-tile-action>
							<v-icon>mdi-sitemap</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>Meldungen</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / MISSIONS -->

					<!-- STATUS -->
					<v-list-group>

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

					<!-- XS ONLY -->
					<div class="hidden-sm-and-up">

						<v-divider></v-divider>

						<!-- CALL DESIRE -->
						<v-list-tile>
							<v-list-tile-action>
								<v-icon>mdi-phone</v-icon>
							</v-list-tile-action>

							<v-list-tile-content>
								<v-list-tile-title>Sprachwunsch</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
						<!-- / CALL DESIRE -->

					</div>
					<!-- / XS ONLY -->

					<v-divider></v-divider>

				</v-list>
			</template>
		</application-wrapper>

		<!-- CONTENT -->
		<v-content style="height:inherit;">
			<router-view></router-view>
		</v-content>
		<!-- / CONTENT -->

	</div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ApplicationWrapper from '../partials/ApplicationWrapper.vue';

    export default Vue.extend({
	    components: {
            ApplicationWrapper
        },

        data() {
            return {

            };
        },

        destroyed() {
            this.$emitSocket('unregister');
        }
    });
</script>
