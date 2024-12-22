import styled from '@emotion/styled';

/** 메인 페이지 내 일일점검 컴포넌트 스타일 */
export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    items-align: start;
    justify-content: center;
    paddig: 1.6rem;
  `,
  /** 사이드 컨텐츠 타이틀 */
  Title: styled.p(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.colors.gray[800],
    margin: '0 0 1.6rem 0',
  })),
  /** 프로젝트 단위로 일일점검 ui를 감싸는 영역 */
  ItemsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    item-align: start;
    text-align: start;
    justify-content: center;
    gap: 2.4rem;
  `,
  /** 개별 프로젝트 아이템 스타일 */
  Item: {
    Container: styled.div`
      display: flex;
      flex-direction: column;
      item-align: start;
      text-align: start;
      justify-content: center;
      width: 18.4rem;
    `,
    /** 일일점검 프로젝트 타이틀 */
    Title: styled.p(({ theme }) => ({
      color: theme.colors.gray[800],
      ...theme.typography.body4,
      margin: '0 0 0.4rem 0',
    })),
    /** 일일점검 내용 */
    Description: styled.p(({ theme }) => ({
      color: theme.colors.gray[800],
      ...theme.typography.body3,
      margin: '0 0 0.8rem 0',
    })),
  },
};
