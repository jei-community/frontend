import Aside from '@/components/Aside';
import Content from '@/components/Content';
import Divider from '@/components/Divider';
import DraggableScroller from '@/components/DraggableScroll';

import styled from '@emotion/styled';

export default function Project() {
  return (
    <>
      <Content>
        <S.Container>
          <S.HeaderContainer>
            <S.Thumbnail src='https://via.placeholder.com/100' alt='thumbnail' />
            <S.RightContainer>
              <S.TitleContainer>
                <S.Title>EVERYDEI</S.Title>
                <S.Badge>
                  <S.BadgeText>서비스</S.BadgeText>
                </S.Badge>
              </S.TitleContainer>
              <Divider direction='horizontal' />
              <S.MemberAndDateContainer>
                <S.MemberInfoContainer>
                  <S.PhotoContainer>
                    {Array.from({ length: 5 }, (_, index) => {
                      return (
                        <li key={index}>
                          <S.Photo src='https://via.placeholder.com/50' alt='photo' />
                        </li>
                      );
                    })}
                  </S.PhotoContainer>
                  <S.MemberCountText>+n명</S.MemberCountText>
                </S.MemberInfoContainer>
                <S.DateText>2024. 00. 00 ~ 2024. 00. 00</S.DateText>
              </S.MemberAndDateContainer>
            </S.RightContainer>
          </S.HeaderContainer>
          <S.DescribeContainer>
            <S.SubTitle>프로젝트 설명</S.SubTitle>
            <S.DescribeContent>
              Lorem ipsum dolor sit amet consectetur. Nunc enim at dignissim condimentum. A vel odio nibh ullamcorper. Cursus purus in ultrices
              posuere sed ut. Amet a diam purus vitae ipsum eleifend mi quisque tortor. Odio sed tellus suscipit sem volutpat. Aliquam amet
              sollicitudin varius laoreet eget sollicitudin. Id vestibulum arcu molestie mauris suspendisse aliquet magna convallis. Ut vulputate
              ornare sollicitudin mattis amet a ante et. Sed vulputate consectetur lorem rhoncus tempus tempus a risus. Sit eu in quam fermentum non
              interdum et risus. Orci nulla vitae venenatis donec vulputate magnis enim lobortis. Elementum egestas neque venenatis nunc...
            </S.DescribeContent>
            <S.MoreButtonWrapper>
              <S.MoreButton>더 보기</S.MoreButton>
            </S.MoreButtonWrapper>
          </S.DescribeContainer>
          <S.StackAndEnvContainer>
            <S.SubTitle>기술 스택</S.SubTitle>
            <S.PositionContainer>
              <S.PositionTitle>Frontend</S.PositionTitle>
              <S.TechStackImgContainer>
                <DraggableScroller>
                  {Array.from({ length: 7 }, (_, index) => {
                    return (
                      <li key={index}>
                        <S.TechStackImg src='https://via.placeholder.com/100' alt='tech stack' />
                      </li>
                    );
                  })}
                </DraggableScroller>
              </S.TechStackImgContainer>
            </S.PositionContainer>
            <S.PositionContainer>
              <S.PositionTitle>Backend</S.PositionTitle>
              <S.TechStackImgContainer>
                {Array.from({ length: 5 }, (_, index) => {
                  return (
                    <li key={index}>
                      <S.TechStackImg src='https://via.placeholder.com/100' alt='tech stack' />
                    </li>
                  );
                })}
              </S.TechStackImgContainer>
            </S.PositionContainer>
            <S.MoreButtonWrapper>
              <S.MoreButton>더 보기</S.MoreButton>
            </S.MoreButtonWrapper>
            <S.SubTitle>환경 변수</S.SubTitle>
            <S.EnvBoard>
              <S.EnvButton>내용 표시</S.EnvButton>
            </S.EnvBoard>
          </S.StackAndEnvContainer>
        </S.Container>
      </Content>
      <Aside position='right'></Aside>
    </>
  );
}

const S = {
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '3.2rem',
    padding: '3.2rem 1.6rem',
  }),

  HeaderContainer: styled.div({
    display: 'flex',

    width: '100%',

    gap: '1.6rem',
    paddingBottom: '3.2rem',
  }),

  Thumbnail: styled.img({
    width: '10rem',
    height: '10rem',

    borderRadius: 8,
  }),

  RightContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    flex: 1,

    gap: '1.2rem',
  }),

  TitleContainer: styled.div({
    display: 'flex',
    alignItems: 'center',

    gap: '1.6rem',
  }),

  Title: styled.h2(({ theme }) => ({
    color: theme.colors.gray[900],
    ...theme.typography.title,
  })),

  Badge: styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '6.4rem',
    height: '2.4rem',

    padding: '0.4rem 1.2rem',

    borderRadius: 40,

    backgroundColor: theme.colors.success[500],
  })),

  BadgeText: styled.p(({ theme }) => ({
    color: theme.colors.white,
    ...theme.typography.body4,
  })),

  MemberAndDateContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
  }),

  MemberInfoContainer: styled.div({
    display: 'flex',

    alignItems: 'center',

    gap: '0.8rem',
  }),

  PhotoContainer: styled.ul({
    display: 'flex',

    gap: '0.4rem',
  }),

  Photo: styled.img({
    width: '3.2rem',
    height: '3.2rem',

    borderRadius: 64,
  }),

  MemberCountText: styled.p(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.body4,
  })),

  DateText: styled.p(({ theme }) => ({
    color: theme.colors.gray[500],
    ...theme.typography.body1,
  })),

  // 설명

  DescribeContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '1.6rem',
  }),

  SubTitle: styled.h3(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.subtitle,
  })),

  DescribeContent: styled.p(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.body1,
  })),

  MoreButtonWrapper: styled.div({
    display: 'flex',
    justifyContent: 'end',
  }),

  MoreButton: styled.button(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '9.6rem',
    height: '3.2rem',

    border: '2px solid',
    borderColor: theme.colors.primary[500],
    borderRadius: 4,

    color: theme.colors.primary[500],
    backgroundColor: theme.colors.white,
  })),

  // 기술스택 & 환경변수

  StackAndEnvContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '1.6rem',
  }),

  PositionContainer: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '1.6rem',
  }),

  PositionTitle: styled.h4(({ theme }) => ({
    color: theme.colors.gray[800],
    ...theme.typography.body2,
  })),

  TechStackImgContainer: styled.ul({
    display: 'flex',

    gap: '1.6rem',

    overflowX: 'auto',
  }),

  TechStackImg: styled.img({
    width: '10rem',
    height: '10rem',
  }),

  EnvBoard: styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '9.6rem',

    backgroundColor: theme.colors.gray[100],
  })),

  EnvButton: styled.button(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '9.6rem',
    height: '3.2rem',

    borderRadius: 4,

    color: theme.colors.gray[900],
    backgroundColor: theme.colors.warning[500],
  })),
};
