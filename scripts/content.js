import { tmi } from 'tmi.js';

const vidMeta = document.querySelector('meta[itemprop="name"]');
let vidTitle = vidMeta ? vidMeta.getAttribute('content') : null;
console.log(vidTitle);

