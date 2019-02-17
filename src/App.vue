<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-icon large>mdi-fast-forward</v-icon>
        <span> {{appTitle}},</span>
        <span class="font-weight-light"> BITCH</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>      
      <v-btn
        flat
        href="sign-up"
      >
        <span class="mr-2">Create your account</span> 
      </v-btn>
      <v-btn
        flat
        href="sign-in"
      >
        <span class="mr-2">Log in</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/pages/HelloWorld.vue'; // @ is an alias to /src

  @Component({
    components: {

    },
  })
  export default class App extends Vue {
    public appTitle: string = '';
    constructor() {
      super();
    }

    public mounted() {
      this.appTitle = process.env.VUE_APP_TITLE;
    }
  }
</script>
