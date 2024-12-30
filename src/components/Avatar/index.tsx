import { S } from './style';
import type { AvatarSize } from './types';

interface Props {
  /** 아바타 이미지 URL */
  src?: string;
  /** 아바타의 크기 */
  size?: AvatarSize;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
}

/**
 * 공통 아바타 컴포넌트
 */
export default function Avatar({ src, size = 'medium', onClick }: Props) {
  return <S.Avatar $src={src} $size={size} $onClick={onClick} />;
}
