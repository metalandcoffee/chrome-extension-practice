import { tmi } from '../node_modules/tmi.js';

const vidMeta = document.querySelector('meta[itemprop="name"]');
let vidTitle = vidMeta ? vidMeta.getAttribute('content') : null;
console.log(vidTitle);

