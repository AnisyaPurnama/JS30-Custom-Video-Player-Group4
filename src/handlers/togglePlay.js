'use strict';

//Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');

//Build out function
export function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

