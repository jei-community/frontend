import { getBoardList } from 'everydei-api-dev/lib/apis/functional/boards';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import Aside from '@/components/Aside';
import Button from '@/components/Button';
import Content from '@/components/Content';
import EmptyContent from '@/components/EmptyContent';
import Profile from '@/components/Profile';

import { useUserInfoStore } from '@/store';
import { useSuspenseQuery } from '@tanstack/react-query';

import PostItem from './components/PostItem';
import { S } from './style';

/** 포스트 목록을 보여주는 페이지 */
export default function PostList() {
  const [isMyPosts, setIsMyPosts] = useState(false);

  const { userId } = useUserInfoStore();
  const { data } = useSuspenseQuery({
    queryKey: ['postList'],
    queryFn: () =>
      getBoardList({
        host: 'https://api-dev.everydei.site/api/v1',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
  });

  const navigate = useNavigate();

  /** 내가 쓴 포스트 보기 클릭 메서드 */
  const handleMyPosts = () => {
    setIsMyPosts(!isMyPosts);
  };

  /** 사진 업로드하기 클릭 메서드 */
  const handleEditor = () => {
    navigate('/posts/editor');
  };

  // 내가 쓴 포스트 보기 여부에 따른 데이터 관리
  const filteredData = isMyPosts ? data?.filter((item) => item.user.id === userId) : data;

  return (
    <>
      <Aside>
        <S.AsideContainer>
          <Profile />
          <S.ButtonWrapper>
            <Button onClick={handleEditor}>새 포스트 쓰기</Button>
            <Button onClick={handleMyPosts} color='neutral'>
              {isMyPosts ? '전체 포스트 보기' : '내가 쓴 포스트 보기'}
            </Button>
          </S.ButtonWrapper>
        </S.AsideContainer>
      </Aside>
      <Content>
        <S.ContentContainer>
          {filteredData.length === 0 ? (
            <S.EmptyWrapper>
              <EmptyContent size='large'>볼 수 있는 포스트가 없어요.</EmptyContent>
            </S.EmptyWrapper>
          ) : (
            filteredData?.map((item) => {
              return <PostItem key={item.id} item={item} />;
            })
          )}
        </S.ContentContainer>
      </Content>
      <Aside />
    </>
  );
}
