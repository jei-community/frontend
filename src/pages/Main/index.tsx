import { getMainPage } from 'everydei-api-dev/lib/apis/functional/users/main_page';
import { useNavigate } from 'react-router';

import { Status } from '@/types/project';

import { PATH } from '@/constants/path';
import { QUERY_KEYS } from '@/constants/query';

import Aside from '@/components/Aside';
import Content from '@/components/Content';
import DraggableScroller from '@/components/DraggableScroll';
import EmptyContent from '@/components/EmptyContent';
import Profile from '@/components/Profile';
import TextButton from '@/components/TextButton';

import { useSuspenseQuery } from '@tanstack/react-query';

import { MyProjectItem, PostItem } from './components';
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

  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.MAIN],
    queryFn: () =>
      getMainPage({
        host: 'https://api-dev.everydei.site/api/v1',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
  });

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
            {data.projectList.length === 0 ? (
              <S.EmptyWrapper $minHeight={16}>
                <EmptyContent size='medium'>참여 중이거나 참여한 프로젝트가 없어요</EmptyContent>
              </S.EmptyWrapper>
            ) : (
              <S.MyProject.Wrapper>
                {data.projectList.map((item, index) => {
                  return <MyProjectItem key={index} status={item.status} thumbnail={item.thumbnailImageUrl} title={item.title} />;
                })}
              </S.MyProject.Wrapper>
            )}
          </DraggableScroller>

          <S.Divider />

          <S.CategoryTitle>
            <p>최신 포스트</p>
            <TextButton color='neutral' size='small' onClick={() => navigate(PATH.POSTS.INDEX)}>
              {'더 보기 >'}
            </TextButton>
          </S.CategoryTitle>
          {data.boardList.length === 0 ? (
            <S.EmptyWrapper $minHeight={32}>
              <EmptyContent size='medium'>볼 수 있는 포스트가 없어요</EmptyContent>
            </S.EmptyWrapper>
          ) : (
            <S.Post.Wrapper>
              {data.boardList.map((item, index) => {
                return (
                  <PostItem
                    key={index}
                    name={item.user.name}
                    position={item.user.role}
                    title={item.board.title}
                    description={item.board.content}
                    date={item.board.createdAt}
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
