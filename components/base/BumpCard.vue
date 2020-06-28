<template>
  <div class="card--bump">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.card--bump {
  color: $color;
  background-color: $background;
  border-radius: 0.55rem;
  box-shadow: $bump-shadow;
}
</style>
