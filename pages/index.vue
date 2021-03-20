<template>
  <v-card class="mx-auto" max-width="500" style="margin-left:0 !important;" tile>
    <v-list flat>
      <v-subheader>目录</v-subheader>
      <v-list-item-group  color="primary">
        <v-list-item v-for="(item, i) in menuItems" :key="i" @click="go(item)">
          <v-list-item-icon>
            <v-icon v-text="item.icon || 'mdi-folder'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { getFlatMenuitems, directoryOfDocs, MenuItem } from '@/config/static'
export default Vue.extend({
  data() {
    return {
      menuItems: getFlatMenuitems(directoryOfDocs),
    }
  },
  methods: {
    go(item: MenuItem) {
      this.$router.push('/docs-page/' + item.name)
    },
  },
  created() {
    // this.$axios.get('muxiaoguo/xiaohua/').then((res) => {
    //   console.log(res)
    // })
  },
})
</script>
