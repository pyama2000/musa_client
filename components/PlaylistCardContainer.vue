<template>
  <dent-card class="playlist-card-container">
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
  </dent-card>
</template>

<script>
export default {
  components: {
    DentCard: () => import('~/components/base/DentCard'),
    PlaylistCard: () => import('~/components/playlist/PlaylistCard')
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
  margin: 0 16px;
  padding: 12px 0;

  &__title {
    padding: 0 16px;
    color: #50545c;
    font-size: larger;
    font-weight: bold;
  }

  &__list {
    display: flex;
    padding: 12px 16px;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;

    & > * {
      margin-left: 12px;
    }

    & > *:first-child {
      margin-left: 0;
    }

    & > *:last-child {
      position: relative;
    }

    & > *:last-child:after {
      position: absolute;
      top: 0;
      left: 100%;
      width: 16px;
      height: 1px;
      content: '';
    }
  }
}
</style>
