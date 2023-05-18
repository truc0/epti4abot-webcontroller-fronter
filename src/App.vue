<script setup lang="ts">
import { useStore } from './stores';
import { toRefs } from 'vue';

const store = useStore();
const {
  connectionStatus,
} = toRefs(store);

store.updateConnectionStatus();
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="w-full h-12 border-b flex items-center justify-between px-4">
      <router-link to="/">
        <div class="w-8 h-7 opacity-70 grayscale">
          <img src="/radar.svg" class="max-w-full max-h-full">
        </div>
      </router-link>

      <div class="flex h-full items-center">
        <div class="relative">
          <span class="block rounded shadow h-2 w-2" :class="{
            'bg-lime-500': connectionStatus === 'Connected',
            'bg-orange-500': connectionStatus === 'Connecting',
            'bg-red-500': connectionStatus === 'Disconnected',
          }"></span>
          <span class="absolute top-0 left-0 block rounded shadow h-2 w-2" :class="{
            'bg-lime-500': connectionStatus === 'Connected',
            'bg-orange-500 animate-ping': connectionStatus === 'Connecting',
            'bg-red-500': connectionStatus === 'Disconnected',
          }"></span>
        </div>
        <span class="text-sm ml-2 text-gray-500" :class="{
          'text-lime-500': connectionStatus === 'Connected',
          'text-orange-500 animate-pulse': connectionStatus === 'Connecting',
          'text-red-500': connectionStatus === 'Disconnected',
        }">{{ connectionStatus }}</span>
      </div>
    </header>

    <main class="flex-1">
      <router-view /> 
    </main>

    <footer class="border-t h-24 text-gray-500 flex items-center justify-center text-center py-4">
      Copyright &copy; 2023 ICE3505
      <br>
      Automatic Obstacle Avoidance Car Group
    </footer>
  </div>
</template>

<style scoped>
</style>
