import { useEffect, useRef, useState } from 'react';

import { Thumbnail } from '../../assets';
import ReadMoreButton from '../ReadMoreButton';
import { S } from './style';

export default function ArticleItem() {
  const [isClamped, setIsClamped] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseFloat(getComputedStyle(contentRef.current).lineHeight); // 한 줄의 높이
      const maxHeight = lineHeight * 3; // 텍스트 세줄의 높이
      const actualHeight = contentRef.current.offsetHeight; // 실제 텍스트 높이

      setIsClamped(actualHeight > maxHeight); // 콘텐츠 높이가 3줄 초과인지 확인
    }
  }, []);

  return (
    <S.Container>
      <S.ArticleMetaWrapper>
        <S.AuthorInfo.Wrapper>
          <S.AuthorInfo.Avatar src={Thumbnail} />
          <S.AuthorInfo.Name>123</S.AuthorInfo.Name>
        </S.AuthorInfo.Wrapper>
        <S.Time>5시간 전</S.Time>
      </S.ArticleMetaWrapper>
      <S.Description.title>123 </S.Description.title>
      <S.Description.content ref={contentRef} $isClamped={isClamped}>
        Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada.
        Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris
        euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie
        egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet
        at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In
        convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis
        facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur.
      </S.Description.content>
      {isClamped && <ReadMoreButton onClick={() => console.log('더보기 클릭')} />}
    </S.Container>
  );
}
