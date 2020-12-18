'use strict';

//Elements
const skipButtons = player.querySelectorAll('[data-skip]');


//Build out function
export function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}