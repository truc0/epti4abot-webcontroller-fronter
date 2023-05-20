<script setup lang="ts">
import { ref } from 'vue';
import {
  useMouseInElement,
  useMousePressed,
} from '@vueuse/core';
import { computed } from 'vue';
import { useStore } from '@/stores';
import { watch } from 'vue';

const store = useStore();

const joystick = ref<HTMLElement | null>(null);
const joystickContainer = ref<HTMLElement | null>(null);
const container = ref<HTMLElement | null>(null);

const { pressed } = useMousePressed({ target: container });
const {
  elementX,
  elementY,
  elementHeight,
  elementWidth,
} = useMouseInElement(joystickContainer);

const cursor = computed(() => ({
  x: elementX.value - elementWidth.value / 2,
  y: elementY.value - elementHeight.value / 2,
}));

const phase = computed(() => Math.atan2(cursor.value.y, cursor.value.x));

const max_radius = computed(() => {
  return Math.min(elementHeight.value, elementWidth.value) / 2;
});
const radius = computed(() => {
  const r = Math.sqrt(cursor.value.x ** 2 + cursor.value.y ** 2);
  return r < max_radius.value ? r : max_radius.value;
});

const position = computed(() => {
  if (pressed.value) {
    return {
      x: radius.value * Math.cos(phase.value),
      y: radius.value * Math.sin(phase.value),
    };
  }

  return { x: 0, y: 0 };
});

watch(position, (value) => {
  store.carState.x = -value.y / max_radius.value * 100;
  store.carState.turn = -value.x / max_radius.value * 5;
});

store.useSyncPage();
</script>

<template>
  <div class="h-full w-full flex items-center justify-center" ref="container">
    <div class="relative rounded-full bg-gray-200 dark:bg-slate-600 shadow-inner w-56 h-56 origin-center" ref="joystickContainer">
      <div class="absolute rounded-full w-24 h-24 -translate-x-1/2 -translate-y-1/2 duration-300"
        ref="joystick"
        :class="{
          'shadow-md bg-gray-50 dark:bg-slate-400 transition-all': !pressed,
          'shadow-xl bg-gray-100 dark:bg-slate-400/80 transition': pressed,
        }"
        :style="{
          top: `calc(50% + ${position.y}px)`,
          left: `calc(50% + ${position.x}px)`,
        }"
      ></div>
    </div>
  </div>
</template>