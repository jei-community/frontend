import Divider from '@/components/Divider';

import MemberEditor from '@/pages/ProjectEditor/components/TitleEditor/components/MemberEditor';
import ProjectTitleEditor from '@/pages/ProjectEditor/components/TitleEditor/components/ProjectTitleEditor';
import ThumbnailEditor from '@/pages/ProjectEditor/components/TitleEditor/components/ThumbnailEditor';
import { S } from '@/pages/ProjectEditor/components/TitleEditor/style';

export default function TitleEditor() {
  return (
    <S.Container>
      <ThumbnailEditor />

      <S.RightContainer>
        <ProjectTitleEditor />

        <Divider />

        <MemberEditor />
      </S.RightContainer>
    </S.Container>
  );
}
