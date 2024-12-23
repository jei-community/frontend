import { useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Aside from '@/components/Aside';
import Content from '@/components/Content';
import DraggableScroller from '@/components/DraggableScroll';
import TextButton from '@/components/TextButton';

import { ArticleItem, MyProjectItem, PostItem } from './components';
import { S } from './style';

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Aside>123</Aside>
      <Content>
        <S.ContentContainer>
          <S.CategoryTitle>내 프로젝트</S.CategoryTitle>
          <DraggableScroller>
            <S.MyProject.Wrapper>
              {/* TODO(범규): constants STATUS_TEXT 사용하기 */}
              <MyProjectItem status={'LIVE'} thumbnail={'01'} title='코코블' />
              <MyProjectItem status={'LIVE'} thumbnail={'01'} title='코코블' />
              <MyProjectItem status={'DEVELOP'} thumbnail={'01'} title='코코블' />
              <MyProjectItem status={'DEVELOP'} thumbnail={'01'} title='코코블' />
              <MyProjectItem status={'STOP'} thumbnail={'01'} title='코코블' />
              <MyProjectItem status={'STOP'} thumbnail={'01'} title='코코블' />
            </S.MyProject.Wrapper>
          </DraggableScroller>

          <S.Divider />

          <S.CategoryTitle>
            <p>아티클</p>
            <TextButton color='neutral' size='small' onClick={() => navigate(PATH.ARTICLES)}>
              {'더 보기 >'}
            </TextButton>
          </S.CategoryTitle>
          <DraggableScroller>
            <S.Article.Wrapper>
              <ArticleItem />
              <ArticleItem />
              <ArticleItem />
            </S.Article.Wrapper>
          </DraggableScroller>

          <S.Divider />

          <S.CategoryTitle>
            <p>최신 포스트</p>
            <TextButton color='neutral' size='small' onClick={() => navigate(PATH.POSTS.INDEX)}>
              {'더 보기 >'}
            </TextButton>
          </S.CategoryTitle>
          <S.Post.Wrapper>
            <PostItem
              name='임범규'
              position='연구원'
              title='REACT19 알아보기'
              description='
# h1
> test

**Hello World**'
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
        </S.ContentContainer>
      </Content>
      <Aside>
        <S.AsideContainer>1</S.AsideContainer>
      </Aside>
    </>
  );
}
