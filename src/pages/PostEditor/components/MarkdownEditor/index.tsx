import { useEffect, useState } from 'react';

import { S } from './style';

interface Props {
  title: string;
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

/** 마크다운 작성 컴포넌트 */
export default function MarkdownEditor({ title, value, setValue }: Props) {
  const [valueWithTitle, setValueWithTitle] = useState<string>();

  /** 제목과 내용에 따라 미리보기에 보여줄 내용을 바꾸는 함수 */
  const handleValueWithTitle = (title: string, value: string | undefined) => {
    if (!title) setValueWithTitle(value);
    else setValueWithTitle(`# ${title}\n${value}`); // 제목이 있는 경우 첫 줄에 제목 삽입
  };

  useEffect(() => {
    handleValueWithTitle(title, value);
  }, [title, value]);

  return (
    <>
      {/* TODO(범규): 이미지 드래그 앤 드롭 기능 구현 검토  */}
      <S.MDEditor value={value} onChange={setValue} data-color-mode='light' preview='edit' textareaProps={{ placeholder: '내용을 입력해주세요.' }} />
      {(title || value) && <S.Markdown source={valueWithTitle} />}
    </>
  );
}
