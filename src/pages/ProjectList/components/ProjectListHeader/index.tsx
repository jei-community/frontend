import { ProjectListData } from '@/types/project';

import ToggleSwitch from '@/components/ToggleSwitch';

import Searchbar from '@/pages/ProjectList/components/Searchbar';
import { useIsMyProjectSelected } from '@/pages/ProjectList/hooks';
import { S } from '@/pages/ProjectList/style';

interface Props {
  projectList: ProjectListData;
  updateProjectList: (newProjectList: ProjectListData) => void;
  selectMyProject: () => void;
  selectProjectAll: () => void;
}

export default function ProjectListHeader({ projectList, updateProjectList, selectMyProject, selectProjectAll }: Props) {
  const { isMyProjectSelected, updateIsMyProjectSelected } = useIsMyProjectSelected(false);

  const showSelectedProjects = (isMyProjectSelected: boolean) => {
    if (isMyProjectSelected) selectMyProject();
    else selectProjectAll();
  };

  // 내 프로젝트만 보기 토글
  const toggleIsMyProjectSelected = () => {
    const newIsMyProjectSelected = !isMyProjectSelected;

    showSelectedProjects(newIsMyProjectSelected);
    updateIsMyProjectSelected(newIsMyProjectSelected);
  };

  // 검색어를 기반으로 프로젝트 필터링
  const filterProjects = (query: string) => {
    const filteredProjectList = projectList.filter(({ title }) => title.includes(query));

    updateProjectList(filteredProjectList);
  };

  return (
    <S.HeaderContainer>
      <S.ButtonContainer>
        <ToggleSwitch checked={isMyProjectSelected} onChange={toggleIsMyProjectSelected} />
        <S.MyProjectLabelText>{isMyProjectSelected ? '전체 프로젝트 보기' : '내 프로젝트만 보기'}</S.MyProjectLabelText>
      </S.ButtonContainer>
      <Searchbar isMyProjectSelected={isMyProjectSelected} showSelectedProjects={showSelectedProjects} filterProjects={filterProjects} />
    </S.HeaderContainer>
  );
}
