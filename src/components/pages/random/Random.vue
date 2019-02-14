<template>
    <div>
        <h1>Random component {{randomProperty}}</h1>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        name: 'random',
        components: {},
    })
    export default class Random extends Vue {
        public randomProperty: string = 'UUUUUU';
        constructor() {
            super();
        }
        public randomMethod(): string { return ''; }
        public get randomComputedMethod(): string { return 'Bref'; }
    }
</script>