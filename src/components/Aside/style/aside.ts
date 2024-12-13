import { MEDIA_QUERY } from '@/constants';
import styled from '@emotion/styled';

export const S = {
  Aside: styled.aside<{ $position: string }>`
    display: flex;

    flex: 1;

    border-left: ${({ theme, $position }) => $position === 'right' && `1px solid ${theme.colors.gray[200]}`};
    border-right: ${({ theme, $position }) => $position === 'left' && `1px solid ${theme.colors.gray[200]}`};

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}) {
      display: none;
    }
  `,

  Content: styled.div`
    display: flex;
    flexdirection: column;

    flex: 1;
    padding: 1.6rem;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_M}) {
      display: none;
    }
  `,
};
