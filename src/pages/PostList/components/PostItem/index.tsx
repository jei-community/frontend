import { getBoardList } from 'everydei-api-dev/lib/apis/functional/boards';
import { deleteBoardReply, postBoardReply } from 'everydei-api-dev/lib/apis/functional/boards/replies';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { getNestiaHeader } from '@/utils/api';
import { formatRelativeDate } from '@/utils/common';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import TextArea from '@/components/TextArea';

import { useUserInfoStore } from '@/store';

import { S } from './style';

type BoardItem = getBoardList.Output[number];
interface Props {
  item: BoardItem;
}

export default function PostItem({ item }: Props) {
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [comment, setComment] = useState<string>('');
  const navigate = useNavigate();

  const { userId } = useUserInfoStore();

  /** API 헤더 */
  const connection = getNestiaHeader();

  /** 댓글, 포스트 오픈 여부 변경 */
  const handleOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  /** 댓글 등록 함수 */
  const handleRegisterReply = () => {
    const postBoardReplyBody = { content: comment, boardReplyId: null };
    postBoardReply(connection, item.id, postBoardReplyBody);
  };

  /** 댓글 삭제 함수 */
  const handleDeleteReply = (replyId: number) => {
    deleteBoardReply(connection, item.id, replyId);
  };

  /** 포스트 수정 함수 */
  const handleEdit = () => {
    navigate('/posts/editor', { state: { id: item.id, title: item.title, content: item.content } });
  };

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <S.Title>{item.title}</S.Title>
          <Button size='small' color='neutral' onClick={handleEdit}>
            수정
          </Button>
        </S.TitleWrapper>
        <S.UserContainer>
          <S.User.Wrapper>
            <Avatar size='small' src={item.user?.profileImageUrl ?? ''} />
            <S.User.Name>{item.user?.name}</S.User.Name>
            <S.User.Position>{item.user?.role}</S.User.Position>
          </S.User.Wrapper>
          <S.CreateTime>{formatRelativeDate(new Date(item.createdAt))}</S.CreateTime>
        </S.UserContainer>
      </S.Header>
      <S.MarkdownWrapper>
        <S.Markdown source={item.content} $isOpen={isOpenPost} />
      </S.MarkdownWrapper>

      <S.Comment.OpenController>
        댓글 {item.boardReplyList.length}개
        <S.TextButton onClick={handleOpenPost} color='primary'>
          {isOpenPost ? '접기' : '펼치기'}
        </S.TextButton>
      </S.Comment.OpenController>
      {isOpenPost && (
        <S.Comment.Wrapper>
          <S.Comment.InputWrapper>
            <TextArea placeholder='댓글을 입력해주세요.' value={comment} onChange={(e) => setComment(e.target.value)} />
            <S.Button size='small' onClick={handleRegisterReply}>
              등록
            </S.Button>
          </S.Comment.InputWrapper>
          {/* 댓글 리스트 출력 */}
          {item.boardReplyList?.map((reply) => (
            <S.Comment.ItemWrapper key={reply.id}>
              <S.Comment.UserWrapper>
                <Avatar size='small' src={item.user?.profileImageUrl ?? ''} />
                <S.Comment.UserName>{item.user?.name}</S.Comment.UserName>
                <S.Comment.UserPosition>{item.user?.role}</S.Comment.UserPosition>
                {reply.userId === userId && (
                  <S.Comment.DeleteButton color='neutral' onClick={() => handleDeleteReply(reply.id)}>
                    삭제
                  </S.Comment.DeleteButton>
                )}
              </S.Comment.UserWrapper>
              <S.Comment.Content>{reply.content}</S.Comment.Content>
            </S.Comment.ItemWrapper>
          ))}
        </S.Comment.Wrapper>
      )}
    </S.Container>
  );
}
