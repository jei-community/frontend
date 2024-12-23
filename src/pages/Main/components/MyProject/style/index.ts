import theme from '@/styles/theme';
import styled from '@emotion/styled';

interface StatusBoxProps {
  $bgColor: keyof typeof theme.colors;
  $textColor: keyof typeof theme.colors;
}
export const S = {
  Container: styled.div({
    flex: '0 0 auto',
    width: '12.8rem',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
  }),

  Image: styled.img(({ theme }) => ({
    width: '12.8rem',
    height: '12.8rem',
    borderRadius: '1.2rem',
    objectFit: 'contain',
    backgroundColor: theme.colors.primary[300],
  })),

  StatusBox: styled.div<StatusBoxProps>(({ $bgColor, $textColor, theme }) => ({
    backgroundColor: theme.colors[$bgColor]?.[500],
    color: theme.colors[$textColor] as string,
    ...theme.typography.caption1,
    padding: '0.4rem 1.6rem',
    borderRadius: '999rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '0.8rem',
    top: '0.8rem',
  })),

  Title: styled.p(({ theme }) => ({
    ...theme.typography.body1,
    marginTop: '0.8rem',
  })),
};
