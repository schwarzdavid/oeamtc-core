<template>
	<v-content class="withBg">

		<!-- CENTERED CARD -->
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 class="withMaxWidth">
					<v-card class="elevation-5">
						<v-card-text class="text-xs-center">

							<!-- CARD CONTENT -->
							<v-form v-model="formValid" @submit.prevent="onSubmit">
								<v-container>

									<h1 class="my-3">Anmeldedaten überprüfen</h1>

									<v-layout row wrap>

										<!-- USERNAME -->
										<v-flex xs12 sm6>
											<v-text-field name="username" label="Username" type="text"
											              v-model="user.username"
											              autocomplete="username">
											</v-text-field>
										</v-flex>
										<!-- / USERNAME -->

										<!-- FUNKNUMMER -->
										<v-flex xs12 sm6>
											<v-text-field name="radionumber" label="Funknummer" type="text"
											              v-model="user.radionumber"></v-text-field>
										</v-flex>
										<!-- / FUNKNUMMER -->

										<!-- SERVICESTELLE -->
										<v-flex xs12 sm6>
											<v-layout row>

												<v-flex xs4>
													<v-text-field name="servicecenter-id"
													              v-model="user.servicecenter.id"
													              :disabled="true" label="Servicestelle"></v-text-field>
												</v-flex>

												<v-flex xs8>
													<v-text-field name="servicecenter-name" class="ml-3"
													              v-model="user.servicecenter.name"
													              :disabled="true"></v-text-field>
												</v-flex>
											</v-layout>
										</v-flex>
										<!-- / SERVICESTELLE -->

										<!-- UHRZEIT -->
										<v-flex xs12 sm6>
											<v-dialog ref="dialog" v-model="timeModal" :return-value.sync="user.time"
											          presistent
											          lazy full-width width="290px">

												<v-text-field slot="activator" v-model="user.time" label="Uhrzeit"
												              readonly></v-text-field>

												<v-time-picker v-if="timeModal" v-model="user.time" full-width
												               format="24hr">
													<v-spacer></v-spacer>
													<v-btn flat color="primary" @click.prevent="timeModal=false">
														Abbrechen
													</v-btn>
													<v-btn flat color="primary"
													       @click.prevent="$refs.dialog.save(user.time)">OK
													</v-btn>
												</v-time-picker>

											</v-dialog>
										</v-flex>
										<!-- / UHRZEIT -->

										<!-- GRUND -->
										<v-flex>
											<v-select :items="['Geplanter Dienstbeginn', 'Testgrund', 'Kollege muss Rausch ausschlafen']"
											          label="Grund"
											          v-model="user.reason"></v-select>
										</v-flex>
										<!-- / GRUND -->

										<!-- SUBMIT -->
										<v-flex>
											<v-btn type="submit" :diabled="!formValid" color="primary">Anmelden</v-btn>
										</v-flex>
										<!-- / SUBMIT -->

									</v-layout>
								</v-container>
							</v-form>
							<!-- / CARD CONTENT -->

						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		<!-- / CENTERED CARD -->

	</v-content>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {IUserRequest} from "../../store/user/types";

    export default Vue.extend({
        created() {
            this.$onSocket('open', () => {
                this.socketOpen = true;
            });
        },

        data() {
            return {
                user: {
                    username: '012345',
                    servicecenter: {
                        id: 1234,
                        name: 'Zentrale Erdberg'
                    },
                    time: new Date().toTimeString().substr(0, 5).toString(),
                    radionumber: 123456,
                    reason: 'Geplanter Dienstbeginn'
                } as IUserRequest,
                timeModal: false,
				formValid: false
            }
        },

		methods: {
            async onSubmit(){
                await this.$store.dispatch('user/login', this.user);
                this.$router.push('/');
			}
		}
    });
</script>

<style lang="scss" scoped>
	.withBg {
		background: url('./../../assets/start-background.jpg') no-repeat center center;
		background-size: cover;
	}

	.withMaxWidth {
		max-width: 650px !important;
	}
</style>
