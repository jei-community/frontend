import DraggableScroller from '@/components/DraggableScroll';

import styled from '@emotion/styled';

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

const S = {
  CategoryTitle: styled.div(({ theme }) => ({
    color: theme.colors.gray[900],
    fontFamily: theme.typography.subtitle.fontFamily,
    fontWeight: theme.typography.subtitle.fontWeight,
    fontSize: theme.typography.subtitle.fontSize,
    lineHeight: theme.typography.subtitle.lineHeight,
    margin: '0 0 1rem 0',
  })),

  MyProject: {
    Wrapper: styled.div<{ $color: string }>(({ $color }) => ({
      display: 'flex',
      columnGap: '2rem',
      backgroundColor: $color,
      margin: '0 0 4rem 0',
    })),
    Item: styled.div(({ theme }) => ({
      flex: '0 0 auto', // 고정 크기와 줄어들지 않음
      width: '20rem',
      height: '20rem',
      padding: '1rem',
      backgroundColor: theme.colors.gray[200],
    })),
  },

  Article: {
    Wrapper: styled.div({
      display: 'flex',
      columnGap: '2rem',
      margin: '0 0 4rem 0',
    }),
    Item: styled.div(({ theme }) => ({
      flex: '0 0 auto', // 고정 크기와 줄어들지 않음
      width: '40rem',
      height: '20rem',
      backgroundColor: theme.colors.gray[200],
    })),
  },

  Post: {
    Wrapper: styled.div({
      display: 'flex',
      flexDirection: 'column',
      rowGap: '2rem',
      margin: '0 0 4rem 0',
    }),
    Item: styled.div(({ theme }) => ({
      flex: '0 0 auto', // 고정 크기와 줄어들지 않음
      width: '100%',
      height: '40rem',
      backgroundColor: theme.colors.gray[200],
    })),
  },
};
