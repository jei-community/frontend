import { HEADER_HEIGHT } from '@/components/Layout/constants/style';

import styled from '@emotion/styled';

export const S = {
  Form: styled.form({
    display: 'flex',
    width: '100%',
  }),

  SideStickyContainer: styled.div({
    position: 'sticky',
    top: `${1.6 + HEADER_HEIGHT}rem`,

    display: 'flex',
    flexDirection: 'column',

    gap: '1.6rem',
  }),
};
