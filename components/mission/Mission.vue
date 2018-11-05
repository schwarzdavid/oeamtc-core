<template>
	<div style="height:100%">

		<application-wrapper>
			<template slot="navigationDrawer">
				<v-list>

					<!-- SERVICES -->
					<navigation-drawer-services></navigation-drawer-services>
					<!-- / SERVICES -->

					<!-- MEMBER DATA -->
					<v-list-tile>
						<v-list-tile-action>
							<v-icon>mdi-account-card-details</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>MG-Daten</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<!-- / MEMBER DATA -->

					<!-- ADDITIONAL INFORMATIONS -->
					<v-list-group>

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
    import NavigationDrawerServices from '../partials/NavigationDrawerServices.vue';

    export default Vue.extend({
        components: {
            ApplicationWrapper,
            NavigationDrawerServices
        },

        data() {
            return {

            };
        }
    });
</script>
