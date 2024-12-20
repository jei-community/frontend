import { use } from 'react';

import { DailyCheckResponse } from '@/apis/dailyCheck';

import EmptyContent from './EmptyContent';
import Table from './Table';

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

  return <>{data ? <Table data={data} userName={userName} /> : <EmptyContent />}</>;
}
