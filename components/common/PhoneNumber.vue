<template>
	<div>
		<v-btn @click="triggerCall()"></v-btn>

		<v-snackbar v-model="callSuccess" bottom right>
			<span>Hilfe wird eingeleitet</span>
			<v-btn color="primary" flat @click="callSuccess = false">Schließen</v-btn>
		</v-snackbar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
    import {events} from "../../lib/Utils";

	export default Vue.extend({
		data(){
		    return {
		        callSuccess: false
		    };
		},

		props: ['tel', 'color'],

        methods: {
            triggerCall(){
                const result = events.emit('trigger-call', this.tel);

                if(result === null){

                }
            }
        }
	});
</script>