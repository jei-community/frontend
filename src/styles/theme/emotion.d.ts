// emotion.d.ts
import '@emotion/react';

import { TColors } from './colors';
import { Ttypography } from './typography';

declare module '@emotion/react' {
  export interface Theme {
    colors: TColors;
    typography: Ttypography;
  }
}
