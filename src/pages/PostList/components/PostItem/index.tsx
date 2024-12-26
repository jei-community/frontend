import { useState } from 'react';

import { formatKoreanDate } from '@/utils/common';

import { Board, User } from '@/types/post';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import TextArea from '@/components/TextArea';

import { S } from './style';

interface Props {
  user: User;
  board: Board;
}

export default function PostItem({ user, board }: Props) {
  const [isOpenPost, setIsOpenPost] = useState(false);

  /** 댓글, 포스트 오픈 여부 변경 */
  const handleOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  /** 댓글 등록 함수 */
  const handleRegisterReply = () => {
    console.log('댓글 등록');
  };

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <S.Title>{board.title}</S.Title>
          <Button size='small' color='neutral'>
            수정
          </Button>
        </S.TitleWrapper>
        <S.UserContainer>
          <S.User.Wrapper>
            <Avatar size='small' src={user.profileImageUrl ?? ''} />
            <S.User.Name>{user.name}</S.User.Name>
            <S.User.Position>{user.role}</S.User.Position>
          </S.User.Wrapper>
          <S.CreateTime>{formatKoreanDate(board.date)}</S.CreateTime>
        </S.UserContainer>
      </S.Header>
      <S.MarkdownWrapper>
        <S.Markdown source={board.content} $isOpen={isOpenPost} />
      </S.MarkdownWrapper>

      <S.CommentArea>
        댓글 3개
        <S.TextButton onClick={handleOpenPost} color='primary'>
          {isOpenPost ? '접기' : '펼치기'}
        </S.TextButton>
      </S.CommentArea>
      {isOpenPost && (
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
