import { Status } from '@/types/project';

import { STATUS_TEXT } from '@/constants/common';

import TextField from '@/components/TextField';

import { S } from '@/pages/ProjectEditor/components/TitleEditor/style';

interface Props {
  title: string | null;
  status: Status | null;
}

export default function ProjectTitleEditor({ title, status }: Props) {
  return (
    <S.TitleContainer>
      <TextField placeholder='프로젝트 이름을 입력해 주세요' heightSize='large' defaultValue={title ?? ''} name='title' />
      <S.Badge $status={status ?? 'STOP'}>
        <S.BadgeText name='status'>{STATUS_TEXT[status ?? 'STOP']}</S.BadgeText>
      </S.Badge>
    </S.TitleContainer>
  );
}
