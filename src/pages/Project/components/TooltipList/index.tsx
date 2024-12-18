import { RefObject } from 'react';

import DraggableScroller from '@/components/DraggableScroll';

import { S } from '@/pages/Project/components/TooltipList/style';

interface Props {
  ref?: RefObject<HTMLUListElement | null>;
}

// TODO(증훈): 서버 데이터로 교체

export default function TooltipList({ ref }: Props) {
  return (
    <S.TooltipList ref={ref}>
      <DraggableScroller>
        {Array.from({ length: 5 }, (_, index) => {
          return (
            <li key={index}>
              <S.TooltipContainer>
                <S.TooltipImage
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Google_Docs_2020_Logo.svg/120px-Google_Docs_2020_Logo.svg.png'
                  alt='tooltip'
                />
              </S.TooltipContainer>
            </li>
          );
        })}
      </DraggableScroller>
    </S.TooltipList>
  );
}
