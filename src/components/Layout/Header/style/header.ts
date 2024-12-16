import styled from '@emotion/styled';

export const HEADER_HIGHT = 6.4;

export const S = {
  Header: styled.header(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',

    width: '100%',
    height: `${HEADER_HIGHT}rem`,

    borderBottom: `1px solid ${theme.colors.gray[200]}`,
  })),

  Content: styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '120rem',
    height: '100%',

    padding: '0 1.6rem',
  }),
};
