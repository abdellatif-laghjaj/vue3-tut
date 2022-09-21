<template>
  <div class="card w-96 bg-primary text-primary-content mx-auto mt-10" v-if="show_block">
    <div class="card-body flex justify-center items-center cursor-pointer">
      <h2 class="card-title">Click Me !!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: ['delay'],
  data() {
    return {
      show_block: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.show_block = true;
    }, this.delay);
  },
}
</script>

<style scoped>
</style>