<template>
  <div>
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle"/>
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="w-full navbar bg-base-300">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2">
            <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal p-0">
              <li class="mx-1">
                <router-link :to="{ name: 'Home' }" class="normal-case">Home</router-link>
              </li>
              <li class="mx-1">
                <router-link to="/about" class="normal-case">About</router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- Page content here -->
        <main class="w-4/5 mx-auto">
          <router-view/>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" v-model="search"/>
          <h2 class="font-bold text-2xl mt-5" v-for="name in filtredName" v-if="filtredName.length">{{ name }}</h2>
          <h2 class="font-bold text-2xl mt-5" v-else>No results</h2>
          <button class="my-3 btn gap-2" @click="click">Click</button>
        </main>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          <!-- Sidebar content here -->
          <li class="mb-2">
            <router-link :to="{ name: 'Home' }" class="normal-case">Home</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/about" class="normal-case">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref, watch, watchEffect} from "vue";

const names = ref(['John', 'Jane', 'Jack', 'Jill', 'Peter', 'Abdellatif', 'Hamid']);
const search = ref('');
const filtredName = computed(() => {
  return names.value.filter(name => name.includes(search.value))
})

watch(search, (newValue, oldValue) => {
  console.log('watch', newValue, oldValue)
})

watchEffect(() => {
  console.log('watchEffect', search.value)
})

const click = () => {
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
