import { use } from 'react';

import { DailyCheckResponse } from '@/apis/dailyCheck';

import Table from '../Table';
import EmptyContent from './EmptyContent';

interface Props {
  dailyCheckPromise: Promise<DailyCheckResponse | null>;
  userName: string;
}

/**
 * 메인 컨텐츠
 */
export default function MainContent({ dailyCheckPromise, userName }: Props) {
  /** 일일점검 데이터 */
  const data = use(dailyCheckPromise);

  // TODO(지애) EmptyComponent를 공통 컴포넌트로 교체
  return <>{data ? <Table data={data} userName={userName} /> : <EmptyContent />}</>;
}
