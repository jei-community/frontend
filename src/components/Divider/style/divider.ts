import { DividerDirection } from '@/components/Divider';

import styled from '@emotion/styled';

export const S = {
  Divider: styled.div<{ $direction: DividerDirection }>(({ theme, $direction }) => ({
    width: $direction === 'horizontal' ? '100%' : '1px',
    height: $direction === 'horizontal' ? '1px' : '100%',
    backgroundColor: theme.colors.gray[200],
  })),
};
