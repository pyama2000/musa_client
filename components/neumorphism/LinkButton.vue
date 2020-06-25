<template>
  <div class="link-button">
    <nuxt-link :to="page">{{ page }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      require: true,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.link-button {
  display: flex;
  justify-content: center;
  width: 120px;
  padding: 12px 0;
  color: #61677c;
  font-weight: bold;
  background: #eef0f4;
  border-radius: 50px;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;
}
</style>
