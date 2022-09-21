<template>
  <div class="card w-96 bg-primary text-primary-content mx-auto mt-10" v-if="show_block" @click="stopTimer">
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
      timer: null,
      reaction_time: null,
    }
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reaction_time += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
  },
  mounted() {
    setTimeout(() => {
      this.show_block = true;
      this.startTimer();
    }, this.delay);
  },
}
</script>

<style scoped>
</style>