<script setup lang="ts">
import { useController } from "@/composable/useController";
import { useStore } from "@/stores";

const {
  onFrontKeyDown, onFrontKeyUp,
  onBackKeyDown, onBackKeyUp,
  onLeftKeyDown, onLeftKeyUp,
  onRightKeyDown, onRightKeyUp,
} = useController();

const store = useStore();
store.useSyncPage();
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-3 gap-8 text-gray-500">
    <!-- row 1 -->
    <div></div>
    <button class="px-4 py-4 shadow rounded-full" @pointerdown="onFrontKeyDown" @pointerup="onFrontKeyUp" @pointerleave="onFrontKeyUp">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
      </svg>
    </button>
    <div></div>

    <!-- row 2 -->
    <button class="px-4 py-4 shadow rounded-full" @pointerdown="onLeftKeyDown" @pointerup="onLeftKeyUp" @pointerleave="onLeftKeyUp">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
    </button>
    <div></div>
    <button class="px-4 py-4 shadow rounded-full" @pointerdown="onRightKeyDown" @pointerup="onRightKeyUp" @pointerleave="onRightKeyUp">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </button>

    <!-- row 3 -->
    <div></div>
    <button class="px-4 py-4 shadow rounded-full" @pointerdown="onBackKeyDown" @pointerup="onBackKeyUp" @pointerleave="onBackKeyUp">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
      </svg>
    </button>
    <div></div>
  </div>
</template>

<style scoped lang="scss">
</style>