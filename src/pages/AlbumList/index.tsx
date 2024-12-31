import { getAlbumList } from 'everydei-api-dev/lib/apis/functional/albums';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import Aside from '@/components/Aside';
import Button from '@/components/Button';
import Content from '@/components/Content';
import EmptyContent from '@/components/EmptyContent';
import Profile from '@/components/Profile';

import { useUserInfoStore } from '@/store';
import { useSuspenseQuery } from '@tanstack/react-query';

import AlbumItem from './component/AlbumItem/AlbumItem';
import { S } from './style';

export default function AlbumList() {
  const navigate = useNavigate();
  const [isMyAlbums, setIsMyAlbums] = useState(false);

  const { userId } = useUserInfoStore();
  const { data } = useSuspenseQuery({
    queryKey: ['albumList'],
    queryFn: () =>
      getAlbumList({
        host: 'https://api-dev.everydei.site/api/v1',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
  });

  /** 사진 업로드하기 클릭 메서드 */
  const handleEditor = () => {
    navigate('/albums/editor');
  };

  /** 내가 올린 앨범 보기 클릭 메서드 */
  const handleMyAlbums = () => {
    setIsMyAlbums(!isMyAlbums);
  };

  // 내가 올림 앨범 보기 여부에 따른 데이터 관리
  const filteredData = isMyAlbums
    ? data?.filter((item) => item.user.id === userId) // 내가 올린 앨범만 필터링
    : data; // 전체 앨범

  return (
    <>
      <Aside>
        <S.AsideContainer>
          <Profile />
          <S.ButtonWrapper>
            <Button onClick={handleEditor}>사진 업로드하기</Button>
            <Button onClick={handleMyAlbums} color='neutral'>
              {isMyAlbums ? '전체 앨범 보기' : '내가 올린 앨범 보기'}
            </Button>
          </S.ButtonWrapper>
        </S.AsideContainer>
      </Aside>
      <Content>
        <S.ContentContainer>
          {filteredData?.length === 0 ? (
            <S.EmptyWrapper>
              <EmptyContent size='large'>{isMyAlbums ? '올린 앨범이 없어요' : '볼 수 있는 앨범이 없어요.'}</EmptyContent>
            </S.EmptyWrapper>
          ) : (
            filteredData?.map((item) => {
              return <AlbumItem key={item.id} item={item} />;
            })
          )}
        </S.ContentContainer>
      </Content>
      <Aside />
    </>
  );
}
