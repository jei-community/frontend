import { FileText, Plus, Square, SquareCheckBig, TreePalm } from 'lucide-react';

import styled from '@emotion/styled';

/** 일일점검 테이블 스타일 */
export const S = {
  /** 테이블 헤드 속성 */
  Thead: {
    Th: styled.th<{ $width: number }>(({ $width, theme }) => ({
      width: `${$width / 10}rem`,
      height: '4rem',
      ...theme.typography.body2,
      color: theme.colors.gray[900],
      verticalAlign: 'middle',
      backgroundColor: theme.colors.gray[100],
    })),
  },
  /** 테이블 바디 속성 */
  TBody: {
    Tr: styled.tr<{ $isMyInfo: boolean }>(({ $isMyInfo, theme }) => ({
      backgroundColor: $isMyInfo ? theme.colors.secondary[300] : 'none',
      ...theme.typography.body1,
      color: theme.colors.gray[900],
      verticalAlign: 'middle',
      borderBottom: `1px solid ${theme.colors.gray[200]}`,
      padding: '1.6rem',
    })),
    Td: styled.td(({ theme }) => ({
      ...theme.typography.body1,
      color: theme.colors.gray[900],
      verticalAlign: 'middle',
      textAlign: 'center',
    })),
    TdTodo: styled.td(({ theme }) => ({
      ...theme.typography.body1,
      padding: '1.6rem',
      whiteSpace: 'pre-wrap',
    })),
  },
  /** 아이콘 스타일 */
  Icon: {
    Base: styled('svg')<{ $isToday: boolean }>(({ $isToday, theme }) => ({
      width: '2.4rem',
      height: '2.4rem',
      cursor: 'pointer',
      color: $isToday ? theme.colors.gray[900] : theme.colors.gray[400],
    })),
    Incomplete: styled(Square)<{ $isToday: boolean }>(({ $isToday, theme }) => ({
      width: '2.4rem',
      height: '2.4rem',
      cursor: 'pointer',
      color: $isToday ? theme.colors.gray[900] : theme.colors.gray[400],
    })),
    Complete: styled(SquareCheckBig)<{ $isToday: boolean }>(({ $isToday, theme }) => ({
      width: '2.4rem',
      height: '2.4rem',
      cursor: 'pointer',
      color: $isToday ? theme.colors.success[500] : theme.colors.gray[400],
    })),
    Vacation: styled(TreePalm)<{ $isToday: boolean }>(({ $isToday, theme }) => ({
      width: '2.4rem',
      height: '2.4rem',
      cursor: 'pointer',
      color: $isToday ? theme.colors.success[500] : theme.colors.gray[400],
    })),
    Memo: styled(FileText)(() => ({
      width: '2.4rem',
      height: '2.4rem',
      cursor: 'pointer',
    })),
    Plus: styled(Plus)(() => ({
      width: '2.4rem',
      height: '2.4rem',
      cursor: 'pointer',
    })),
    /** 아이콘 클릭 시 툴팁이 있는 경우 사용 */
    Container: styled.span`
      width: fit-content;
      height: fit-content;
      position: relative;
    `,
  },
};
