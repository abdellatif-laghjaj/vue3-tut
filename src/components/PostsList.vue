<template>
  <div class="post-list mx-auto">
    <div class="card w-96 bg-base-100 shadow-xl my-2 mx-auto" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <h2 class="card-title">{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated} from "vue";

const props = defineProps({
  posts: {type: Array}
})


onMounted(() => {
  console.log('mounted')
})
onUnmounted(() => {
  console.log('unmounted')
})
onUpdated(() => {
  console.log('updated')
})
</script>

<style scoped>

</style>