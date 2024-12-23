import { STATUS } from '../constant';

/** 일일점검 상태 타입
 * 'COMPLETE' | 'INCOMPLETE' | 'VACATION'
 */
export type DailyCheckStatus = keyof typeof STATUS;
