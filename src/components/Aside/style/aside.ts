import { ASIDE_WIDTH } from '@/components/Layout/constants/style';

import { MEDIA_QUERY } from '@/constants';
import styled from '@emotion/styled';

export const S = {
  Aside: styled.aside`
    display: flex;

    flex: 1;
    max-width: ${ASIDE_WIDTH}rem;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}px) {
      display: none;
    }
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_M}px) {
      display: none;
    }
  `,
};
