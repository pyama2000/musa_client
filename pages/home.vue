<template>
  <div class="home"></div>
</template>

<script>
export default {
  middleware({ store }) {
    if (!store.getters['login/authState'] || !store.getters['user/userID']) {
      store.dispatch('user/login')
    }
  }
}
</script>
