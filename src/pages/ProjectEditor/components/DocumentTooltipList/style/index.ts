import styled from '@emotion/styled';

export const S = {
  TooltipListWrapper: styled.div({
    width: '100%',

    padding: '1.2rem 0.8rem',
  }),

  Container: styled.div({
    display: 'flex',
    gap: '0.8rem',
  }),

  NameFieldWrapper: styled.div({
    width: '20rem',
  }),

  LinkList: styled.ul({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  }),

  EmptyDocumentLinkContainer: styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '3.2rem',
    gap: '0.8rem',
  }),

  IconContainer: styled.div({
    display: 'flex',
    alignItems: 'start',
  }),

  AddDocumentLinkText: styled.p(({ theme }) => ({
    color: theme.colors.gray[500],
    ...theme.typography.body1,
  })),
};
