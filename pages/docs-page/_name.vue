<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { menusMap } from '@/config/static'
export default Vue.extend({
  async asyncData({ $content, params }) {
    const page = await $content(params.name).fetch()
    // console.log('doc-page', page)
    // debugger;
    return {
      page,
    }
  },
  validate({ params }) {
    // console.log(this, menusMap)
    return !!menusMap[params.name]
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route.name, this.$route.params.name)
  },
})
</script>