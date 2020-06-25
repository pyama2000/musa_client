<template>
  <div class="player">
    <div>{{ object.track.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    object: {
      type: Object,
      require: null,
      default: null
    }
  }
}
</script>
