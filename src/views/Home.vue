<template>
  <div>
    <h1>Home page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
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