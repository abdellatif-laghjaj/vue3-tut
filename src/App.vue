<template>
  <button @click="toggleModal"
          class="flex justify-center items-center py-2 px-4 text-white bg-blue-500 rounded-md float-right">
    show modal
  </button>
  <Modal v-if="show_modal" @close="toggleModal">
    <h2>Modal</h2>
    <p>Test content here...</p>
    <template v-slot:btns>
      <button
          class="my-2 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Login
      </button>
      <button
          class="my-2 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ease-in transition delay:1000">
        Register
      </button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: 'App',
  data() {
    return {
      title: "Heeeeey",
      show_modal: false,
    }
  },
  methods: {
    toggleModal() {
      this.show_modal = !this.show_modal;
    }
  },
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
  user-select: none;
}
</style>
