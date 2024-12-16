import { MEDIA_QUERY } from '@/constants';
import styled from '@emotion/styled';

const DEFAULT_CONTENT_WIDTH = 66;
const ASIDE_WIDTH = 27;

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
  Content: styled.article<{ $asideCount: number }>`
    width: ${({ $asideCount }) => WIDTH[$asideCount]};

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}px) {
      width: 100%;
    }

    @media (max-width: ${MEDIA_QUERY.DESKTOP_M}px) {
      width: ${({ $asideCount }) => DESKTOP_M_WIDTH[$asideCount]};
    }
  `,
};
