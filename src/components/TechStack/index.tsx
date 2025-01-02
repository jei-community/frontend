import { PropsWithChildren } from 'react';

import { TechStackItem } from '@/types/project';

import DraggableScroller from '@/components/DraggableScroll';
import { S } from '@/components/TechStack/style';

interface Props {
  techStacks?: TechStackItem | null;
  display?: 'flex' | 'grid';
}

export default function TechStack({ children }: PropsWithChildren) {
  return <S.Container>{children}</S.Container>;
}

function Title({ children }: PropsWithChildren) {
  return <S.PositionTitle>{children}</S.PositionTitle>;
}

function List({ techStacks, display = 'flex' }: Props) {
  return (
    <>
      {display === 'flex' ? (
        <S.TechStackImgFlexList>
          <DraggableScroller>
            {techStacks?.map(({ url, tag }) => {
              return (
                <li key={url}>
                  <S.TechStackImg src={url} alt={`${tag} 이미지`} />
                </li>
              );
            })}
          </DraggableScroller>
        </S.TechStackImgFlexList>
      ) : (
        <S.TechStackImgGridList>
          {techStacks?.map(({ url, tag }) => {
            return (
              <li key={url}>
                <S.TechStackImg src={url} alt={`${tag} 이미지`} />
              </li>
            );
          })}
        </S.TechStackImgGridList>
      )}
    </>
  );
}

TechStack.Title = Title;
TechStack.List = List;
