<template>
  <v-app dark>
    <the-header />
    <nuxt class="nuxt__pages" />
  </v-app>
</template>

<script>
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="sass">
.nuxt__pages
  padding: 16px
</style>
