<template>
  <div class="stat" style="width: 100px">
    <div class="stat-title">Your result</div>
    <div class="stat-value text-secondary">{{ result }} ms</div>
    <div class="stat-desc"></div>
  </div>
</template>

<script>
export default {
  props: ['result'],
  name: "Block"
}
</script>

<style scoped>

</style>