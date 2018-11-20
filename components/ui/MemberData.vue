<template>
	<v-card>
		<v-card-text>
			<v-layout row align-start justify-space-between wrap>

				<!-- MG TYPE -->
				<v-flex xs12 class="px-2">
					<v-layout align-center justify-center>
						<div>
							<v-radio-group v-model="customer.type" disabled row>
								<v-radio label="Mitglied" value="Club"></v-radio>
								<v-radio label="AIT" value="AIT"></v-radio>
								<v-radio label="Night MG" value="none"></v-radio>
							</v-radio-group>
						</div>
					</v-layout>
				</v-flex>
				<!-- / MG TYPE -->

				<!-- CK NUMBER -->
				<v-flex xs12 sm6 class="px-2">
					<v-text-field v-model="customer.id" prepend-icon="mdi-account-card-details"
					              label="CK-Nummer" color="info"></v-text-field>
				</v-flex>
				<!-- / CK NUMBER -->

				<!-- SUCH KFZ -->
				<v-flex xs12 sm6 class="px-2">
					<v-text-field prepend-icon="mdi-car" label="Such KFZ" color="info"></v-text-field>
				</v-flex>
				<!-- / SUCH KFZ -->

				<!-- FIRST NAME -->
				<v-flex xs12 sm6 class="px-2">
					<v-text-field prepend-icon="mdi-account" v-model="customer.firstName" label="Vorname"
					              color="info"></v-text-field>
				</v-flex>
				<!-- / FIRST NAME -->

				<!-- LAST NAME -->
				<v-flex xs12 sm6 class="px-2">
					<v-text-field prepend-icon="mdi-account" v-model="customer.lastName" label="Nachname"
					              color="info"></v-text-field>
				</v-flex>
				<!-- / LAST NAME -->

				<!-- GENDER -->
				<v-flex xs12 sm6 class="px-2">
					<v-select v-model="customer.gender"
					          :items="[{value:'m',text:'Männlich'},{value:'w',text:'Weiblich'}]" label="Geschlecht"
					          color="info" prepend-icon="mdi-gender-male-female"></v-select>
				</v-flex>
				<!-- / GENDER -->

				<!-- BIRTHDAY -->
				<v-flex xs12 sm6 class="px-2">
					<v-menu ref="menu" v-model="dateMenu" :return-value.sync="customer.birthday" lazy
					        transition="scale-transition" offset-y full-width min-width="290px">
						<v-text-field slot="activator" v-model="customer.birthday" label="Geburtstag"
						              prepend-icon="mdi-calendar" readonly color="info"></v-text-field>
						<v-date-picker v-model="customer.birthday" no-title scrollable>
							<v-spacer></v-spacer>
							<v-btn flat color="primary" @click="dateMenu = false">Abbrechen</v-btn>
							<v-btn flat color="primary" @click="$refs.menu.save(customer.birthday)">Ok</v-btn>
						</v-date-picker>
					</v-menu>
				</v-flex>
				<!-- / BIRTHDAY -->

				<!-- STREET -->
				<v-flex xs12 class="px-2">
					<v-text-field prepend-icon="mdi-directions" v-model="customer.address.street" label="Straße" color="info"></v-text-field>
				</v-flex>
				<!-- / STREET -->

				<!-- CITY -->
				<v-flex xs12 sm8 class="px-2">
					<v-text-field prepend-icon="mdi-city" v-model="customer.address.city" label="Ort" color="info"></v-text-field>
				</v-flex>
				<!-- / CITY -->

				<!-- ZIP -->
				<v-flex xs12 sm4 class="px-2">
					<v-text-field prepend-icon="mdi-city" v-model="customer.address.code" label="Plz" color="info"></v-text-field>
				</v-flex>
				<!-- / ZIP -->

			</v-layout>
		</v-card-text>
	</v-card>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        props: ['customer']
    });
</script>