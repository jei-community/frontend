import DraggableScroller from '@/components/DraggableScroll';

import { S } from './style';

export default function Main() {
  return (
    <>
      <S.CategoryTitle>내 프로젝트</S.CategoryTitle>
      <DraggableScroller>
        <S.MyProject.Wrapper $color='gray'>
          <S.MyProject.Item>123</S.MyProject.Item>
          <S.MyProject.Item>123</S.MyProject.Item>
          <S.MyProject.Item>123</S.MyProject.Item>
          <S.MyProject.Item>123</S.MyProject.Item>
          <S.MyProject.Item>123</S.MyProject.Item>
          <S.MyProject.Item>123</S.MyProject.Item>
          <S.MyProject.Item>123</S.MyProject.Item>
          <S.MyProject.Item>123</S.MyProject.Item>
          <S.MyProject.Item>123</S.MyProject.Item>
          <S.MyProject.Item>123</S.MyProject.Item>
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
    </>
  );
}
