import { PATH } from '@/constants/path';

import { S } from '@/pages/ProjectItem/components/EditorLink/style';

export default function EditorLink() {
  return (
    <S.EditLink to={PATH.PROJECT_EDITOR}>
      <S.EditText>프로젝트 수정</S.EditText>
    </S.EditLink>
  );
}
