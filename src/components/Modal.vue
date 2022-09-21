<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot>Default content</slot>
      <div class="actions">
        <slot name="btns"></slot>
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
      this.$emit('close');
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

.actions{
  width: 100%;
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>