import styled from '@emotion/styled';

export const S = {
  TechListWrapper: styled.div(({ theme }) => ({
    padding: '1.2rem 0.8rem',

    borderRadius: 8,

    backgroundColor: theme.colors.gray[100],
  })),

  ModalTechStackListContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',
    minWidth: '80rem',

    gap: '2.4rem',
  }),

  AllTechStackList: styled.ul({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(6.4rem, 1fr))',
    gap: '0.8rem',
    listStyle: 'none',
    overflow: 'auto',
  }),

  ConfirmButtonWrapper: styled.div({
    height: 'fit-content',
    alignSelf: 'end',
  }),

  TechStackImage: styled.img<{ $isSelected: boolean }>(({ theme, $isSelected }) => ({
    width: '6.4rem',
    height: '6.4rem',

    borderRadius: 8,

    border: $isSelected ? `4px solid ${theme.colors.primary[500]}` : `1px solid ${theme.colors.gray[200]}`,

    backgroundColor: 'transparent',
  })),
};
