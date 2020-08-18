<template>
  <div class="container n-article">
    <article-main :article-id="id">
      <template v-slot:title>
        {{ title }}
      </template>
      <template v-slot:body>
        {{ body }}
      </template>
      <template v-slot:updatedAt>
        {{ updatedAt }}
      </template>
    </article-main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import moment from 'moment-timezone'
import ArticleMain from '~/components/molecules/ArticleMain.vue'
import { Article } from '~/@types'

@Component({
  components: {
    ArticleMain
  }
})
export default class extends Vue {
    @Prop()
    article?: Article

    get id (): string {
      return this.article ? this.article.id : ''
    }

    get title (): string {
      return this.article ? this.article.title : ''
    }

    get body (): string {
      return this.article ? this.article.body : ''
    }

    get updatedAt (): string {
      return this.article ? moment(this.article.updatedAt).format('YYYY年MM月DD日 HH:mm') : ''
    }
}

</script>

<style lang="scss">
.n-article {
  margin-bottom: 35px;
}
</style>
