import { ProjectListData } from '@/types/project';

import ToggleSwitch from '@/components/ToggleSwitch';

import Searchbar from '@/pages/ProjectList/components/Searchbar';
import { S } from '@/pages/ProjectList/style';

interface Props {
  projectList: ProjectListData;
  isMyProject: boolean;
  toggleIsMyProject: () => void;
  updateKeyword: (keyword: string) => void;
}

export default function ProjectListHeader({ isMyProject, toggleIsMyProject, updateKeyword }: Props) {
  return (
    <S.HeaderContainer>
      <S.ToggleContainer>
        <ToggleSwitch checked={isMyProject} onChange={toggleIsMyProject} />
        <S.MyProjectLabelText $isMyProject={isMyProject}>내 프로젝트만 보기</S.MyProjectLabelText>
      </S.ToggleContainer>
      <Searchbar updateKeyword={updateKeyword} />
    </S.HeaderContainer>
  );
}
