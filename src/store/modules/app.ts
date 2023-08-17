import { defineStore } from 'pinia';
import { store } from '/@/store';

export const useAppStore = defineStore('app', {
  state: () => ({
    a: '111',
  }),
  getters: {},
  actions: {},
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
