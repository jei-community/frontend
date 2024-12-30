// import { getBoardList } from 'everydei-api-dev/lib/apis/functional/boards';
import { useNavigate } from 'react-router';

import { DummyData } from '@/types/post';

import Aside from '@/components/Aside';
import Button from '@/components/Button';
import Content from '@/components/Content';
import EmptyContent from '@/components/EmptyContent';
import Profile from '@/components/Profile';

// import { useSuspenseQuery } from '@tanstack/react-query';

import PostItem from './components/PostItem';
import { S } from './style';

/** 포스트 목록을 보여주는 페이지 */
export default function PostList() {
  // const { data } = useSuspenseQuery({
  //   queryKey: ['postList'],
  //   queryFn: () =>
  //     getBoardList({
  //       host: 'https://api-dev.everydei.site/api/v1',
  //       headers: {
  // Authorization: `Bearer ${localStorage.getItem('token')}`,
  //       },
  //     }),
  // });
  // console.log(data);

  const navigate = useNavigate();

  /** 사진 업로드하기 클릭 메서드 */
  const handleEditor = () => {
    navigate('/posts/editor');
  };

  /** 내가 올린 앨범 보기 클릭 메서드 */
  const handleMyPosts = () => {
    console.log('내가 쓴 포스트 보기 클릭 메서드');
  };

  const dummyData: DummyData = {
    data: Array.from({ length: 3 }, (_, index) => ({
      user: {
        id: `user-${index}`,
        profileImageUrl: `https://via.placeholder.com/64?text=User${index}`,
        name: `사용자 ${index}`,
        role: `역할 ${index}`,
      },
      board: {
        id: `board-${index}`,
        content: `### 게시물 내용 ${index}\n기본 글씨입니다.`,
        date: new Date(),
        title: `게시물 제목 ${index}`,
      },
    })),
    pagination: {
      totalCount: 20,
      page: 1,
      limit: 5,
      hasNext: true,
    },
  };

  return (
    <>
      <Aside>
        <S.AsideContainer>
          <Profile />
          <S.ButtonWrapper>
            <Button onClick={handleEditor}>새 포스트 쓰기</Button>
            <Button onClick={handleMyPosts} color='neutral'>
              내가 쓴 포스트 보기
            </Button>
          </S.ButtonWrapper>
        </S.AsideContainer>
      </Aside>
      <Content>
        <S.ContentContainer>
          {dummyData.data.length === 0 ? (
            <S.EmptyWrapper>
              <EmptyContent size='large'>볼 수 있는 포스트가 없어요.</EmptyContent>
            </S.EmptyWrapper>
          ) : (
            dummyData?.data?.map((item) => {
              return <PostItem key={item.board.id} user={item.user} board={item.board} />;
            })
          )}
        </S.ContentContainer>
      </Content>
      <Aside />
    </>
  );
}
