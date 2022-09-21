<template>
  <div class="flex flex-col w-3/5 justify-center items-center w-auto gap-3">
    <input type="text" class="p-2 border rounded-md" ref="name" placeholder="name">
    <button @click="click" class="px-4 py-2 bg-blue-600 rounded-md text-white">Ref</button>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: "Heeeeey",
    }
  },
  methods: {
    click() {
      this.title = this.$refs.name;
    }
  },
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
