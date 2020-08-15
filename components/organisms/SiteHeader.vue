<template>
  <header class="section">
    <div class="container">
      <site-title>よこやまの日記</site-title>
      <p class="subtitle">
        つれづれなるままに
      </p>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SiteTitle from '~/components/atoms/SiteTitle.vue'
import SiteSubTitle from '~/components/atoms/SiteSubTitle.vue'

  @Component({
    components: {
      SiteTitle,
      SiteSubTitle
    }
  })
export default class extends Vue {
}
</script>
