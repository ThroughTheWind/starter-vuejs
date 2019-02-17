<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify {{appTitle}}</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
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
    public appTitle: string = 'My App';
    constructor() {
      super();
    }

    public mounted() {
      this.appTitle = process.env.VUE_APP_TITLE;
    }
  }
</script>
