import styled from '@emotion/styled';

export const S = {
  Header: styled.header(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',

    width: '100%',
    height: '6.4rem',

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
