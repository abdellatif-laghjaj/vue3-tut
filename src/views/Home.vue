<template>
  <h1>Home page</h1>
  <PostsList :posts="posts"/>
</template>

<script setup>
import {ref} from "vue";
import PostsList from "@/components/PostsList";

const posts = ref([
  {id: 1, title: "Web developer", body: "A web developer for our company"},
  {id: 2, title: "Mobile developer", body: "A mobile developer for our company"},
  {id: 3, title: "Fullstack developer", body: "A fullstack developer for our company"},
]);
</script>

<style scoped>

</style>