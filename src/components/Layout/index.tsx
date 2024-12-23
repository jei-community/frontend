import { PropsWithChildren } from 'react';

import Header from '@/components/Layout/Header';
import { S } from '@/components/Layout/style';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.ContentContainer>{children}</S.ContentContainer>
      </S.Wrapper>
    </S.Container>
  );
}
