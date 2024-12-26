import { LinkIcon, PlusIcon } from 'lucide-react';

import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';

export default function EmptyLink() {
  return (
    <S.EmptyDocumentLinkContainer>
      <S.IconContainer>
        <LinkIcon />
        <PlusIcon width='1.2rem' height='1.2rem' />
      </S.IconContainer>
      <S.AddDocumentLinkText>문서 외부 링크 추가</S.AddDocumentLinkText>
    </S.EmptyDocumentLinkContainer>
  );
}
