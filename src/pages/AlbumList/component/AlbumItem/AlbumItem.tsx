import { useState } from 'react';
import { useNavigate } from 'react-router';

import { formatRelativeDate } from '@/utils/common';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import TextArea from '@/components/TextArea';

import { useUserInfoStore } from '@/store';

import { S } from './style';

interface Props {
  item: {
    albumImageList: { imageKey: string; imageUrl: string }[];
    content: string;
    createdAt: string;
    id: string;
    user?: { id: string; name: string; profileImageUrl: string; role: string };
  };
}

export default function AlbumItem({ item }: Props) {
  const navigate = useNavigate();
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
  const { userId } = useUserInfoStore();

  const handleEdit = () => {
    // FileInfo 타입에 맞추기 위해 변환
    const uploadedFiles = item.albumImageList.map((image) => {
      // 추정된 파일 이름과 타입
      const name = image.imageKey.split('/').pop(); // 이미지 키에서 파일 이름 추출
      const type = `image/${name?.split('.').pop()}`; // 확장자에서 MIME 타입 추출

      // File 객체 생성 (데이터 없이 Blob 형태로 처리)
      const file = new File([], name ?? 'unknown', { type });

      return {
        name,
        size: file.size, // 파일 크기 정보가 없는 경우 기본값
        type,
        file,
        imageUrl: image.imageUrl, // 이미지 URL
      };
    });
    navigate('/albums/editor', { state: { uploadedImages: uploadedFiles, content: item.content, id: item.id } });
  };

  return (
    <S.Container>
      <S.Header>
        <S.User.Wrapper>
          <Avatar size='small' src={item.user?.profileImageUrl ?? ''} />
          <S.User.Name>{item.user?.name}</S.User.Name>
        </S.User.Wrapper>
        <S.HeaderRight>
          <S.CreateTime>{formatRelativeDate(new Date(item.createdAt))}</S.CreateTime>
          {userId === item.user?.id && (
            <Button color='neutral' size='small' onClick={handleEdit}>
              수정
            </Button>
          )}
        </S.HeaderRight>
      </S.Header>
      <S.Content>
        <S.SelectedPhoto src={item.albumImageList[selectedPhoto].imageUrl} />
        <S.PhotoList>
          {item.albumImageList.map((image, index) => {
            return <S.PhotoItem src={image.imageUrl} onClick={() => handleSelectPhoto(index)} $isSelected={index === selectedPhoto} />;
          })}
        </S.PhotoList>
      </S.Content>
      <S.Text>{item.content}</S.Text>
      <S.CommentArea>
        댓글 3개
        <S.TextButton onClick={handleOpenComentArea} color='primary'>
          {isOpenCommentArea ? '접기' : '펼치기'}
        </S.TextButton>
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
