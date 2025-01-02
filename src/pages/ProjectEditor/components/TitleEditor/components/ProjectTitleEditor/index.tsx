import { Dispatch, SetStateAction } from 'react';

import { Status } from '@/types/project';

import ButtonGroup from '@/components/ButtonGroup';
import { ButtonGroupItem } from '@/components/ButtonGroup/types';
import TextField from '@/components/TextField';

import { S } from '@/pages/ProjectEditor/components/TitleEditor/style';

interface Props {
  title: string | null;
  status: Status | null;
  setStatusToRender: Dispatch<SetStateAction<string>>;
}

export default function ProjectTitleEditor({ title, status, setStatusToRender }: Props) {
  const items: ButtonGroupItem[] = [
    { label: '서비스', value: 'LIVE', color: 'success', checked: status === 'LIVE' },
    { label: '개발', value: 'DEVELOP', color: 'warning', checked: status === 'DEVELOP' },
    { label: '서비스 중단', value: 'STOP', color: 'error', checked: status === 'STOP' },
  ];

  const updateStatus = (item: ButtonGroupItem) => {
    setStatusToRender(item.value);
  };

  return (
    <S.TitleContainer>
      <TextField placeholder='프로젝트 이름을 입력해 주세요' heightSize='large' defaultValue={title ?? ''} name='title' required />
      <S.ButtonGroupWrapper>
        <ButtonGroup items={items} onChange={(item) => updateStatus(item)} />
      </S.ButtonGroupWrapper>
    </S.TitleContainer>
  );
}
