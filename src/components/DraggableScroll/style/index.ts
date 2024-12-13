import styled from '@emotion/styled';

export const S = {
  scrollerStyle: styled.div({
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    overflowX: 'auto',
    // scrollBehavior: 'smooth',
    // 스크롤바 숨기기
    '&::-webkit-scrollbar': {
      display: 'none', // 크롬, 사파리
    },
    msOverflowStyle: 'none', // IE, Edge (camelCase로 수정)
    scrollbarWidth: 'none', // Firefox
  }),
};
