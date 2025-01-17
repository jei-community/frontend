import { getBoardList } from 'everydei-api-dev/lib/apis/functional/boards';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { formatRelativeDate } from '@/utils/common';

import { Role } from '@/types/album';

import { ROLE_TEXT } from '@/constants/common';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import TextArea from '@/components/TextArea';

import { useUserInfoStore } from '@/store';

import { useDeleteBoardReplyMutation, usePostBoardReplyMutation } from '../../hooks';
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

  /** 댓글 작성 mutate */
  const postBoardReplyMutation = usePostBoardReplyMutation();

  /** 댓글 삭제 mutate */
  const deleteReplyMutation = useDeleteBoardReplyMutation();

  /** 댓글, 포스트 오픈 여부 변경 */
  const handleOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  /** 댓글 등록 함수 */
  const handleRegisterReply = () => {
    if (comment) {
      const postBoardReplyBody = { content: comment, boardReplyId: null };
      postBoardReplyMutation.mutate({ itemId: item.id, body: postBoardReplyBody });
      setComment('');
    } else alert('댓글을 입력해주세요.');
  };

  /** 댓글 삭제 함수 */
  const handleDeleteReply = (replyId: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteReplyMutation.mutate({ boardId: item.id, replyId: replyId });
    }
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
          {userId === item.user.id && (
            <Button color='neutral' size='small' onClick={handleEdit}>
              수정
            </Button>
          )}
        </S.TitleWrapper>
        <S.UserContainer>
          <S.User.Wrapper>
            <Avatar size='small' src={item.user.profileImageUrl} />
            <S.User.Name>{item.user.name}</S.User.Name>
            <S.User.Position>{ROLE_TEXT[item.user.role as Role]}</S.User.Position>
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
                <Avatar size='small' src={reply.profileImageUrl} />
                <S.Comment.UserName>{reply.name}</S.Comment.UserName>
                <S.Comment.UserPosition>{ROLE_TEXT[reply.role as Role]}</S.Comment.UserPosition>
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
