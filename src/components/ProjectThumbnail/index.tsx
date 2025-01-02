import { IMAGE_URL } from '@/assets';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Size = 'small' | 'large';

interface Props {
  src: string | null;
  alt?: string;
  size?: Size;
}

export default function ProjectThumbnail({ src, alt = '썸네일', size = 'small' }: Props) {
  return <S.Thumbnail src={src ?? IMAGE_URL.FILE_BOX} $size={size} alt={alt} />;
}

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

const S = {
  Thumbnail: styled.img<{ $size: Size }>`
    border-radius: 8px;

    ${({ $size }) => thumbnailSizes[$size] || thumbnailSizes.default}
  `,
};
