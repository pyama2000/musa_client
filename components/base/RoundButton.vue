<template>
  <button class="btn--round">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn--round {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color;
  background-color: $background;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  transition: all 0.2s ease;
  border-radius: 100%;
  box-shadow: $bump-shadow;

  &:active {
    box-shadow: $dent-shadow;
  }
}
</style>
