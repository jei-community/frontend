import Aside from '@/components/Aside';
import Content from '@/components/Content';
import DraggableScroller from '@/components/DraggableScroll';

import MyProjectItem from './components/Project/Item';
import { S } from './style';

export default function Main() {
  return (
    <>
      <Aside position='left'>123</Aside>
      <Content>
        <div>
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

          <S.CategoryTitle>아티클</S.CategoryTitle>
          <DraggableScroller>
            <S.Article.Wrapper>
              <S.Article.Item>123</S.Article.Item>
              <S.Article.Item>123</S.Article.Item>
              <S.Article.Item>123</S.Article.Item>
            </S.Article.Wrapper>
          </DraggableScroller>

          <S.CategoryTitle>최신 포스트</S.CategoryTitle>
          <S.Post.Wrapper>
            <S.Post.Item>1</S.Post.Item>
            <S.Post.Item>1</S.Post.Item>
            <S.Post.Item>1</S.Post.Item>
            <S.Post.Item>1</S.Post.Item>
          </S.Post.Wrapper>
        </div>
      </Content>
      <Aside position='right'>123</Aside>
    </>
  );
}
