import { Router } from 'svelte-routing';
import App from './App.svelte';
import { gsap } from 'gsap';
import anime from 'animejs/lib/anime.es.js'; // Import Anime.js

const app = new App({
  target: document.getElementById('app'),
});

export { gsap, anime }; // Export them if needed in other components

export default app;