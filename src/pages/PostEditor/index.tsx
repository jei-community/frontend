import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import Aside from '@/components/Aside';
import Button from '@/components/Button';
import Content from '@/components/Content';

import MarkdownEditor from './components/MarkdownEditor';
import { useDeleteBoardMutation, useEditBoardMutation, usePostBoardMutation } from './hooks';
import { S } from './style';

interface State {
  id: string;
  title: string;
  content: string;
}

/** 포스트 작성 페이지 */
export default function PostEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as State;

  const [title, setTitle] = useState<string>(state?.title ?? '');
  const [value, setValue] = useState<string | undefined>(state?.content ?? '');

  /** 게시글 수정 mutate */
  const editBoardMutation = useEditBoardMutation();
  /** 게시글 등록 mutate */
  const postBoardMutation = usePostBoardMutation();
  /** 게시글 삭제 mutate */
  const deleteBoardMutation = useDeleteBoardMutation();

  /** 제목 입력값이 변경될 때 호출되는 핸들러 */
  const handleChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  /** 수정 혹은 등록 버튼 클릭 핸들러 */
  const handleConfirm = () => {
    if (state) {
      const isEdit = confirm('정말로 수정하시겠습니까?');
      if (isEdit) {
        const body = { title: title, content: value };
        editBoardMutation.mutate({ itemId: location?.state?.id, body: body });
        navigate('/posts/list');
      }
    } else {
      const isRegister = confirm('등록하시겠습니까?');
      if (isRegister) {
        const body = { title: title, content: value };
        postBoardMutation.mutate({ body: body });
        navigate('/posts/list');
      }
    }
  };

  /** 취소 버튼 클릭 핸들러 */
  const handleCancel = () => {
    navigate(-1);
  };

  /** 삭제 버튼 클릭 핸들러 */
  const handleDelete = async () => {
    const isDelete = confirm('정말로 삭제하시겠습니까?');
    if (isDelete) {
      deleteBoardMutation.mutate(location?.state?.id);
      navigate('/posts/list');
    }
  };

  return (
    <>
      <Aside />
      <Content>
        <S.ContentContainer>
          <S.PageTitle>{state ? '포스트 수정' : '새 포스트 등록'}</S.PageTitle>
          <S.TextArea placeholder='제목을 입력해주세요.' value={title} onChange={handleChangeTitle} />

          <MarkdownEditor title={title} value={value} setValue={setValue} />
        </S.ContentContainer>
      </Content>
      <Aside>
        <S.AsideContainer>
          <S.AsideButtonWrapper>
            <Button color='success' disabled={!title || !value} onClick={handleConfirm}>
              {state ? '수정' : '등록'}
            </Button>
            <Button color='neutral' onClick={handleCancel}>
              취소
            </Button>
          </S.AsideButtonWrapper>
          {state && (
            <div>
              <Button color='error' onClick={handleDelete}>
                삭제
              </Button>
            </div>
          )}
        </S.AsideContainer>
      </Aside>
    </>
  );
}
