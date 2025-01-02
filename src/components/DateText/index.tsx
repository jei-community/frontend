import { S } from '@/components/DateText/style';
import { Size } from '@/components/DateText/types';

interface Props {
  startDate: string;
  endDate: string;
  size?: Size;
}

export default function DateText({ startDate, endDate, size = 'large' }: Props) {
  return /\d/.test(startDate) && /\d/.test(endDate) && <S.DateText $size={size}>{`${startDate} ~ ${endDate}`}</S.DateText>;
}
