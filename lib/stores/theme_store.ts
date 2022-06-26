import { writable } from 'svelte/store';
import { storageTheme, LIGHT } from '$slib/utils';

const createLocalStore = (key: string, startValue: string) => {
  const { subscribe, set, update } = writable(startValue);

  return {
    subscribe,
    set,
    update,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(json);
      }

      subscribe((current) => {
        localStorage.setItem(key, current);
      });
    },
  };
};

// If localStorage has the key then it will be used
// if not the default will be used. Format:
// export const var = createLocalStore(key, default)
export const theme = createLocalStore(storageTheme, LIGHT);
