import Button from '@/components/Button';
import TextButton from '@/components/TextButton';

import styled from '@emotion/styled';
import MDEditor from '@uiw/react-md-editor';

export const S = {
  Container: styled.div(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.gray[100],
    padding: '1.6rem',
    marginBottom: '2.4rem',
    borderRadius: '1.6rem',
  })),

  Header: styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),

  TitleWrapper: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  Title: styled.p(({ theme }) => ({
    ...theme.typography.subtitle,
    color: theme.colors.gray[900],
  })),

  UserContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0.8rem 0 1.6rem 0px',
  }),
  User: {
    Wrapper: styled.div({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }),
    Name: styled.span(({ theme }) => ({
      ...theme.typography.body2,
      color: theme.colors.gray[900],
      marginLeft: '0.8rem',
    })),
    Position: styled.span(({ theme }) => ({
      ...theme.typography.body1,
      color: theme.colors.gray[500],
      marginLeft: '0.4rem',
    })),
  },

  CreateTime: styled.span(({ theme }) => ({
    ...theme.typography.body3,
    color: theme.colors.gray[500],
  })),

  MarkdownWrapper: styled.div({
    position: 'relative',
  }),
  Markdown: styled(MDEditor.Markdown)<{ $isOpen: boolean }>(({ $isOpen }) => ({
    padding: '1.6rem',
    marginBottom: '1.6rem',
    borderRadius: '0.8rem',
    height: $isOpen ? '100%' : '12rem',
    overflow: 'hidden',
    // ::after로 그라데이션 추가
    '&::after': !$isOpen
      ? {
          content: '""',
          position: 'absolute',
          bottom: '1.6rem',
          left: 0,
          width: '100%',
          height: '8rem',
          background: `
          linear-gradient(
            to bottom,
            rgba(240,240,240, 0) 0%,
            #F0F0F0 80%
          )
        `,
          pointerEvents: 'none', // 이벤트 차단
        }
      : undefined,
  })),

  Comment: styled.div({
    backgroundColor: '#ff6666',
    width: '100%',
    height: '10rem',
  }),
  CommentArea: styled.span(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.colors.gray[700],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.8rem',
  })),

  TextButton: styled(TextButton)(({ theme }) => ({
    backgroundColor: theme.colors.gray[100],
  })),

  InputWrapper: styled.div({
    display: 'flex',
    alignItems: 'center',
    margin: '0.8rem',
    gap: '0.8rem',
  }),
  Button: styled(Button)({
    width: '9.6rem',
  }),
};
