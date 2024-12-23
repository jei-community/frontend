import LoadingSpinner from '@/components/LoadingSpinner';

import { S } from './style';

/**
 * 로딩 컴포넌트
 */
export default function Loading() {
  return (
    <S.Wrapper>
      <LoadingSpinner size='large' />;
    </S.Wrapper>
  );
}
