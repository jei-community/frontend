import { PropsWithChildren } from 'react';

import { TechStackData } from '@/types/project';

import DraggableScroller from '@/components/DraggableScroll';
import { S } from '@/components/TechStackList/style';

interface Props {
  techStacks: TechStackData[];
  display?: 'flex' | 'grid';
}

function Title({ children }: PropsWithChildren) {
  return <S.PositionTitle>{children}</S.PositionTitle>;
}

export default function TechStackList({ techStacks, display = 'flex' }: Props) {
  return (
    <S.PositionContainer>
      {display === 'flex' ? (
        <S.TechStackImgFlexList>
          <DraggableScroller>
            {techStacks.map(({ url, tag }, index) => {
              return (
                <li key={index}>
                  <S.TechStackImg src={url} alt={`${tag} 이미지`} />
                </li>
              );
            })}
          </DraggableScroller>
        </S.TechStackImgFlexList>
      ) : (
        <S.TechStackImgGridList>
          {techStacks.map(({ url, tag }, index) => {
            return (
              <li key={index}>
                <S.TechStackImg src={url} alt={`${tag} 이미지`} />
              </li>
            );
          })}
        </S.TechStackImgGridList>
      )}
    </S.PositionContainer>
  );
}

TechStackList.Title = Title;
