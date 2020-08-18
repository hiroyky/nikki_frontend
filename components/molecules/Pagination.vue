<template>
  <nav v-if="!hide" class="pagination" role="pagination" aria-label="pagination">
    <div class="container">
      <pagination-previous v-if="hasPreviousPage" @click="onPreviousClick" />
      <pagination-next v-if="hasNextPage" @click="onNextClick" />
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Emit } from 'vue-property-decorator'
import PaginationPrevious from '~/components/atoms/PaginationPrevious.vue'
import PaginationNext from '~/components/atoms/PaginationNext.vue'

  @Component({
    components: {
      PaginationNext,
      PaginationPrevious
    }
  })
export default class extends Vue {
  @Prop()
  hasPreviousPage?: boolean

  @Prop()
  hasNextPage?: boolean

  get hide (): boolean {
    return !this.hasNextPage && !this.hasPreviousPage
  }

  @Emit('previous-click')
  onPreviousClick () {
  }

  @Emit('next-click')
  onNextClick () {
  }
}
</script>
