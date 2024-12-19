import { S } from './style';

/**
 * 일일점검 체크박스
 * @param status INCOMPLETE : 점검 미완료, COMPLETE: 점검 완료, VACATION: 휴가 중
 */
export default function CheckBox({ status, isToday }: { status: 'INCOMPLETE' | 'COMPLETE' | 'VACATION'; isToday: boolean }) {
  if (status === 'INCOMPLETE') return <S.Icon.Incomplete $isToday={isToday} />;
  else if (status === 'COMPLETE') return <S.Icon.Complete $isToday={isToday} />;
  else return <S.Icon.Vacation $isToday={isToday} />;
}
