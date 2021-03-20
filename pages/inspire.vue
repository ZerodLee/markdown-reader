<template>
  <!-- <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row> -->
  <div>
    <!-- <nuxt-content :document="page" /> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const page = await $content('eh-form').fetch()
    console.log(page)
    return {
      page,
    }
  },
  data() {
    return {}
  },
})
</script>