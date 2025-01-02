import { S as ProjectItemTitleStyle } from '@/pages/ProjectItem/components/Title/style';
import styled from '@emotion/styled';

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 36rem;
    height: 54rem;

    gap: 1.6rem;
    padding: 2.4rem;

    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray[200]};

    border-radius: 16px;

    &:hover {
      box-shadow: 0 0 0.8rem ${({ theme }) => theme.colors.gray[300]};
    }
  `,

  Title: styled.h2(({ theme }) => ({
    display: '-webkit-box',

    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 1,

    color: theme.colors.gray[800],
    ...theme.typography.subtitle,
  })),

  Thumbnail: styled.img(({ theme }) => ({
    width: '100%',
    height: '31.2rem',

    borderRadius: 8,

    backgroundColor: theme.colors.primary[300],
  })),

  ContentContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
  }),

  BadgeContainer: styled.div({
    marginLeft: 'auto', // Badge를 항상 오른쪽 끝으로 이동
  }),

  Description: styled.p(({ theme }) => ({
    display: '-webkit-box',

    flex: 1,

    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 4,

    color: theme.colors.gray[800],
    ...theme.typography.body3,
  })),

  ProjectItemTitleStyle,
};
