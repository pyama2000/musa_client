<template>
  <div v-if="object !== null" class="player">
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
