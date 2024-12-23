import styled from '@emotion/styled';

export const S = {
  ToggleContainer: styled.fieldset({
    display: 'flex',
    gap: '1.2rem',
  }),

  MyProjectLabelText: styled.label(({ theme }) => ({
    color: theme.colors.gray[900],
    ...theme.typography.body1,
  })),
};
