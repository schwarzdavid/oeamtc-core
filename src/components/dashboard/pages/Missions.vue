<template>
	<v-container>

		<v-layout row align-center justify-space-between>
			<h1>Aufträge</h1>
			<v-spacer></v-spacer>
			<v-btn flat @click="reloadingMissions = (reloadingMissions ? false : 'info')">
				<v-icon>mdi-reload</v-icon>
				<span class="pl-2">Neu laden</span>
			</v-btn>
		</v-layout>

		<!-- CURRENT MISSIONS -->
		<v-card class="mt-4">
			<v-card-text>
				<v-data-table disable-initial-sort :headers="headers" :items="missions" hide-actions :loading="reloadingMissions">
					<template slot="items" slot-scope="props">
						<td>{{props.item.id}}</td>
						<td>{{props.item.at}}</td>
						<td>{{props.item.place}}</td>
						<td class="text-xs-right">{{props.item.car}}</td>
					</template>
				</v-data-table>
			</v-card-text>
		</v-card>
		<!-- / CURRENT MISSIONS -->

	</v-container>
</template>

<script type="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                reloadingMissions: false,
                missions: [
	                {
	                    id: 1,
		                at: 'W',
		                place: 'Wien Landstraße Baumgasse 12',
		                car: 'VW Touran'
	                },
                    {
                        id: 2,
                        at: 'W',
                        place: 'Wien Landstraße Baumgasse 12',
                        car: 'BMW 3er'
                    }
                ],
	            headers: [
		            {
		                text: 'Nr.',
			            align: 'left',
			            sortable: false
		            },
		            {
		                text: 'AT',
			            align: 'left',
			            sortable: false
		            },
		            {
		                text: 'Ort',
			            align: 'left',
			            sortable: false
		            },
		            {
		                text: 'Kfz',
			            align: 'right',
			            sortable: false
		            }
	            ]
            };
        }
    });
</script>