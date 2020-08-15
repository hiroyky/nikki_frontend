<template>
  <b-navbar class="container">
    <template slot="start">
      <b-navbar-item href="/">
        ホーム
      </b-navbar-item>
      <b-navbar-item href="https://twitter.com/hiroyky">
        ツイッター
      </b-navbar-item>
      <b-navbar-item href="#">
        インスタグラム
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          このサイトについて
        </b-navbar-item>
        <b-navbar-item href="#">
          問い合わせ
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
})
export default class extends Vue {
}
</script>
