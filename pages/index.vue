<template>
  <section class="section">
    <div v-if="articles">
      <div v-for="item in articles.nodes" :key="item.id">
        <n-article :article="item" />
      </div>

      <pagination
      :next-page="nextPage"
      :previous-page="previousPage"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ArticlesGql from '~/gql/articles.gql'
import NArticle from '~/components/organisms/NArticle.vue'
import Pagination from '~/components/molecules/Pagination.vue'
import { RawLocation } from 'vue-router'
import { Articles } from '~/@types'

@Component({
  components: {
    NArticle,
    Pagination
  },
  apollo: {
    articles: {
      query: ArticlesGql,
      variables() {
        return { limit: this.limit, offset: (this.page - 1 ) * this.limit }
      }
    }
  }
})
export default class extends Vue {
  private articles?: Articles

  get nextPage(): RawLocation | null {
    if (this.$apollo.loading || !this.articles) {
      return null
    }
    return this.articles.pageInfo.hasNextPage ? `/?page=${this.articles.pageInfo.page + 1}` : null
  }

  get previousPage(): RawLocation | null {
    if (this.$apollo.loading || !this.articles) {
      return null
    }

    return this.articles.pageInfo.hasPreviousPage ? `/?page=${this.articles.pageInfo.page - 1}` : null
  }

  get limit(): number {
    return 10
  }

  get page(): number {
    const pageStr = this.$route.query['page']
    if(!pageStr || typeof pageStr !== 'string') {
      return 1
    }
    const page = Number.parseInt(pageStr)
    if(isNaN(page) || page <= 0) {
      return 1
    }
    return page
  }
}
</script>
