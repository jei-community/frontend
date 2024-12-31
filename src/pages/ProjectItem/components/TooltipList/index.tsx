import { RefObject } from 'react';

import { LinkItem } from '@/types/project';

import DraggableScroller from '@/components/DraggableScroll';
import Tooltip from '@/components/Tooltip';
import { useTooltipStore } from '@/components/Tooltip/store';

import { S } from '@/pages/ProjectItem/components/TooltipList/style';

interface Props {
  links: LinkItem;
  ref?: RefObject<HTMLUListElement | null>;
}

export default function TooltipList({ links, ref }: Props) {
  const { onShowTooltip } = useTooltipStore();

  return (
    <>
      <S.TooltipList ref={ref}>
        <DraggableScroller>
          {links?.map(({ id, url, tag, items }) => {
            return (
              <li key={id}>
                <Tooltip
                  id={id}
                  content={
                    <S.LinkList>
                      {items?.map((item, index) => {
                        return (
                          <li id={item + index}>
                            <S.CustomLink style={{}} to={item}>
                              {item}
                            </S.CustomLink>
                          </li>
                        );
                      })}
                    </S.LinkList>
                  }
                >
                  <S.TooltipImage src={url} alt={`${tag} 이미지`} onClick={(event) => onShowTooltip(id, event.currentTarget)} />
                </Tooltip>
              </li>
            );
          })}
        </DraggableScroller>
      </S.TooltipList>
    </>
  );
}
