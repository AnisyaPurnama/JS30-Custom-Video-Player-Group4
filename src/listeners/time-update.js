import {handleProgress} from '../handlers/progress-handler.js';

//This video listens for the time update and moves the progress bar there.

video.addEventListener('timeupdate', handleProgress);
