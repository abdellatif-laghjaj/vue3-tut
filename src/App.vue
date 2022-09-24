<template>
  <div>
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <router-link :to="{ name: 'Home' }" class="normal-case">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="normal-case">About</router-link>
          </li>
        </ul>
      </div>
    </div>
    <main class="w-4/5 mx-auto">
      <router-view/>
      <h2 class="font-bold text-2xl mt-5">{{ name }}</h2>
      <button class="my-3 btn gap-2" @click="click">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
        Button
      </button>
      <input type="text" placeholder="Type here" class="my-3 input input-bordered w-full max-w-xs" v-model="name"/>
    </main>
  </div>
</template>

<script setup>
import {ref} from "vue";

let name = ref('Test Test')

const click = () => {
  name.value = "After Click"
  console.log(name)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  user-select: none;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  align-items: center;
}
</style>
