<template>
  <h1>Home page</h1>
  <div class="form-control my-3">
    <label class="label cursor-pointer">
      <input type="checkbox" class="toggle toggle-primary" v-model="checked"/>
    </label>
  </div>
  <PostsList :posts="posts" v-if="checked"/>
  <button class="btn btn-ghost" @click="posts.pop()">delete</button>
</template>

<script setup>
import {onMounted, onUnmounted, onUpdated, ref, watch} from "vue";
import PostsList from "@/components/PostsList";

const checked = ref(true);
const posts = ref([
  {id: 1, title: "Web developer", body: "A web developer for our company"},
  {id: 2, title: "Mobile developer", body: "A mobile developer for our company"},
  {id: 3, title: "Fullstack developer", body: "A fullstack developer for our company"},
]);
</script>

<style scoped>

</style>