<template>
	<v-card>
		<v-card-text>
			<v-select v-model="result" label="Ergebnis"
			          :items="['Erfolgreich', 'Provisorisch Erfolgreich', 'UNS', 'Nicht Erfolgreich']"
			          color="info"></v-select>
			<v-select v-model="service" label="Folgeservice" :items="services" color="info"
			          v-if="result === 'Provisorisch Erfolgreich' || result === 'UNS'"></v-select>
		</v-card-text>
	</v-card>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                result: null,
                service: null,
                services: [
                    'UNS Abschleppdienst',
	                'Gewerblichen Abschleppdienst',
	                'Personentransport',
	                'Taxi',
	                'Kurzschleppung Seil',
	                'Clubmobilreservierung'
                ]
            };
        }
    });
</script>