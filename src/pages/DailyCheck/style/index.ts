import styled from '@emotion/styled';

/** 일일점검 페이지 스타일 */
export const S = {
  /** 일일점검 페이지 콘텐츠 컨테이너 */
  Container: styled.div({
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2.4rem 1.6rem',
    gap: '2.4rem',
  }),
  /** 페이지 타이틀 */
  PageTitle: styled.div(({ theme }) => ({
    color: theme.colors.gray[500],
    ...theme.typography.subtitle,
    margin: '0 0 1rem 0',
  })),
  /** 일일점검 시트 타이틀 */
  SheetTitle: styled.span(({ theme }) => ({
    color: theme.colors.gray[900],
  })),
};
