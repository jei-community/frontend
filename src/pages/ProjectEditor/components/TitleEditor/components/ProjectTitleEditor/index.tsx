import { Status } from '@/types/project';

import TextField from '@/components/TextField';

import { S } from '@/pages/ProjectEditor/components/TitleEditor/style';

interface Props {
  title: string | null;
  status: Status | null;
}

export default function ProjectTitleEditor({ title, status }: Props) {
  return (
    <S.TitleContainer>
      <TextField placeholder='프로젝트 이름을 입력해 주세요' heightSize='large' defaultValue={title ?? ''} />
      <S.Badge $status={status ?? 'STOP'}>
        <S.BadgeText>서비스</S.BadgeText>
      </S.Badge>
    </S.TitleContainer>
  );
}
