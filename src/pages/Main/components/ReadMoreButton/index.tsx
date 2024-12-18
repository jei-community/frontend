import { S } from './style';

export default function ReadMoreButton({ onClick }: { onClick: () => void }) {
  return <S.ReadMoreButton onClick={onClick}>더 보기</S.ReadMoreButton>;
}
