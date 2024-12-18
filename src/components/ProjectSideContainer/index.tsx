import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

export default function ProjectSideContainer({ children }: PropsWithChildren) {
  return <S.SideContainer>{children}</S.SideContainer>;
}

const S = {
  SideContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    height: '100%',

    padding: '4rem 1.6rem',
    gap: '1.6rem',

    userSelect: 'none',
  }),
};
