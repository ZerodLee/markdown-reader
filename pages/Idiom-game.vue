<template>
  <div>
    <!-- <v-dialog class="s" persistent v-model="startDialog">
      <v-card>
        <v-toolbar color="primary" dark>Opening from the bottom</v-toolbar>
        <v-btn>由我起头</v-btn>
        <v-btn>随机开始</v-btn>
        <v-card-actions class="justify-end">
          <v-btn color="green darken-1" text @click="dialog.value = false"
            >取消</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog> -->
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta/types'

export default Vue.extend({
  async asyncData({ $content }) {
    const page = await $content('example').fetch()
    console.log(page)
    console.log(process, process.server)
    // ;(params.app.head as MetaInfo).title = '123'
    return { title: process.title, page }
  },
  data() {
    return {
      startDialog: true,
    }
  },
})
</script>
