import styled from '@emotion/styled';

export const S = {
  TooltipListWrapper: styled.div({
    width: '100%',

    padding: '1.2rem 0.8rem',
  }),

  Container: styled.div({
    display: 'flex',

    gap: '0.8rem',
    paddingRight: '1.6rem',
  }),

  Icon: styled.img({
    width: '3.2rem',
    height: '3.2rem',
  }),

  NameFieldWrapper: styled.div({
    width: '20rem',
  }),

  LinkList: styled.ul({
    display: 'flex',
    flexDirection: 'column',

    flex: 1,
    width: '100%',

    gap: '0.8rem',

    overflow: 'scroll',
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

  ModalContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',

    width: '100%',
    height: '100%',

    gap: '2.4rem',
  }),

  DocumentIconButtonList: styled.ul({
    display: 'flex',

    gap: '0.8rem',
  }),

  LinkEditBottom: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
  }),
};
