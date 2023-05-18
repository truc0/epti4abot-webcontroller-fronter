import { ref, onMounted, onUnmounted } from "vue";
import { defineStore } from "pinia";
import * as api from "@/api";

export const useStore = defineStore('default', () => {
  const base = ref(import.meta.env.VITE_API_BASE ?? '');

  const carState = ref({
    x: 0,
    turn: 0,
  });

  const carSync = () => {
    // opt
    if (carState.value.x === 0 && carState.value.turn === 0) {
      return;
    }
    api.move(carState.value)
      .then(() => {
        connectionStatus.value = 'Connected';
      }).catch(() => {
        connectionStatus.value ='Disconnected';
      });
  };

  const carSyncInterval = ref<null | number>(null);

  const startSyncInterval = () => {
    if (carSyncInterval.value) {
      console.warn('try to start sync interval while the old one is not cleared');
      return;
    }
    carSyncInterval.value = setInterval(carSync, 100);
  };

  const stopSyncInterval = () => {
    if (carSyncInterval.value === null) {
      console.warn('try to stop sync interval while the old one is already cleared');
      return;
    }
    clearInterval(carSyncInterval.value);
    carSyncInterval.value = null;
  };

  const useSyncPage = () => {
    onMounted(startSyncInterval);
    onUnmounted(stopSyncInterval);
  };

  const connectionStatus = ref<'Connecting' | 'Connected' | 'Disconnected'>('Connecting');

  const updateConnectionStatus = async () => {
    connectionStatus.value = 'Connecting';
    try {
      await api.getStatus();
      connectionStatus.value = 'Connected';
    } catch (e) {
      connectionStatus.value = 'Disconnected';
    }
  }

  return {
    base,
    carState,
    carSync,
    useSyncPage,

    connectionStatus,
    updateConnectionStatus,
  };
});