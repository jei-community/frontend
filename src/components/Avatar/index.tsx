import { S } from './style';
import type { AvatarSize } from './types';

interface Props {
  src?: string;
  size?: AvatarSize;
  onClick?: () => void;
}

/**
 * 공통 아바타 컴포넌트
 */
export default function Avatar({ src, size = 'medium', onClick }: Props) {
  return <S.Avatar $src={src} $size={size} $onClick={onClick} />;
}
