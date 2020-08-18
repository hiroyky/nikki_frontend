<template>
  <span class="pagination-previous" @click="onClick"><slot>前のページ</slot></span>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Emit } from 'vue-property-decorator'

  @Component({
  })
export default class extends Vue {
  @Emit('click')
  onClick () {}
}
</script>
