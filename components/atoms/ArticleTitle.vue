<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class extends Vue {

}
</script>
