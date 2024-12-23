import { useState } from 'react';

import { S } from './style/post';

/** 아티클 포스트 컴포넌트 */
export default function Post() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Article.Container $isOpen={isOpen}>
      <S.Article.Title>title</S.Article.Title>
      <S.Article.Info.Container>
        <S.Article.Info.profileContainer>
          <S.Article.Info.Avatar src='' />
          <S.Article.Info.Name>name</S.Article.Info.Name>
        </S.Article.Info.profileContainer>
        <S.Article.Info.date>2025-01-01</S.Article.Info.date>
      </S.Article.Info.Container>
      <S.Article.Description $isOpen={isOpen}>
        Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada.
        Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris
        euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie
        egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet
        at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In
        convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis
        facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero.
        Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit
        amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate
        praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae
        gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem
        ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum
        hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod
        risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas
        placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at
        malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat.
      </S.Article.Description>
      <S.Article.Buttons.Container>
        <S.Article.Buttons.textButton>원본 링크로 이동</S.Article.Buttons.textButton>
        <S.Article.Buttons.textButton onClick={() => setIsOpen(!isOpen)}>{isOpen ? '접기' : '펼치기'}</S.Article.Buttons.textButton>
      </S.Article.Buttons.Container>
    </S.Article.Container>
  );
}
