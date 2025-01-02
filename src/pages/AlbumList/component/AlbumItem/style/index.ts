import Button from '@/components/Button';
import TextButton from '@/components/TextButton';

import styled from '@emotion/styled';

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
    justifyContent: 'space-between',
    alignItems: 'center',
  }),

  User: {
    Wrapper: styled.div({
      display: 'flex',
      alignItems: 'center',
    }),
    Name: styled.span(({ theme }) => ({
      ...theme.typography.body2,
      color: theme.colors.gray[900],
      marginLeft: '0.8rem',
    })),
  },

  HeaderRight: styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '1.6rem',
  }),

  CreateTime: styled.span(({ theme }) => ({
    ...theme.typography.body3,
    color: theme.colors.gray[500],
  })),

  Content: styled.div({ display: 'flex', flexDirection: 'column' }),
  PhotoList: styled.div({ display: 'flex', columnGap: '1.6rem' }),
  PhotoItem: styled.img<{ $isSelected: boolean }>(({ theme, $isSelected }) => ({
    width: '9.6rem',
    height: '9.6rem',
    borderRadius: '0.8rem',
    objectFit: 'cover',
    backgroundColor: theme.colors.white,
    boxShadow: $isSelected
      ? `0 0 0 3px ${theme.colors.primary[500]}` // 외부 테두리 추가
      : 'none',
  })),

  SelectedPhoto: styled.img({
    width: '100%',
    height: '38.9rem',
    borderRadius: '0.8rem',
    objectFit: 'contain',
    margin: '1.6rem 0',
  }),

  Text: styled.span(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.body1,
    margin: '1.6rem 0',
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
