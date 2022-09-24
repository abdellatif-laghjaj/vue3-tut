<template>
  <h1>Home page</h1>
  <div v-if="error" class="alert alert-error shadow-lg">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
           viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <span>{{ error }}</span>
    </div>
  </div>
  <div class="form-control my-3">
    <label class="label cursor-pointer">
      <input type="checkbox" class="toggle toggle-primary" v-model="checked"/>
    </label>
  </div>
  <PostsList :posts="posts" v-if="checked"/>
  <button class="btn btn-ghost" @click="posts.pop()">delete</button>
</template>

<script setup>
import getPosts from "@/composables/getPosts";
import {onMounted, onUnmounted, onUpdated, ref, watch} from "vue";
import PostsList from "@/components/PostsList";

const checked = ref(true);
const {posts, error, load} = getPosts();
load()

</script>

<style scoped>

</style>