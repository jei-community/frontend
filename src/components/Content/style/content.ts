import { AsidePosition } from '@/components/Content/types';
import { ASIDE_WIDTH } from '@/components/Layout/constants/style';

import { MEDIA_QUERY } from '@/constants';
import styled from '@emotion/styled';

const DEFAULT_CONTENT_WIDTH = 76.8;

const WIDTH: Record<number, string> = {
  0: '100%',
  1: `${DEFAULT_CONTENT_WIDTH + ASIDE_WIDTH}rem`,
  2: `${DEFAULT_CONTENT_WIDTH}rem`,
};

const DESKTOP_M_WIDTH: Record<number, string> = {
  0: '100%',
  1: `${DEFAULT_CONTENT_WIDTH}rem`,
  2: `${DEFAULT_CONTENT_WIDTH}rem`,
};

export const S = {
  Article: styled.article<{ $asideCount: number; $asidePosition: AsidePosition }>`
    width: ${({ $asideCount }) => WIDTH[$asideCount]};
    min-height: fit-content;

    border-right: ${({ $asidePosition }) => $asidePosition.right && '1px solid'};
    border-left: ${({ $asidePosition }) => $asidePosition.left && '1px solid'};
    border-color: ${({ theme }) => theme.colors.gray[200]};

    padding: 2.4rem;
    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}px) {
      width: 100%;
    }

    @media (max-width: ${MEDIA_QUERY.DESKTOP_M}px) {
      width: ${({ $asideCount }) => DESKTOP_M_WIDTH[$asideCount]};
    }
  `,
};
