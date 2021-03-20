<template>
  <v-treeview
    :active.sync="activeMenu"
    :items="items"
    activatable
    item-key="name"
    open-on-click
    :open="openFolder"
    @update:active="clickItem"
  >
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.icon">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else>
        {{ item.icon }}
      </v-icon>
    </template>
    <template v-ripple v-slot:label="{ item }">{{ item.title }}</template>
  </v-treeview>
</template>

<script lang="ts">
import Vue from 'vue'
import { directoryOfDocs, getFlatMenusMap } from '@/config/static'

let openFolder: Array<string> = []
export default Vue.extend({
  props: {
    // error: {
    //   type: Object,
    //   default: null,
    // },
  },
  data() {
    return {
      items: directoryOfDocs,
      activeMenu: new Array(),
      // flatMenuitems: getFlatMenuitems(directoryOfDocs),
      menuMap: getFlatMenusMap(directoryOfDocs),
      openFolder: new Array(),
    }
  },
  methods: {
    clickItem(e: Array<string>) {
      console.log('click', e, this.activeMenu)
      const [menuName] = e
      const selectedMenu = this.menuMap[menuName]
      if (menuName && selectedMenu) {
        // const checkItem = this.flatMenuitems.find(
        //   (item) => item.name == menuName
        // )
        if (selectedMenu) {
          console.log(selectedMenu.title)
          this.$router.push('/docs-page/' + selectedMenu.name)
        }
      }
    },
    setOpenFolder(menuName: string) {
      if (menuName && this.menuMap[menuName]) {
        this.openFolder = this.menuMap[menuName].path
        this.activeMenu = [menuName]
      }
    },
  },
  created() {
    console.log('this.menuMap', this.menuMap)
    this.setOpenFolder(this.$route.params.name)
  },
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
