import TextArea from '@/components/TextArea';

import styled from '@emotion/styled';

export const S = {
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
    borderRadius: '4px',
    padding: '8px',
    marginBottom: '16px',
    ...theme.typography.subtitle,
  })),
};
