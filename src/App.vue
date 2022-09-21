<template>
  <h1>Abdel<span class="text-secondary">.</span> Reaction Timer</h1>
  <button class="btn btn-primary" @click="start" :disabled="is_playing">start</button>
  <Block v-if="is_playing" :delay="delay"></Block>
</template>

<script>
import Block from "@/components/Block";

export default {
  name: 'App',
  data() {
    return {
      is_playing: false,
      delay: null,
    }
  },
  methods: {
    start() {
      this.delay = 2000 + (Math.random() * 4000);
      this.is_playing = true;
    },
  },
  components: {
    Block,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  user-select: none;
}
</style>
