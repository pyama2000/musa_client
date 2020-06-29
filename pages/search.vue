<template>
  <div class="search">
    <div class="search__form">
      <dent-card class="search__form__search-box">
        <label for="query" />
        <input
          id="query"
          @keydown.enter="search"
          v-model="searchQuery"
          type="text"
          name="query"
          placeholder="search"
        />
      </dent-card>

      <square-button
        @click.native="search"
        type="submit"
        class="search__form__search-btn"
      >
        <i class="material-icons">search</i>
      </square-button>
    </div>

    <div v-if="result !== null" class="search__result">
      <div class="search__result__title">Track</div>
      <scroll-list class="search__result__list">
        <div
          v-for="(track, i) in result.tracks"
          :key="i"
          class="search__result__list__item"
        >
          <span>{{ track.name }}</span>
        </div>
      </scroll-list>

      <div class="search__result__title">Album</div>
      <scroll-list class="search__result__list">
        <div
          v-for="(album, i) in result.albums"
          :key="i"
          class="search__result__list__item"
        >
          <span>{{ album.name }}</span>
        </div>
      </scroll-list>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    DentCard: () => import('~/components/base/DentCard'),
    ScrollList: () => import('~/components/base/ScrollList'),
    SquareButton: () => import('~/components/base/SquareButton')
  },
  data() {
    return {
      searchQuery: '',
      result: null
    }
  },
  methods: {
    search() {
      this.$axios
        .get('/search', {
          params: {
            query: this.searchQuery
          }
        })
        .then(({ data }) => {
          this.result = data
        })

      this.searchQuery = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 16px;

  &__form {
    width: 100%;
    height: 46px;
    max-width: 420px;
    display: grid;
    grid-template-columns: 1fr 46px;
    gap: 8px;
    margin-bottom: 16px;

    &__search-box {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      & > input {
        width: 100%;
        height: 100%;
        padding: 0 16px;
        font-size: 16px;
      }
    }

    &__search-btn {
      width: 46px;
      height: 46px;
    }
  }

  &__result {
    margin-top: 16px;

    &__title {
      padding-bottom: 16px;
      font-size: large;
      font-weight: bold;
    }

    &__list {
      height: 120px;
      margin-bottom: 32px;

      &__item {
        padding: 12px;
        border: 0.5px solid #d1d9e6;
      }
    }

    &__list:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
