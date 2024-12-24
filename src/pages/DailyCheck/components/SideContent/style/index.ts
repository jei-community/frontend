import styled from '@emotion/styled';

/** 사이드 컨텐츠 스타일 */
export const S = {
  /** 사이트 컨텐츠 컨테이너 */
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 2.4rem 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    gap: 1.6rem;
  `,

  /** 사이드 컨텐츠 타이틀 */
  Title: styled.p(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.colors.gray[800],
  })),

  /** 버튼을 감싸는 영역 */
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
  `,
};
