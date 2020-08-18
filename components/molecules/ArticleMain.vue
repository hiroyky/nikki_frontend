<template>
  <div class="container">
    <div class="box">
      <article-title>
        <nuxt-link :to="articleLink">
          <slot name="title" />
        </nuxt-link>
      </article-title>
      <article-datetime>更新日時: <slot name="updatedAt" /></article-datetime>
      <article-body><slot name="body" /></article-body>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import ArticleTitle from '~/components/atoms/ArticleTitle.vue'
import ArticleDatetime from '~/components/atoms/ArticleDatetime.vue'
import ArticleBody from '~/components/atoms/ArticleBody.vue'
import ArticleImage from '~/components/atoms/ArticleImage.vue'

@Component({
  components: {
    ArticleTitle,
    ArticleDatetime,
    ArticleBody,
    ArticleImage
  }
})
export default class extends Vue {
  @Prop()
  articleId !: string

  private get articleLink (): string {
    return `/articles/${this.articleId}`
  }
}
</script>
