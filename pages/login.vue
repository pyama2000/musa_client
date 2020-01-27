<template>
  <div class="login">
    <div class="login__header">
      <logo />
      <span class="login__title">Musa</span>
    </div>
    <span class="login__description">
      Musa is user friendly interface for playing music
    </span>
    <v-btn
      class="login__button"
      color="teal accent-4"
      :href="`${loginUrl}`"
      text
    >
      LOG IN WITH SPOTIFY
    </v-btn>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'login',
  components: {
    Logo
  },
  data: () => ({
    loginUrl: null
  }),
  async created() {
    const { data } = await this.$axios.get('/auth')

    this.loginUrl = data
  }
}
</script>

<style lang="sass">
.logo
  margin-right: 16px

.login
  margin: auto !important
  display: flex
  flex-direction: column
  max-width: 400px
  color: #ffffff
  &__header
    padding: 16px
    display: flex
    align-items: center
    flex-wrap: wrap
    font-size: 1.25rem
    font-weight: 500
    letter-spacing: 0.0125em
    line-height: 2rem
    word-break: break-all
  &__title
    font-size: 2rem
  &__description
    margin-bottom: 16px
    padding: 0 16px
    width: 100%
    color: rgba(255, 255, 255, 0.7)
    font-weight: 300
    font-size: 1.5rem
    line-height: 2rem
    letter-spacing: normal
  &__button
    margin: auto
</style>
