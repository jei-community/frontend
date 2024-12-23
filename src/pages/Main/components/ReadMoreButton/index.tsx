import { S } from './style';

interface Props {
  onClick: () => void;
}

export default function ReadMoreButton({ onClick }: Props) {
  return <S.ReadMoreButton onClick={onClick}>더 보기</S.ReadMoreButton>;
}
