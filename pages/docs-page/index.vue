<template>
  <div>
    123
    <!-- <nuxt-content :document="page" /> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //   async asyncData({ $content }) {
  //     const page = await $content('eh-form').fetch()
  //     console.log(page)
  //     return {
  //       page,
  //     }
  //   },
  data() {
    return {}
  },
  watch: {
    '$route.name': {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
      },
    },
  },
})
</script>