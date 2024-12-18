import { RefObject, useState } from 'react';

import DraggableScroller from '@/components/DraggableScroll';

import { S } from '@/pages/Project/components/TechStackAndEnvContainer/style';

interface Props {
  techStackRef: RefObject<HTMLHeadingElement | null>;
  envRef: RefObject<HTMLHeadingElement | null>;
}

// TODO(증훈): 서버 데이터로 교체, 중복되는 반복문 클린코드화
export default function TechStackAndEnvContainer({ techStackRef, envRef }: Props) {
  const [isTechStackOpen, setIsTechStackOpen] = useState(false);
  const [isEnvOpen, setIsEnvOpen] = useState(false);

  const handleToggleTechStack = () => setIsTechStackOpen(!isTechStackOpen);

  const handleOpenEnv = () => setIsEnvOpen(!isEnvOpen);

  return (
    <S.StackAndEnvContainer>
      <S.CommonS.SubTitle ref={techStackRef}>기술 스택</S.CommonS.SubTitle>
      <S.PositionContainer>
        <S.PositionTitle>Frontend</S.PositionTitle>
        {isTechStackOpen ? (
          <S.TechStackImgGridList>
            {Array.from({ length: 20 }, (_, index) => {
              return (
                <li key={index}>
                  <S.TechStackImg src='https://via.placeholder.com/100' alt='tech stack' />
                </li>
              );
            })}
          </S.TechStackImgGridList>
        ) : (
          <S.TechStackImgFlexList>
            <DraggableScroller>
              {Array.from({ length: 20 }, (_, index) => {
                return (
                  <li key={index}>
                    <S.TechStackImg src='https://via.placeholder.com/100' alt='tech stack' />
                  </li>
                );
              })}
            </DraggableScroller>
          </S.TechStackImgFlexList>
        )}
      </S.PositionContainer>
      <S.PositionContainer>
        <S.PositionTitle>Backend</S.PositionTitle>
        {isTechStackOpen ? (
          <S.TechStackImgGridList>
            {Array.from({ length: 20 }, (_, index) => {
              return (
                <li key={index}>
                  <S.TechStackImg src='https://via.placeholder.com/100' alt='tech stack' />
                </li>
              );
            })}
          </S.TechStackImgGridList>
        ) : (
          <S.TechStackImgFlexList>
            <DraggableScroller>
              {Array.from({ length: 20 }, (_, index) => {
                return (
                  <li key={index}>
                    <S.TechStackImg src='https://via.placeholder.com/100' alt='tech stack' />
                  </li>
                );
              })}
            </DraggableScroller>
          </S.TechStackImgFlexList>
        )}
      </S.PositionContainer>
      <S.CommonS.MoreButtonWrapper>
        <S.CommonS.MoreButton onClick={handleToggleTechStack}>{isTechStackOpen ? '접기' : '더 보기'}</S.CommonS.MoreButton>
      </S.CommonS.MoreButtonWrapper>
      <S.CommonS.SubTitle ref={envRef}>환경 변수</S.CommonS.SubTitle>
      <S.EnvBoard $isEnvOpen={isEnvOpen}>
        {isEnvOpen ? (
          <ul>
            {Array.from({ length: 3 }, (_, index) => {
              return (
                <li key={index}>
                  <S.EnvContentText>VITE_APP_COCOA=https://example.com</S.EnvContentText>
                </li>
              );
            })}{' '}
          </ul>
        ) : (
          <S.EnvButton onClick={handleOpenEnv}>내용 표시</S.EnvButton>
        )}
      </S.EnvBoard>
    </S.StackAndEnvContainer>
  );
}
