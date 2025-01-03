import { Size } from '@/components/ProjectThumbnail/types';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const thumbnailSizes = {
  small: css`
    width: 10rem;
    height: 10rem;
  `,
  large: css`
    width: 100%;
    height: 31.2rem;
  `,
  default: css`
    width: auto;
    height: auto;
  `,
};

export const S = {
  Thumbnail: styled.img<{ $size: Size }>`
    border-radius: 0.8rem;

    ${({ $size }) => thumbnailSizes[$size] || thumbnailSizes.default}
  `,
};
