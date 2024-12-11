import { PropsWithChildren } from 'react';

import Header from '@/components/Layout/Header';
import SideAside from '@/components/Layout/SideAside';

import styled from '@emotion/styled';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <Header />
      <S.ContentContainer>
        <SideAside position='left' />
        <S.Content>{children}</S.Content>
        <SideAside position='right' />
      </S.ContentContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100vw',
    height: '100vh',
  }),

  ContentContainer: styled.div({
    display: 'flex',
    justifyContent: 'center',

    width: '100%',
    height: '100%',
  }),

  Content: styled.article({
    minWidth: '66rem',

    padding: '24px',

    borderLeft: '1px solid #E0E0E0',
    borderRight: '1px solid #E0E0E0',

    '@media (max-width: 767px)': {
      minWidth: '100%',
      border: 'none',
    },
  }),
};
