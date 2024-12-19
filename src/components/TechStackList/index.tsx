import { PropsWithChildren } from 'react';

import DraggableScroller from '@/components/DraggableScroll';
import { S } from '@/components/TechStackList/style';

interface TechStacks {
  src: string;
  alt?: string;
}

interface Props {
  techStacks: TechStacks[];
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
            {techStacks.map(({ src, alt }, index) => {
              return (
                <li key={index}>
                  <S.TechStackImg src={src} alt={alt} />
                </li>
              );
            })}
          </DraggableScroller>
        </S.TechStackImgFlexList>
      ) : (
        <S.TechStackImgGridList>
          {techStacks.map(({ src, alt }, index) => {
            return (
              <li key={index}>
                <S.TechStackImg src={src} alt={alt} />
              </li>
            );
          })}
        </S.TechStackImgGridList>
      )}
    </S.PositionContainer>
  );
}

TechStackList.Title = Title;
