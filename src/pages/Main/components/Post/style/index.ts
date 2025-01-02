import styled from '@emotion/styled';
import MDEditor from '@uiw/react-md-editor';

export const S = {
  Container: styled.div({
    width: '100%',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '2.4rem',
    borderRadius: '0.8rem',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
    },
  }),

  Title: styled.div(({ theme }) => ({
    ...theme.typography.subtitle,
    color: theme.colors.gray[800],
    marginBottom: '0.8rem',
  })),

  AuthorInfo: {
    Wrapper: styled.div({
      display: 'flex',
      alignItems: 'center',
    }),
    Avatar: styled.img({
      width: '3.2rem',
      height: '3.2rem',
      borderRadius: '100%',
      objectFit: 'contain',
      marginRight: '8px',
    }),
    Name: styled.span(({ theme }) => ({
      ...theme.typography.body2,
    })),
    Position: styled.span(({ theme }) => ({
      ...theme.typography.body1,
      color: theme.colors.gray[500],
      marginLeft: '2px',
    })),
    Date: styled.span(({ theme }) => ({
      ...theme.typography.body3,
      color: theme.colors.gray[500],
    })),
  },

  MetaWrapper: styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1.6rem',
  }),

  Markdown: styled(MDEditor.Markdown)({
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '1.6rem',
    borderRadius: '0.8rem',
    width: '100%',
    maxHeight: '16rem',
    overflow: 'hidden',
  }),

  MarkdownWrapper: styled.div(({ theme }) => ({
    position: 'relative',
    backgroundColor: '#ffffff',
    color: '#000000',
    maxHeight: '16rem',
    overflow: 'hidden',
    cursor: 'pointer',
    width: '100%',
    border: '1px solid',
    borderColor: theme.colors.gray[100],
    borderRadius: '0.8rem',
  })),
};
