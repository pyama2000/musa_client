<template>
  <div class="home"></div>
</template>

<script>
export default {
  middleware({ redirect, query, $axios }) {
    const code = query.code
    if (code) {
      $axios.post('/auth', { code })
    }

    redirect('/home')
  }
}
</script>
