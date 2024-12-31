import { useState } from 'react';
import { useNavigate } from 'react-router';

import { formatRelativeDate } from '@/utils/common';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import TextArea from '@/components/TextArea';

import { S } from './style';

// interface Reply {
//   id: number;
//   createdAt: string;
//   userId: string;
//   content: string;
//   profileImageUrl: string | null;
//   role: string;
//   childBoardReplyList: Reply[]; // 대댓글 리스트
// }

interface User {
  id: string;
  name: string;
  profileImageUrl: string | null;
  role: string;
}

interface Props {
  item: {
    id: string;
    createdAt: string;
    title: string;
    content: string;
    user?: User; // 사용자 정보 (옵션)
    // boardReplyList: Reply[] | null;
  };
}

export default function PostItem({ item }: Props) {
  const [isOpenPost, setIsOpenPost] = useState(false);
  const navigate = useNavigate();

  /** 댓글, 포스트 오픈 여부 변경 */
  const handleOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  /** 댓글 등록 함수 */
  const handleRegisterReply = () => {
    console.log('댓글 등록');
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
