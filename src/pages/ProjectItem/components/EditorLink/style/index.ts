import { Link } from 'react-router';

import styled from '@emotion/styled';

export const S = {
  EditLink: styled(Link)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '3.2rem',

    borderRadius: 4,

    backgroundColor: theme.colors.gray[500],
  })),

  EditText: styled.p(({ theme }) => ({
    color: theme.colors.white,
    ...theme.typography.body4,
  })),
};
