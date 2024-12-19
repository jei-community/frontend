import { S } from '@/components/MoreButton/style';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export default function MoreButton({ isOpen, onClick }: Props) {
  return (
    <S.MoreButtonWrapper>
      <S.MoreButton onClick={onClick}>{isOpen ? '접기' : '더 보기'}</S.MoreButton>
    </S.MoreButtonWrapper>
  );
}
