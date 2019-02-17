<template>
	<v-container fluid fill-height>
    <v-layout column align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card id="signup-card">        
          <v-toolbar dark color="primary">
            <v-toolbar-title>Create new account</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field name="login" v-model="email" label="E-mail" type="email"></v-text-field>
              <v-text-field id="password" v-model="password" name="password" label="Password" type="password"></v-text-field>
              <v-text-field id="password" v-model="confirmPassword" name="password" label="Confirm password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
                <!--
          <v-stepper v-model="stepper">
            <v-stepper-header>
              <v-stepper-step :complete="stepper > 1" step="1">Account infos</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="stepper > 2" step="2">User infos</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">Additional infos</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card-text>
                  <v-form>
                    <v-text-field name="login" v-model="email" label="E-mail" type="text"></v-text-field>
                    <v-text-field id="password" v-model="password" name="password" label="Password" type="password"></v-text-field>
                    <v-text-field id="password" v-model="confirmPassword" name="password" label="Confirm password" type="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-btn
                  color="primary"
                  @click="stepper = 2"
                >
                  Continue
                </v-btn>

                <v-btn flat href="home">Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card
                  class="mb-5"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn
                  color="primary"
                  @click="e1 = 3"
                >
                  Continue
                </v-btn>

                <v-btn flat @click="stepper = 1">Return</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  class="mb-5"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn
                  color="primary"
                  @click="e1 = 1"
                >
                  Continue
                </v-btn>

                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>-->
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn href="sign-in" color="accent" outline>Already has an account ?</v-btn>
            <v-btn href="home" color="primary" :disabled="true">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex> 
      
    </v-layout>

	</v-container>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default class SignUpPage extends Vue {
    public email: string = '';
    public password: string = '';
    public confirmPassword: string = '';
    public stepper: number = 1;
    constructor() {
      super();
    }
  }

</script>

<style scoped>
  #signup-card{
    min-width: 500px;
  }
</style>