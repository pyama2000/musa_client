<template>
  <div class="playlist-card-container">
    <div class="playlist-card-container__title">
      <span>{{ title }}</span>
    </div>
    <div class="playlist-card-container__list">
      <playlist-card
        v-for="(playlist, i) in playlists"
        :key="i"
        :playlist="playlist"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    PlaylistCard: () => import('~/components/PlaylistCard')
  },
  props: {
    title: {
      type: String,
      required: true
    },
    playlists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist-card-container {
  display: flex;
  flex-direction: column;

  &__title {
    padding: 0 16px;
    color: #50545c;
    font-size: larger;
    font-weight: bold;
  }

  &__list {
    display: flex;
    padding: 24px 16px;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    & > .playlist-card {
      margin: 0 12px;
    }

    & > .playlist-card:first-child {
      margin-left: 0;
    }

    & > .playlist-card:last-child {
      position: relative;
      margin-right: 0;
    }

    & > .playlist-card:last-child:after {
      position: absolute;
      top: 0;
      left: 100%;
      width: 1.5em;
      height: 1px;
      content: '';
    }
  }
}
</style>
