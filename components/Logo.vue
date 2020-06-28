<template>
  <dent-card class="logo">
    <div class="logo__mark" />
  </dent-card>
</template>

<script>
export default {
  components: {
    DentCard: () => import('~/components/base/DentCard.vue')
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

  &__mark {
    width: 85%;
    height: 85%;
    background: linear-gradient(#00c9ff, #92fe9d);
    border-radius: 100%;
  }
}
</style>
