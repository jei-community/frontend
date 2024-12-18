import theme from '@/styles/theme';
import styled from '@emotion/styled';

interface ContentProps {
  $isClamped: boolean;
}

export const S = {
  Container: styled.div(({ theme }) => ({
    flex: '0 0 auto',
    width: '38.4rem',
    height: '21.6rem',
    backgroundColor: theme.colors.gray[200],
    borderRadius: '1.6rem',
    padding: '1.6rem',
  })),

  AuthorInfo: {
    Wrapper: styled.div({
      display: 'flex',
      alignItems: 'center',
    }),
    Avatar: styled.img({
      width: '3.2rem',
      height: '3.2rem',
      borderRadius: '999rem',
      objectFit: 'contain',
      marginRight: '2px',
    }),
    Name: styled.span({
      ...theme.typography.body2,
    }),
  },

  ArticleMetaWrapper: styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1.6rem',
  }),

  Time: styled.span({
    ...theme.typography.body3,
  }),

  Description: {
    title: styled.div({
      ...theme.typography.body2,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }),

    content: styled.div<ContentProps>(({ theme, $isClamped }) => ({
      ...theme.typography.body1,
      color: theme.colors.gray[800],
      margin: '0.8rem 0',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      lineClamp: $isClamped ? 3 : 'none',
      WebkitLineClamp: $isClamped ? 3 : 'none',
      WebkitBoxOrient: 'vertical',
    })),
  },
};
