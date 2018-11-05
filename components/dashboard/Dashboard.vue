<template>
	<div style="height:100%">

		<application-wrapper>
			<template slot="navigationDrawer">
				<v-list>

					<!-- SERVICES -->
					<navigation-drawer-services></navigation-drawer-services>
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

				</v-list>
			</template>
		</application-wrapper>

		<!-- CONTENT -->
		<v-content style="height:inherit;">
			<v-container>
				<router-view></router-view>
			</v-container>
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
            return {};
        }
    });
</script>
