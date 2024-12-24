import { RefObject } from 'react';

import { LinkItem, LinkType } from '@/types/project';

import { ICONS } from '@/constants/link';

import DraggableScroller from '@/components/DraggableScroll';

import { S } from '@/pages/ProjectItem/components/TooltipList/style';

interface Props {
  links: LinkItem[];
  ref?: RefObject<HTMLUListElement | null>;
}

export default function TooltipList({ links, ref }: Props) {
  return (
    <S.TooltipList ref={ref}>
      <DraggableScroller>
        {links.map(({ url, tag }) => {
          console.log(url);

          return (
            <li key={tag}>
              <S.TooltipContainer>
                <S.TooltipImage src={ICONS[tag as LinkType]} alt={`${tag} 이미지`} />
              </S.TooltipContainer>
            </li>
          );
        })}
      </DraggableScroller>
    </S.TooltipList>
  );
}
