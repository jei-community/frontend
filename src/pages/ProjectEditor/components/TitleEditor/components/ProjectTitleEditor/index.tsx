import TextField from '@/components/TextField';

import { S } from '@/pages/ProjectEditor/components/TitleEditor/style';

export default function ProjectTitleEditor() {
  return (
    <S.TitleContainer>
      <TextField placeholder='프로젝트 이름을 입력해 주세요' heightSize='large' />
      <S.Badge>
        <S.BadgeText>서비스</S.BadgeText>
      </S.Badge>
    </S.TitleContainer>
  );
}
