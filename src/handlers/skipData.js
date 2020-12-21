'use strict';

//Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const skipButtons = player.querySelectorAll('[data-skip]');


//Build out function
export function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
