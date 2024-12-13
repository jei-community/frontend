import { MEDIA_QUERY } from '@/constants';
import styled from '@emotion/styled';

export const S = {
  Aside: styled.aside<{ $position: string }>`
    display: flex;

    flex: 1;

    border-left: ${({ $position }) => $position === 'right' && '1px solid #E0E0E0'};
    border-right: ${({ $position }) => $position === 'left' && '1px solid #E0E0E0'};

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
