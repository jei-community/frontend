import { use } from 'react';

import { fetchDailyCheck } from '@/apis/dailyCheck';

import EmptyContent from './EmptyContent';
import Table from './Table';

const scriptURL = 'https://script.google.com/macros/s/AKfycbycMOe5Unfn_IDaSUbdQIzblpSBLK5OeSNHR-nxvCkBctHdDOpurMtifyujL8pY6aZLVA/exec';
const userName = '김지애';
const dailyCheckPromise = fetchDailyCheck(scriptURL, userName);

/**
 * 메인 컨텐츠
 */
export default function MainContent() {
  /** 일일점검 데이터 */
  const data = use(dailyCheckPromise);

  return <>{data ? <Table data={data['data']} userName={userName} /> : <EmptyContent />}</>;
}
