import { writable } from 'svelte/store';
import Cookies from 'js-cookie';
import { COOKIE_KEY_THEME, LIGHT } from '$slib/utils';

const createCookie = (key: string, startValue: string) => {
  const { subscribe, set, update } = writable(startValue);

  return {
    subscribe,
    set,
    update,
    useCookie: () => {
      const cookie = Cookies.get(key);
      if (cookie) {
        set(cookie);
      }

      subscribe((current) => {
        Cookies.set(key, current);
      });
    },
  };
};

export const theme = createCookie(COOKIE_KEY_THEME, LIGHT);
