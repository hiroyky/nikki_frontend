<template>
  <section class="section">
    <div v-if="articles">
      <div v-for="item in articles.nodes" :key="item.id">
        <n-article :article="item" />
      </div>

      <pagination
        :has-previous-page="articles.pageInfo.hasPreviousPage"
        :has-next-page="articles.pageInfo.hasNextPage"
        @previous-click="onPreviousClick"
        @next-click="onNextClick"
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

@Component({
  components: {
    NArticle,
    Pagination
  },
  apollo: {
    articles: {
      query: ArticlesGql,
      variables: { limit: 100, offset: 0 }
    }
  }
})
export default class extends Vue {
  onPreviousClick () {
    console.log('on previous')
  }

  onNextClick () {
    console.log('on next')
  }
}
</script>
