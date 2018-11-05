<template>

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

</template>