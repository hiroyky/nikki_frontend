<template>
  <figure :class="figureStyle" class="article-image article-image--padding">
    <img :src="src" :alt="alt" :class="{ 'is-rounded': !!isRounded }">
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop()
  src?: string

  @Prop()
  alt?: string

  @Prop()
  isRounded?: boolean

  // https://bulma.io/documentation/elements/image/
  @Prop()
  container?: string

  private get figureStyle (): string {
    return this.container ? `image ${this.container}` : 'image'
  }
}
</script>

<style lang="scss">
.article-image {
  &--padding {
    padding: 13px;
  }
}
</style>
