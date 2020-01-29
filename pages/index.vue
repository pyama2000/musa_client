<template>
  <div></div>
</template>

<script>
export default {
  middleware({ redirect, store }) {
    if (!store.getters['login/isSignedIn']) {
      return redirect('/login')
    }
  }
  // middleware: 'authenticated'
}
</script>
