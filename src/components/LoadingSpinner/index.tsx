import { S } from './style';
import type { LoadingSpinnerSize } from './types';

interface Props {
  size?: LoadingSpinnerSize;
}

/**
 * 로딩 스피너 컴포넌트
 */
export default function LoadingSpinner({ size = 'medium' }: Props) {
  return <S.LoadingSpinner $size={size} />;
}
