'use strict';

import { togglePlay } from '../handlers/play-and-pause.js';
import { updateButton } from '../handlers/play-and-pause.js';

/* Hook up the event listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
