import { RefObject } from 'react';

import DraggableScroller from '@/components/DraggableScroll';

import { S } from '@/pages/Project/components/HyperlinkList/style';

interface Props {
  ref: RefObject<HTMLUListElement | null>;
}

// TODO(증훈): 서버 데이터로 교체

export default function HyperlinkList({ ref }: Props) {
  return (
    <S.HyperlinkList ref={ref}>
      <DraggableScroller>
        {Array.from({ length: 5 }, (_, index) => {
          return (
            <li key={index}>
              <S.HyperlinkTooltipContainer>
                <S.HyperlinkImage src='https://via.placeholder.com/32' alt='hyperlink' />
              </S.HyperlinkTooltipContainer>
            </li>
          );
        })}
      </DraggableScroller>
    </S.HyperlinkList>
  );
}
