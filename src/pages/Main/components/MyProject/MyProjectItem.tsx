import theme from '@/styles/theme';

import { Thumbnail } from '../../assets';
import { S } from './style';

type Status = 'LIVE' | 'DEVELOP' | 'STOP';
interface StatusStyle {
  text: string;
  bgColor: keyof typeof theme.colors;
  textColor: keyof typeof theme.colors;
}
interface Props {
  status: Status;
  thumbnail: string;
  title: string;
}
export default function MyProjectItem({ status, thumbnail, title }: Props) {
  console.log(thumbnail);
  const getStatusStyle = (status: Status): StatusStyle => {
    switch (status) {
      case 'LIVE':
        return { text: '서비스', bgColor: 'success' as keyof typeof theme.colors, textColor: 'white' as keyof typeof theme.colors };
      case 'DEVELOP':
        return { text: '개발', bgColor: 'warning' as keyof typeof theme.colors, textColor: 'black' as keyof typeof theme.colors };
      default:
        return { text: '서비스 중단', bgColor: 'error' as keyof typeof theme.colors, textColor: 'white' as keyof typeof theme.colors };
    }
  };
  const { text, bgColor, textColor } = getStatusStyle(status);

  return (
    <S.Container>
      <S.Image src={Thumbnail} alt='' />
      <S.StatusBox $bgColor={bgColor} $textColor={textColor}>
        {text}
      </S.StatusBox>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
