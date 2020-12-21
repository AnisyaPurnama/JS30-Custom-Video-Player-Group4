'use strict';

import { skip } from '../handlers/skipData.js';

/* Hook up the event listners */
skipButtons.forEach(button => button.addEventListener('click', skip));