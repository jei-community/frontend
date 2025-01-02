import { RefObject } from 'react';

import { LinkItem } from '@/types/project';

import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import { useTooltipStore } from '@/components/Tooltip/store';

import { S } from '@/pages/ProjectItem/components/TooltipList/style';

interface Props {
  links: LinkItem;
  ref?: RefObject<HTMLUListElement | null>;
  locked?: boolean;
}

export default function TooltipList({ links, ref, locked }: Props) {
  const { onShowTooltip } = useTooltipStore();

  return (
    <S.TooltipList ref={ref}>
      {links?.map(({ id, url, tag, items }) => {
        return (
          <Tooltip
            key={id}
            id={id}
            arrowPosition='top-right'
            locked={locked}
            content={
              <S.LinkList>
                {items?.map((item: string) => {
                  return (
                    <Button key={item} color='primary' size='full'>
                      {item}
                    </Button>
                  );
                })}
              </S.LinkList>
            }
          >
            <S.TooltipImage src={url} alt={`${tag} 이미지`} onClick={(event) => onShowTooltip(id, event.currentTarget)} />
          </Tooltip>
        );
      })}
    </S.TooltipList>
  );
}
