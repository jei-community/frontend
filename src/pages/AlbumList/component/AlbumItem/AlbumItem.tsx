import { useState } from 'react';

import { formatKoreanDate } from '@/utils/common';

import Avatar from '@/components/Avatar';
import TextArea from '@/components/TextArea';

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
  const [isOpenCommentArea, setIsOpenCommentArea] = useState(false);

  /** 상단에 보여줄 사진 변경 */
  const handleSelectPhoto = (index: number) => {
    setSelectedPhoto(index);
  };

  /** 댓글 오픈 여부 변경 */
  const handleOpenComentArea = () => {
    setIsOpenCommentArea(!isOpenCommentArea);
  };

  /** 댓글 등록 함수 */
  const handleRegisterReply = () => {
    console.log('댓글 등록');
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
      <S.CommentArea>
        댓글 3개 {isOpenCommentArea ? <S.ChevronUp onClick={handleOpenComentArea} /> : <S.ChevronDown onClick={handleOpenComentArea} />}
      </S.CommentArea>
      {isOpenCommentArea && (
        <S.Comment>
          <S.InputWrapper>
            <TextArea placeholder='댓글을 입력해주세요.' />
            <S.Button size='small' onClick={handleRegisterReply}>
              등록
            </S.Button>
          </S.InputWrapper>
        </S.Comment>
      )}
    </S.Container>
  );
}
