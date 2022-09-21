<template>
  <div class="backdrop">
    <div class="modal">
      <header class="mb-3 flex items-center justify-between w-full">
        <h1 class="text-2xl font-bold">Modal Header</h1>
        <button class="bg-red-600 flex justify-center items-center p-0.5 rounded-md">
          <box-icon name='x-square' type='solid' color="#fff"></box-icon>
        </button>
      </header>
      <div class="modal-body">
        <p>Modal Content</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'boxicons'

export default {
  name: "Modal"
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
</style>