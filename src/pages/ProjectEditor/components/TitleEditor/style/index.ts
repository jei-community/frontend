import { S as TitleStyle } from '@/pages/ProjectItem/components/Title/style';
import styled from '@emotion/styled';

export const S = {
  DateWrapper: styled.div({
    display: 'flex',
    alignItems: 'center',

    width: '26rem',

    gap: '0.4rem',
  }),

  ModalContentContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    flex: 1,

    gap: '1.6rem',

    overflow: 'auto',
  }),

  SearchBarContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    gap: '0.8rem',
  }),

  MemberList: styled.ul({
    display: 'flex',
    flexDirection: 'column',

    gap: '0.8rem',
  }),

  CheckBoxContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),

  LabelContainer: styled.label({
    display: 'flex',
    alignItems: 'center',

    flex: 1,

    gap: '0.8rem',
  }),

  NameText: styled.p(({ theme }) => ({
    colors: theme.colors.gray[900],
    ...theme.typography.body2,
  })),

  PositionText: styled.p(({ theme }) => ({
    colors: theme.colors.gray[500],
    ...theme.typography.body1,
  })),

  ...TitleStyle,
};
