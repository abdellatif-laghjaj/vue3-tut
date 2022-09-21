<template>
  <Modal/>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: 'App',
  data() {
    return {
      title: "Heeeeey",
    }
  },
  methods: {},
  components: {
    Modal,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
