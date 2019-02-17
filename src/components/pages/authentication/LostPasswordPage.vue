<template>
	<v-container fluid fill-height>
    <v-layout column align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card id="lostpassword-card">        
          <v-toolbar dark color="primary">
            <v-toolbar-title>Lost password ?</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field name="login" label="E-mail" type="text"></v-text-field>
              <span class="grey--text">An e-mail with a reset link will be sent</span><br/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn href="sign-in" color="primary">Send e-mail</v-btn>
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
  export default class LostPasswordPage extends Vue {
    constructor() {
      super();
    }
  }

</script>

<style scoped>
  #lostpassword-card{
    min-width: 500px;
  }
</style>