<template>
  <section class="section">
    <n-article :article="article" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ArticleGql from '~/gql/Article.gql'
import NArticle from '~/components/organisms/NArticle.vue'

@Component({
  components: { NArticle },
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
  private get id () {
    return this.$route.params.id
  }
}
</script>
