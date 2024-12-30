import { ProjectListData } from '@/types/project';

import ProjectListToggle from '@/pages/ProjectList/components/ProjectListToggle';
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
      <ProjectListToggle isMyProject={isMyProject} toggleIsMyProject={toggleIsMyProject} />

      <Searchbar updateKeyword={updateKeyword} />
    </S.HeaderContainer>
  );
}
