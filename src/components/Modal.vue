<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal">
      <header class="mb-3 flex items-center justify-between w-full">
        <h1 class="text-2xl font-bold">{{ title }}</h1>
        <button>
          <box-icon name='x-square' type='solid' color="red"></box-icon>
        </button>
      </header>
      <div class="modal-body mt-2 mb-3">
        <p>{{ content }}</p>
      </div>
      <div class="modal-footer w-full">
        <button class="flex justify-center items-center py-2 px-4 text-white bg-blue-500 rounded-md float-right"
                @click="closeModal">
          {{ btn_text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import 'boxicons'

export default {
  name: "Modal",
  props: {
    title: String,
    content: String,
    btn_text: String,
  },
  data() {
    return {}
  },
  methods: {
    closeModal() {

    }
  },
}
</script>

<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 400px;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-body {
  font-size: 18px;
}
</style>