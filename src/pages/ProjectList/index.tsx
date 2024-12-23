import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router';

import { PATH } from '@/constants/path';

import Content from '@/components/Content';
import Divider from '@/components/Divider';

import ProjectCard from '@/pages/ProjectList/components/ProjectCard';
import ProjectListToggle from '@/pages/ProjectList/components/ProjectListToggle';
import Searchbar from '@/pages/ProjectList/components/Searchbar';
import { useIsMyProjectSelected, useProjectList } from '@/pages/ProjectList/hooks';
import { S } from '@/pages/ProjectList/style';

export default function ProjectList() {
  const { projectList, updateProjectList, selectMyProject, selectProjectAll } = useProjectList();
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
    <Content>
      <S.Container>
        <S.HeaderContainer>
          <ProjectListToggle isMyProjectSelected={isMyProjectSelected} toggleIsMyProjectSelected={toggleIsMyProjectSelected} />

          <Searchbar isMyProjectSelected={isMyProjectSelected} showSelectedProjects={showSelectedProjects} filterProjects={filterProjects} />
        </S.HeaderContainer>

        <Divider />

        <S.ProjectList>
          {projectList.map(({ id, title, thumbnailImageUrl, description, startDate, endDate, status }) => {
            return (
              <li key={id}>
                <Link to={PATH.PROJECT.RELATIVE.LIST.ITEM.WITH_ID(id)}>
                  <ProjectCard
                    title={title}
                    thumbnailImageUrl={thumbnailImageUrl}
                    description={description}
                    startDate={startDate}
                    endDate={endDate}
                    status={status}
                  />
                </Link>
              </li>
            );
          })}
        </S.ProjectList>

        <Divider />

        <S.Pagination>
          <S.PaginationButton>
            <ChevronFirstIcon />
          </S.PaginationButton>
          <S.PaginationButton>
            <ChevronLeftIcon />
          </S.PaginationButton>
          <S.PaginationNumberList>
            {Array.from({ length: 9 }, (_, index) => {
              return (
                <li key={index}>
                  <S.PaginationButton>
                    <S.PaginationNumber $isClicked={false}>{index + 1}</S.PaginationNumber>
                  </S.PaginationButton>
                </li>
              );
            })}
          </S.PaginationNumberList>
          <S.PaginationButton>
            <ChevronRightIcon />
          </S.PaginationButton>
          <S.PaginationButton>
            <ChevronLastIcon />
          </S.PaginationButton>
        </S.Pagination>
      </S.Container>
    </Content>
  );
}
