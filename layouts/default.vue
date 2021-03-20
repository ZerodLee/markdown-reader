<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      :right="right"
      app
    >
      <TreeMenu />
      <!-- <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <v-app-bar :dark="true" color="#3f7cf8" :clipped-left="clipped" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
      <v-toolbar-title dark v-text="title" />
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link @click.native="right = !right">
            <v-list-item-icon>
              <v-icon>mdi-menu</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>切换目录位置</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container style="height: 100%">
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
// import ehButton from '~/components/eh/ehButton.vue'
// import TreeMenu from '@/components/tree-menu.vue'

export default Vue.extend({
  // components: { ehButton },
  // components: { TreeMenu },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: '文档系统',
    }
  },
  // created() {
  //   console.log('create', this)
  // },
})
</script>
