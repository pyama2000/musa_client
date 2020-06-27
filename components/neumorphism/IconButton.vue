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
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;

  &:active {
    border-radius: 100%;
    box-shadow: inset 9.91px 9.91px 15px #d9dade,
      inset -9.91px -9.91px 15px #ffffff;
  }
}
</style>
