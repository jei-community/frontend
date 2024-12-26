import { useNavigate } from 'react-router';

import { DummyData } from '@/types/post';

import Aside from '@/components/Aside';
import Button from '@/components/Button';
import Content from '@/components/Content';
import EmptyContent from '@/components/EmptyContent';
import Profile from '@/components/Profile';

import PostItem from './components/PostItem';
import { S } from './style';

/** 포스트 목록을 보여주는 페이지 */
export default function PostList() {
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
    data: [
      {
        user: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66af11',
          profileImageUrl: 'https://via.placeholder.com/64',
          name: '임범규',
          role: '연구원',
        },
        board: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          content:
            '### 이건 h3입니다!\n```jsx\nconst test = () => return Hello World!\n```\n기본 글씨\n## 이건 h2입니다!\n```jsx\nconst test = () => return Hello World!\n```\n기본 글씨\n# 이건 h1입니다!\n```jsx\nconst test = () => return Hello World!\n```\n기본 글씨',
          date: new Date('2024-12-24T02:52:45.212Z'),
          title: '마크다운 알아보기',
        },
      },
    ],
    pagination: {
      totalCount: 0,
      page: 0,
      limit: 0,
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
