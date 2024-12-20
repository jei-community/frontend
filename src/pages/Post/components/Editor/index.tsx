import { useState } from 'react';

import Aside from '@/components/Aside';
import Button from '@/components/Button';
import Content from '@/components/Content';

import MarkdownEditor from '../MarkdownEditor';
import { S } from './style';

/** 포스트 작성 페이지 */
export default function PostEditor() {
  const [title, setTitle] = useState<string>('');
  const [value, setValue] = useState<string>();

  /** 제목 입력값이 변경될 때 호출되는 핸들러 */
  const handleChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <Aside />
      <Content>
        <S.PageTitle>새 포스트 등록</S.PageTitle>
        <S.TextArea placeholder='제목을 입력해주세요.' value={title} onChange={handleChangeTitle} />

        <MarkdownEditor title={title} value={value} setValue={setValue} />
      </Content>
      <Aside>
        <Button color='success' disabled={!title || !value}>
          등록
        </Button>
        <Button color='neutral'>취소</Button>
      </Aside>
    </>
  );
}
