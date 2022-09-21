<template>
  <button @click="toggleModal"
          class="flex justify-center items-center py-2 px-4 text-white bg-blue-500 rounded-md float-right">
    show modal
  </button>
  <Modal title="Test Modal" content="This a dynamic content" btn_text="Ok" v-if="show_modal"/>
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
