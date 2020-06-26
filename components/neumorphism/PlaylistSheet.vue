<template>
  <div class="playlist-sheet">
    <img
      :src="playlist.image_url"
      alt="Playlist image"
      class="playlist-sheet__image"
    />
    <div class="playlist-sheet__title">
      <span>{{ playlist.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist-sheet {
  display: flex;
  align-items: center;
  width: 120px;
  height: 40px;
  background: #519d9e;
  border-radius: 5px;

  &__image {
    width: auto;
    height: 90%;
    margin-left: 2px;
    border-radius: 5px;
  }

  &__title {
    width: 100%;
    padding: 0 8px;
    font-size: xx-small;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;

    & > span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
