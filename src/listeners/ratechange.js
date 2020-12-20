'use strict';

import { handleRangeUpdate } from "../handlers/rate";

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));


