
import {handleRangeUpdate} from '../handlers/rate'

ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));