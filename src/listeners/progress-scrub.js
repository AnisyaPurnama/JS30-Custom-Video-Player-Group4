import {scrub} from '../handlers/scrub-handler.js';

// This listener, listens for a mouse click and drag (scrub) and scrubs the video.

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);