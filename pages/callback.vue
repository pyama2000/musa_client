<template>
  <div />
</template>

<script>
export default {
  middleware({ redirect, store, query }) {
    store.dispatch('login/signIn', query.code)

    redirect('/')
  }
}
</script>
