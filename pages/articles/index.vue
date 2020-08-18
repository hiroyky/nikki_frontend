<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

  @Component({
    middleware: 'redirect-home'
  })
export default class extends Vue {

}
</script>
