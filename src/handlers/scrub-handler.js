// This is a Handler for Progress bar that sets the scrub for the video.

export function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  };

