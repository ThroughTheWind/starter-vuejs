<template>
	<v-container fluid fill-height>
    <v-layout column align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card id="signin-card">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Log in</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field name="login" label="E-mail" type="text"></v-text-field>
              <v-text-field id="password" name="password" label="Password" type="password"></v-text-field>
              <a href="lost-password">Lost password ?</a>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn href="sign-up" outline color="accent">No account ?</v-btn>
            <v-btn color="primary">Login</v-btn>
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
  export default class SignInPage extends Vue {
    constructor() {
      super();
    }
  }

</script>

<style scoped>
  #signin-card{
    min-width: 500px;
  }
</style>