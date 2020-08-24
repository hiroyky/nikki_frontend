<template>
  <nuxt-link v-if="to" class="pagination-next" @click="onClick" :to="to">
    <slot>次のページ</slot>
    <b-icon icon="arrow-right" />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Emit } from 'vue-property-decorator'
import { RawLocation } from 'vue-router'

  @Component({
  })
export default class extends Vue {
  @Prop()
  to?: RawLocation

  @Emit('click')
  onClick () {
  }
}
</script>
