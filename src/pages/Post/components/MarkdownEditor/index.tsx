import { useEffect, useState } from 'react';

import { S } from './style';

interface Props {
  title: string;
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

/** 마크다운 작성 컴포넌트 */
export default function MarkdownEditor({ title, value, setValue }: Props) {
  const [valueWithTitle, setValueWithTitle] = useState<string | undefined>('');

  useEffect(() => {
    // 제목이 변경될 때 첫 줄에 삽입
    setValueWithTitle(() => {
      if (!title) return value;

      return `# ${title}\n${value}`;
    });
  }, [title, value, valueWithTitle]);

  return (
    <>
      {/* TODO(범규): 이미지 드래그 앤 드롭 기능 구현 검토  */}
      <S.MDEditor value={value} onChange={setValue} data-color-mode='light' preview='edit' textareaProps={{ placeholder: '내용을 입력해주세요.' }} />
      {(title || value) && <S.Markdown source={valueWithTitle} />}
    </>
  );
}
