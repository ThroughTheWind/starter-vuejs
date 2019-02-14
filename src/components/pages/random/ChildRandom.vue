<template>
    <div>
        <h2>Random child vue {{randomComputedMethod}}</h2>
    </div>
</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        name: 'child-random',
        components: {},
    })
    export default class ChildRandom extends Vue {
        public randomProperty: string = '';
        constructor() {
            super();
        }
        public randomMethod(): string { return ''; }
        public get randomComputedMethod(): string { return 'Bref'; }
    }
</script>