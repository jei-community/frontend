import { ASIDE_WIDTH } from '@/components/Aside/style/aside';

import { MEDIA_QUERY } from '@/constants';
import styled from '@emotion/styled';

const DEFAULT_CONTENT_WIDTH = 66;

const WIDTH: Record<number, string> = {
  0: '100%',
  1: `calc(${DEFAULT_CONTENT_WIDTH}rem + ${ASIDE_WIDTH}rem)`,
  2: `${DEFAULT_CONTENT_WIDTH}rem`,
};

export const S = {
  Content: styled.article<{ $asideCount: number }>`
    width: ${({ $asideCount }) => WIDTH[$asideCount]};

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}) {
      width: 100%;
    }
  `,
};
