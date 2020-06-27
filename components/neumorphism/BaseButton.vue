<template>
  <button class="icon-button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.icon-button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #50545c;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0.55em;
  box-shadow: 3px 3px 6px #d9dade, -3px -3px 6px #fff;

  &:active {
    box-shadow: inset 3px 3px 6px #d9dade, inset -3px -3px 6px #ffffff;
  }
}
</style>
