<template>
  <nuxt-link v-if="to" class="pagination-previous" @click="onClick" :to="to">
    <b-icon icon="arrow-left" />
    <slot>前のページ</slot>
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
  onClick () {}
}
</script>
