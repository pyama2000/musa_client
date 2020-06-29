<template>
  <div class="card--dent">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.card--dent {
  color: $color;
  background-color: $background;
  border-radius: 0.55rem;
  box-shadow: $dent-shadow;
}
</style>
