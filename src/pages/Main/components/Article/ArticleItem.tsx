import { Thumbnail } from '../../assets';
import useClampCheck from '../../hooks/useClampCheck';
import ReadMoreButton from '../ReadMoreButton';
import { S } from './style';

export default function ArticleItem() {
  const { isClamped, elementRef } = useClampCheck<HTMLDivElement>(3); // 3줄 초과 체크

  return (
    <S.Container>
      <S.ArticleMetaWrapper>
        <S.AuthorInfo.Wrapper>
          <S.AuthorInfo.Avatar src={Thumbnail} />
          <S.AuthorInfo.Name>임범규</S.AuthorInfo.Name>
        </S.AuthorInfo.Wrapper>
        <S.Time>5시간 전</S.Time>
      </S.ArticleMetaWrapper>
      <S.Description.title>React version 19 has been released! React version 19 has been released!</S.Description.title>
      <S.Description.content ref={elementRef} $isClamped={isClamped}>
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
