import { useNavigate } from 'react-router';

import { DummyData } from '@/types/album';

import Aside from '@/components/Aside';
import Button from '@/components/Button';
import Content from '@/components/Content';
import EmptyContent from '@/components/EmptyContent';
import Profile from '@/components/Profile';

import AlbumItem from './component/AlbumItem/AlbumItem';
import { S } from './style';

export default function AlbumList() {
  const navigate = useNavigate();

  /** 앨범 리스트조회 더미데이터 */
  const dummyData: DummyData = {
    data: [
      {
        user: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66af11',
          profileImageUrl: 'https://via.placeholder.com/64',
          name: '임범규',
          role: '연구원',
        },
        albums: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          content: '대충 어디 가서 대충 찍은 사진',
          date: new Date('2024-12-26T19:57:45.212Z'),
          photos: ['https://via.placeholder.com/50', 'https://via.placeholder.com/50', 'https://via.placeholder.com/64'],
        },
      },
      // {
      //   user: {
      //     id: '3fa85f64-5717-4562-b3fc-2c963f66af11',
      //     profileImageUrl: 'https://via.placeholder.com/64',
      //     name: '김성찬',
      //     role: '연구원',
      //   },
      //   albums: {
      //     id: '3fa85f64-5717-4562-b3fc-2c963f66afa7',
      //     content: '대충 어디 가서 대충 찍은 사진 두번쨰 글',
      //     date: new Date('2024-12-24T07:52:45.212Z'),
      //     photos: ['https://via.placeholder.com/50', 'https://via.placeholder.com/64', 'https://via.placeholder.com/160'],
      //   },
      // },
      // {
      //   user: {
      //     id: '3fa85f64-5717-4562-b3fc-2c963f66af11',
      //     profileImageUrl: 'https://via.placeholder.com/64',
      //     name: '전증훈',
      //     role: '연구원',
      //   },
      //   albums: {
      //     id: '3fa85f64-5717-4562-b3fc-2c963f66afa8',
      //     content: '메리 크리스마스입니다람쥐',
      //     date: new Date('2024-12-24T07:52:45.212Z'),
      //     photos: [
      //       'https://via.placeholder.com/100',
      //       'https://via.placeholder.com/50',
      //       'https://via.placeholder.com/150',
      //       'https://via.placeholder.com/50',
      //       'https://via.placeholder.com/80',
      //     ],
      //   },
      // },
    ],
    pagination: {
      totalCount: 0,
      page: 0,
      limit: 0,
      hasNext: true,
    },
  };

  /** 사진 업로드하기 클릭 메서드 */
  const handleEditor = () => {
    navigate('/albums/editor');
  };

  /** 내가 올린 앨범 보기 클릭 메서드 */
  const handleMyAlbums = () => {
    console.log('내가 올린 앨범 보기 클릭 메서드');
  };

  return (
    <>
      <Aside>
        <S.AsideContainer>
          <Profile />
          <S.ButtonWrapper>
            <Button onClick={handleEditor}>사진 업로드하기</Button>
            <Button onClick={handleMyAlbums} color='neutral'>
              내가 올린 앨범 보기
            </Button>
          </S.ButtonWrapper>
        </S.AsideContainer>
      </Aside>
      <Content>
        <S.ContentContainer>
          {dummyData.data.length === 0 ? (
            <S.EmptyWrapper>
              <EmptyContent size='large'>볼 수 있는 앨범이 없어요.</EmptyContent>
            </S.EmptyWrapper>
          ) : (
            dummyData?.data?.map((item) => {
              return <AlbumItem key={item.albums.id} user={item.user} albums={item.albums} />;
            })
          )}
        </S.ContentContainer>
      </Content>
      <Aside />
    </>
  );
}
