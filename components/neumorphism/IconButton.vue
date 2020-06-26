<template>
  <button class="icon-button">
    <i class="material-icons">{{ iconName }}</i>
  </button>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-button {
  padding: 12px;
  background: #eef0f4;
  border-radius: 100%;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;

  &:active {
    background: #eef0f4;
    border-radius: 100%;
    box-shadow: inset 9.91px 9.91px 15px #d9dade,
      inset -9.91px -9.91px 15px #ffffff;
  }
}
</style>
