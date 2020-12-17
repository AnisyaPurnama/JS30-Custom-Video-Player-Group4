// This is a Handler (function) for setting the video duration to percentage.

export function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  };

