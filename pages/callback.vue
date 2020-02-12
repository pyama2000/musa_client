<template>
  <div />
</template>

<script>
import axios from 'axios'

export default {
  middleware({ query }) {
    axios.post(
      `http://localhost:8000/callback?code=${query.code}&state=${query.state}`
    )

    if (process.client) {
      window.close()
    }
  }
}
</script>
