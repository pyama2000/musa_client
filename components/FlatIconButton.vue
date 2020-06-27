<template>
  <button class="flat-button">
    <i class="material-icons">{{ iconName }}</i>
  </button>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.flat-button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f68a57;
  border: 1px solid #f68a57;
  border-radius: 5px;
  transition: 0.2s all;

  &:active {
    color: #f5f5f5;
    background: #f68a57;
    border: none;
  }
}
</style>
