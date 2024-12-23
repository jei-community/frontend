import styled from '@emotion/styled';
import MDEditor from '@uiw/react-md-editor';

export const S = {
  Container: styled.div({
    width: '100%',
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
      marginRight: '2px',
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

  Description: styled.div(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.colors.gray[800],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp: 5,
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
  })),

  Markdown: styled(MDEditor.Markdown)(({ theme }) => ({
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '1.6rem',
    border: '1px solid',
    borderColor: theme.colors.gray[100],
    borderRadius: '0.8rem',
    maxHeight: '16rem',
    overflow: 'hidden',
  })),

  MarkdownWrapper: styled.div`
    position: relative;
    background-color: #ffffff;
    color: #000000;
    padding: 1.6rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[100]};
    border-radius: 0.8rem;
    max-height: 16rem;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 8rem; /* Blur height */
      background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
      pointer-events: none; /* Allow clicks through the blur */
    }
  `,
};
