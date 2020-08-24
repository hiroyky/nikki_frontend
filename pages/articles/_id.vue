<template>
  <section v-if="article" class="section">
    <n-article :article="article" />
    <pagination
      :previous-page="previousPage"
      :next-page="nextPage"
      :previous-text="previousTitle"
      :next-text="nextTitle"
      @previous-click="onPreviousClick"
      @next-click="onNextClick"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ArticleGql from '~/gql/Article.gql'
import NArticle from '~/components/organisms/NArticle.vue'
import Pagination from '~/components/molecules/Pagination.vue'
import { Article } from '~/@types/'
import { RawLocation } from 'vue-router'

@Component({
  components: {
    NArticle,
    Pagination
  },
  apollo: {
    article: {
      query: ArticleGql,
      variables () {
        return { id: this.id }
      }
    }
  }
})
export default class extends Vue {
  private article?: Article

  private get id () {
    return this.$route.params.id
  }

  private get previousTitle (): string {
    if (!this.article || !this.article.previousArticle) {
      return ''
    }
    return this.article.previousArticle.title
  }

  private get previousPage(): RawLocation | null {
    if (!this.article || !this.article.previousArticle) {
      return null
    }
    return `/articles/${this.article.previousArticle.id}`
  }

  private get nextTitle (): string {
    if (!this.article || !this.article.nextArticle) {
      return ''
    }
    return this.article.nextArticle.title
  }

  private get nextPage(): RawLocation | null {
    if (!this.article || !this.article.nextArticle) {
      return null
    }
    return `/articles/${this.article.nextArticle.id}`
  }

  onPreviousClick () {
    if (!this.article || !this.article.previousArticle) {
      return
    }

    this.$router.push(`/articles/${this.article.previousArticle.id}`)
  }

  onNextClick () {
    if (!this.article || !this.article.nextArticle) {
      return
    }

    this.$router.push(`/articles/${this.article.nextArticle.id}`)
  }
}
</script>
