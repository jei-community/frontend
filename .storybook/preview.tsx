import React from 'react';

import GlobalStyle from '../src/styles/GlobalStyle';

export const decorators = [
  (Story: React.FC) => (
    <GlobalStyle>
      <Story />
    </GlobalStyle>
  ),
];
