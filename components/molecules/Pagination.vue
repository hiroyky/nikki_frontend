<template>
  <nav v-if="!hide" class="pagination" role="pagination" aria-label="pagination">
    <div class="container">
      <pagination-previous :to="previousPage">
        {{ previousText || '前のページ' }}
      </pagination-previous>
      <pagination-next :to="nextPage">
        {{ nextText || '次のページ' }}
      </pagination-next>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Emit } from 'vue-property-decorator'
import PaginationPrevious from '~/components/atoms/PaginationPrevious.vue'
import PaginationNext from '~/components/atoms/PaginationNext.vue'
import { RawLocation } from 'vue-router'

  @Component({
    components: {
      PaginationNext,
      PaginationPrevious
    }
  })
  export default class extends Vue {

  @Prop()
  previousPage?: RawLocation

  @Prop()
  previousText?: string

  @Prop()
  nextPage?: RawLocation

  @Prop()
  nextText?: string

  get hide (): boolean {
    return !this.previousPage && !this.nextPage
  }
}
</script>
