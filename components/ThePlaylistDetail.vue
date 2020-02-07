<template>
  <div class="component-playlist-detail">
    <img :src="imageUrl" />
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      required: true
    }
  }
}
</script>
