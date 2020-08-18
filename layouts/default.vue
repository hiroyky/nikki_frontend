<template>
  <div>
    <site-header />
    <site-navigation />

    <nuxt />

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
