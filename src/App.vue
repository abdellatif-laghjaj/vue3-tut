<template>
  <main class="flex flex-col justify-center items-center">
    <h1 class="mt-6">Abdel<span class="text-secondary">.</span> Reaction Timer</h1>
    <button class="btn btn-primary" @click="start" :disabled="is_playing">start</button>
    <Block v-if="is_playing" :delay="delay" @end="endGame"/>
    <results :result="reation_time" v-if="show_result"/>
  </main>
</template>

<script>
import Block from "@/components/Block";
import Results from "@/components/Results";

export default {
  name: 'App',
  data() {
    return {
      is_playing: false,
      delay: null,
      reation_time: null,
      show_result: false,
    }
  },
  methods: {
    start() {
      this.delay = 2000 + (Math.random() * 4000);
      this.is_playing = true;
      this.show_result = false;
    },
    endGame(result) {
      this.reation_time = result;
      this.is_playing = false;
      this.show_result = true;
    }
  },
  components: {
    Block,
    Results,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  user-select: none;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
