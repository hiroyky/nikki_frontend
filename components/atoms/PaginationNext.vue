<template>
  <span class="pagination-next" @click="onClick"><slot>次のページ</slot></span>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Emit } from 'vue-property-decorator'

  @Component({
  })
export default class extends Vue {
  @Emit('click')
  onClick () {
  }
}
</script>
