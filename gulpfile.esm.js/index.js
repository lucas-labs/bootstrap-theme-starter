import { build } from './build';
import { sass } from './tasks/sass';
import { js } from './tasks/js';
import { img } from './tasks/img';
import { clean } from './tasks/clean';
import { serve } from './serve';

  
export { build, sass, js, img, serve, clean };
export { serve as default };