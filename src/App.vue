<template>
  <SingUpForm/>
</template>

<script>
import SingUpForm from "@/components/SingUpForm";

export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {},
  components: {
    SingUpForm,
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
