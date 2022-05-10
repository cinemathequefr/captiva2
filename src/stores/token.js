//https://github.com/andsala/svelte-persistent-store#usage
// import { writable } from 'svelte-persistent-store/dist/session';
// import { session } from 'svelte-persistent-store';
// const { writable } = session;

import { persist, sessionStorage } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';
export const token = persist(writable(''), sessionStorage(), 'token');

// export const token = writable('token', '');
