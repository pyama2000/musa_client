<template>
  <div v-if="object !== null" class="player">
    <div class="player__image">
      <img :src="object.track.image" alt="Album image" />
    </div>
    <div class="player__track-name">
      {{ object.track.name }}
    </div>
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

<style lang="scss" scoped>
.player {
  display: grid;
  height: 40%;
  grid-template-columns: 40% 1fr;
  align-items: center;
  padding: 16px 8px;
  background: #eef0f4;

  &__image {
    display: flex;
    width: 120px;
    height: 120px;
    background: #eef0f4;
    border-radius: 15%;
    box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;

    & > img {
      width: 80%;
      height: 80%;
      margin: auto;
    }
  }
}
</style>
