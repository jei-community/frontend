import styled from '@emotion/styled';

/** 일일점검 페이지 스타일 */
export const S = {
  /** 일일점검 페이지 콘텐츠 컨테이너 */
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',
    padding: '2.4rem',
    gap: '1.6rem',
  }),

  /** 페이지 타이틀 */
  PageTitle: styled.div(({ theme }) => ({
    color: theme.colors.gray[500],
    ...theme.typography.subtitle,
  })),

  /** 일일점검 시트 타이틀 */
  SheetTitle: styled.span(({ theme }) => ({
    color: theme.colors.gray[900],
  })),
};
