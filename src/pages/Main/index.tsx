import { useNavigate } from 'react-router';

import { Status } from '@/types/project';

import { PATH } from '@/constants/path';

import Aside from '@/components/Aside';
import Content from '@/components/Content';
import DraggableScroller from '@/components/DraggableScroll';
import EmptyContent from '@/components/EmptyContent';
import Profile from '@/components/Profile';
import TextButton from '@/components/TextButton';

import { ArticleItem, MyProjectItem, PostItem } from './components';
import DailyCheck from './components/DailyCheck';
import { S } from './style';

interface MyProjectItem {
  status: Status;
  thumbnail: string;
  title: string;
}

interface PostItem {
  name: string;
  position: string;
  title: string;
  date: Date;
  description: string;
}

export default function Main() {
  const navigate = useNavigate();

  /** 메인 - 내 프로젝트 더미데이터 */
  const dummyMyProjectItems: MyProjectItem[] = [
    //   { status: 'LIVE', thumbnail: 'https://via.placeholder.com/128', title: '코코블' },
    //   { status: 'DEVELOP', thumbnail: 'https://via.placeholder.com/128', title: 'EVERYDEI' },
    //   { status: 'STOP', thumbnail: 'https://via.placeholder.com/128', title: '재능스스로AI수학' },
  ];

  /** 메인 - 최신포스트 더미데이터 */
  const dummyPostItems: PostItem[] = [
    // {
    //   name: '임범규',
    //   position: '연구원',
    //   title: 'REACT 19 알아보기',
    //   date: new Date(),
    //   description: '# REACT 19의 등장 🚨\n ```jsx\n 1 + 1 = 2\n```',
    // },
    // {
    //   name: '임범규',
    //   position: '연구원',
    //   title: 'REACT 19 알아보기',
    //   date: new Date(),
    //   description:
    //     'Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauriseuismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestieegestas placerat. Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in ametat malesuada. Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat. Lorem ipsum dolor sit amet consectetur. Inconvallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada. Vestibulum hac vulputate praesent venenatisfacilisi molestie egestas placerat.',
    // },
  ];

  return (
    <>
      <Aside>
        <S.AsideContainer>
          <Profile />
        </S.AsideContainer>
      </Aside>
      <Content>
        <S.ContentContainer>
          <S.CategoryTitle>내 프로젝트</S.CategoryTitle>
          <DraggableScroller>
            {dummyMyProjectItems.length === 0 ? (
              <S.EmptyWrapper $minHeight={16}>
                <EmptyContent size='medium'>참여 중이거나 참여한 프로젝트가 없어요</EmptyContent>
              </S.EmptyWrapper>
            ) : (
              <S.MyProject.Wrapper>
                {dummyMyProjectItems.map((item, index) => {
                  return <MyProjectItem key={index} status={item.status} thumbnail={item.thumbnail} title={item.title} />;
                })}
              </S.MyProject.Wrapper>
            )}
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
          {dummyPostItems.length === 0 ? (
            <S.EmptyWrapper $minHeight={32}>
              <EmptyContent size='medium'>볼 수 있는 포스트가 없어요</EmptyContent>
            </S.EmptyWrapper>
          ) : (
            <S.Post.Wrapper>
              {dummyPostItems.map((item, index) => {
                return (
                  <PostItem
                    key={index}
                    name={item.name}
                    position={item.position}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                  />
                );
              })}
            </S.Post.Wrapper>
          )}
        </S.ContentContainer>
      </Content>
      <Aside>
        <DailyCheck />
      </Aside>
    </>
  );
}
