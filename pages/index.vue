<template>
  <div class="index">
    <v-card class="mx-auto index__card">
      <v-card-title>
        <logo />
      </v-card-title>

      <v-card-text class="headline font-weight-light">
        Musa is user friendly interface for playing music with Spotify
      </v-card-text>

      <v-card-actions>
        <v-btn
          v-if="isSignedIn"
          class="index__card__btn"
          color="teal accent-4"
          text
          nuxt
          to="/home"
        >
          HOME
        </v-btn>
        <v-btn
          v-else
          class="index__card__btn"
          color="teal accent-4"
          text
          @click.native="signIn"
        >
          LOGIN WITH SPOTIFY
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layouts: 'empty',
  components: {
    Logo
  },
  data() {
    return {
      isSignedIn: false
    }
  },
  methods: {
    signIn() {
      this.$axios.get('/auth').then((response) => {
        this.$store.commit('login/setAuthState', response.data.state)

        window.open(response.data.url)

        this.isSignedIn = true
      })
    }
  }
}
</script>

<style lang="sass">
.index
  margin: auto
  &__card
    max-width: 90%
    &__btn
      margin-left: auto

.logo
  margin: 16px 16px 16px 0
</style>
