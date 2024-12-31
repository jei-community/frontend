import { Status } from '@/types/project';

import { STATUS_TEXT } from '@/constants/common';

import theme from '@/styles/theme';

import { S } from './style';

interface StatusStyle {
  bgColor: keyof typeof theme.colors;
  textColor: keyof typeof theme.colors;
}
interface Props {
  status: Status;
  thumbnail: string;
  title: string;
}
export default function MyProjectItem({ status, thumbnail, title }: Props) {
  const getStatusStyle = (status: Status): StatusStyle => {
    switch (status) {
      case 'LIVE':
        return { bgColor: 'success' as keyof typeof theme.colors, textColor: 'white' as keyof typeof theme.colors };
      case 'DEVELOP':
        return { bgColor: 'warning' as keyof typeof theme.colors, textColor: 'black' as keyof typeof theme.colors };
      default:
        return { bgColor: 'error' as keyof typeof theme.colors, textColor: 'white' as keyof typeof theme.colors };
    }
  };
  const { bgColor, textColor } = getStatusStyle(status);

  return (
    <S.Container>
      <S.Image src={thumbnail} alt='' />
      <S.StatusBox $bgColor={bgColor} $textColor={textColor}>
        {STATUS_TEXT[status]}
      </S.StatusBox>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
