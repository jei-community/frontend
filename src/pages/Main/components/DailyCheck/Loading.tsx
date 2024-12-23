import LoadingSpinner from '@/components/LoadingSpinner';

import { S } from './style';

/**
 * 로딩 중 컴포넌트
 */
export default function Loading() {
  return (
    <S.EmptyContentWrapper>
      <LoadingSpinner size='small' />
    </S.EmptyContentWrapper>
  );
}
