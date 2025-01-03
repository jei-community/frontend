import TextArea from '@/components/TextArea';

import styled from '@emotion/styled';

export const S = {
  ContentContainer: styled.div({
    padding: '2.4rem',
  }),

  AsideContainer: styled.div({
    padding: '2.4rem 1.6rem',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),

  AsideButtonWrapper: styled.div({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '0.8rem',
  }),

  PageTitle: styled.h1(({ theme }) => ({
    ...theme.typography.title,
    color: theme.colors.gray[800],
    marginBottom: '1.6rem',
  })),

  TextArea: styled(TextArea)(({ theme }) => ({
    border: 'none',
    boxShadow: `
      0 0 0 1px var(--color-border-default, #d0d7de),
      0 0 0 var(--color-border-default, #d0d7de),
      0 1px 1px var(--color-border-default, #d0d7de)
    `,
    backgroundColor: 'var(--color-canvas-default, #ffffff)',
    borderRadius: '0.4rem',
    padding: '0.8rem',
    marginBottom: '1.6rem',
    ...theme.typography.subtitle,
  })),
};
