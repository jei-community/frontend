import { S } from './style';

interface Props {
  status: 'INCOMPLETE' | 'COMPLETE' | 'VACATION';
  isToday: boolean;
}

/**
 * 일일점검 체크박스
 * @param status INCOMPLETE : 점검 미완료, COMPLETE: 점검 완료, VACATION: 휴가 중
 */
export default function CheckBox({ status, isToday }: Props) {
  const IconComponent = {
    INCOMPLETE: <S.Icon.Incomplete $isToday={isToday} />,
    COMPLETE: <S.Icon.Complete $isToday={isToday} />,
    VACATION: <S.Icon.Vacation $isToday={isToday} />,
  };

  return IconComponent[status] || <S.Icon.Vacation $isToday={isToday} />;
}
