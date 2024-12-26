import { useState } from 'react';

import { formatKoreanDate } from '@/utils/common';

import Avatar from '@/components/Avatar';

import { S } from './style';

interface User {
  id: string;
  profileImageUrl: string | null;
  name: string;
  role: string;
}

interface Album {
  id: string;
  content: string;
  date: Date;
  photos: string[];
}

interface Props {
  user: User;
  albums: Album;
}

export default function AlbumItem({ user, albums }: Props) {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const handleSelectPhoto = (index: number) => {
    setSelectedPhoto(index);
  };

  return (
    <S.Container>
      <S.Header>
        <S.User.Wrapper>
          <Avatar size='small' src={user.profileImageUrl ?? ''} />
          <S.User.Name>{user.name}</S.User.Name>
        </S.User.Wrapper>
        <S.CreateTime>{formatKoreanDate(albums.date)}</S.CreateTime>
      </S.Header>
      <S.Content>
        <S.SelectedPhoto src={albums.photos[selectedPhoto]} />
        <S.PhotoList>
          {albums.photos.map((item, index) => {
            return <S.PhotoItem src={item} onClick={() => handleSelectPhoto(index)} $isSelected={index === selectedPhoto} />;
          })}
        </S.PhotoList>
      </S.Content>
      <S.Text>{albums.content}</S.Text>
    </S.Container>
  );
}
