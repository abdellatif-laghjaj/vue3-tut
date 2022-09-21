<template>
  <div class="backdrop">
    <div class="modal">
      <p>Modal Content</p>
    </div>
  </div>
</template>

<script>
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
  justify-content: center;
  align-items: center;
}
</style>