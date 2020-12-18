'use strict';

const video = player.querySelector('.viewer');

export function handleRangeUpdate() {
    video[this.name] = this.value;
  }