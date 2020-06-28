<template>
  <bump-card class="login-card">
    <div class="login-card__header">
      <logo class="login-card__header__logo" />

      <span class="login-card__header__title">
        Musa
      </span>
    </div>

    <span class="login-card__description">
      Musa is user friendly interface for playing music with Spotify
    </span>

    <div class="login-card__actions">
      <bump-card class="login-card__actions__login">
        <a :href="url">login with spotify</a>
      </bump-card>
    </div>
  </bump-card>
</template>

<script>
export default {
  layout: 'login',
  components: {
    BumpCard: () => import('~/components/base/BumpCard.vue'),
    Logo: () => import('~/components/Logo.vue')
  },
  data() {
    return {
      url: null
    }
  },
  async mounted() {
    await this.$axios.get('/auth').then(({ data }) => {
      this.url = data.url
    })
  }
}
</script>

<style lang="scss" scoped>
.login-card {
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-rows: 80px 1fr 1fr;
  grid-template-areas: 'header' 'description' 'action';
  margin: 0 16px;
  padding: 16px;

  &__header {
    grid-area: header;
    display: flex;
    align-items: center;

    &__logo {
      width: 80px;
      height: 80px;
    }

    &__title {
      padding-left: 24px;
      font-size: 2.5em;
    }
  }

  &__description {
    grid-area: description;
    display: flex;
    align-items: center;
    padding: 24px 0;
    font-size: large;
    font-weight: bold;
    letter-spacing: 0.005em;
  }

  &__actions {
    display: flex;
    align-items: center;

    &__login {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      padding: 0 12px;
      font-size: small;
      font-weight: bold;
      text-transform: uppercase;

      &:active {
        box-shadow: $dent-shadow;
      }
    }
  }
}
</style>
