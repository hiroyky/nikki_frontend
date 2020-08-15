<template>
  <div>
    <site-header />
    <site-navigation />

    <n-article>
      <template v-slot:title>
        タイトル
      </template>
      <template v-slot:updated-at>
        2020年8月15日
      </template>
      <template v-slot:body>
        本文
      </template>
    </n-article>

    <nav class="pagination" role="pagination" aria-label="pagination">
      <div class="container">
        <a class="pagination-previous">前の記事</a>
        <a class="pagination-next">次の記事</a>
      </div>
    </nav>

    <footer class="footer">
      <div class="container">
        (C) Yokoyama
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SiteHeader from '~/components/organisms/SiteHeader.vue'
import SiteNavigation from '~/components/organisms/SiteNavigation.vue'
import NArticle from '~/components/organisms/NArticle.vue'

@Component({
  components: {
    NArticle,
    SiteNavigation,
    SiteHeader
  }
})
export default class extends Vue {
}
</script>

<style lang="scss">
header {
  background-color: $info;
}
</style>
