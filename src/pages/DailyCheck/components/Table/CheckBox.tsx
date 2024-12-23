import { S } from './style';

interface Props {
  status: 'INCOMPLETE' | 'COMPLETE' | 'VACATION';
  isToday: boolean;
  handleTooltipOpen: () => void;
}

/**
 * 일일점검 체크박스
 * @param status INCOMPLETE : 점검 미완료, COMPLETE: 점검 완료, VACATION: 휴가 중
 */
export default function CheckBox({ status, isToday, handleTooltipOpen }: Props) {
  const IconComponent = {
    INCOMPLETE: <S.Icon.Incomplete $isToday={isToday} onClick={handleTooltipOpen} />,
    COMPLETE: <S.Icon.Complete $isToday={isToday} onClick={handleTooltipOpen} />,
    VACATION: <S.Icon.Vacation $isToday={isToday} onClick={handleTooltipOpen} />,
  };

  return IconComponent[status];
}
