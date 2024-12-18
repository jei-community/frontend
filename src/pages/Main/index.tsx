import Aside from '@/components/Aside';
import Content from '@/components/Content';
import DraggableScroller from '@/components/DraggableScroll';

import { ArticleItem, MyProjectItem, PostItem } from './components';
import { S } from './style';

export default function Main() {
  return (
    <>
      <Aside>123</Aside>
      <Content>
        <S.CategoryTitle>내 프로젝트</S.CategoryTitle>
        <DraggableScroller>
          <S.MyProject.Wrapper>
            <MyProjectItem status={'03'} thumbnail={'01'} title='코코블' />
            <MyProjectItem status={'02'} thumbnail={'01'} title='코코블' />
            <MyProjectItem status={'01'} thumbnail={'01'} title='코코블' />
            <MyProjectItem status={'02'} thumbnail={'01'} title='코코블' />
            <MyProjectItem status={'03'} thumbnail={'01'} title='코코블' />
          </S.MyProject.Wrapper>
        </DraggableScroller>

        <S.Divider />

        <S.CategoryTitle>아티클</S.CategoryTitle>
        <DraggableScroller>
          <S.Article.Wrapper>
            <ArticleItem />
            <ArticleItem />
            <ArticleItem />
          </S.Article.Wrapper>
        </DraggableScroller>

        <S.Divider />

        <S.CategoryTitle>최신 포스트</S.CategoryTitle>
        <S.Post.Wrapper>
          <PostItem
            name='임범규'
            position='연구원'
            title='REACT19 알아보기'
            description='Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada.
        Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris
        euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie
        egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet
        at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In
        convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis
        facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada.
        Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris
        euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie
        egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet
        at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In
        convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis
        facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur.'
            date='2024. 12. 12'
          />
          <PostItem
            name='임범규'
            position='연구원'
            title='REACT19 알아보기'
            description='Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada.
        Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris
        euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie
        egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet
        at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In
        convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis
        facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada.
        Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris
        euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie
        egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet
        at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In
        convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis
        facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur.'
            date='2024. 12. 12'
          />
        </S.Post.Wrapper>
      </Content>
      <Aside>1234</Aside>
    </>
  );
}
