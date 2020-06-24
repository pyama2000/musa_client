<template>
  <div class="header">
    <v-app-bar color="teal accent-4" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />

      <v-toolbar-title>Musa</v-toolbar-title>

      <v-spacer />

      <v-btn icon to="search" nuxt>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group v-model="item">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="`${item.title}`"
            flat
          >
            <v-list-item-icon><v-icon v-text="item.icon"/></v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    item: 0,
    items: [
      { title: 'playlists', icon: 'mdi-playlist-music' },
      { title: 'search', icon: 'mdi-magnify' }
    ]
  }),

  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
