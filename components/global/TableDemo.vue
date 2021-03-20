<template>
  <div>
    <v-data-table
      :headers="grid.headers"
      :items="grid.desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    grid: {
      type: Object,
      default() {
        return {
          headers: [],
          desserts: [],
        }
      },
    },
    test: {
      default: () => ({}),
    },
  },
  data() {
    return {}
  },
  created() {
    console.log('table', this.test, this.grid)
  },
})
</script>
