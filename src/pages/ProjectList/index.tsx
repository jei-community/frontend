import Content from '@/components/Content';
import Divider from '@/components/Divider';
import EmptyContent from '@/components/EmptyContent';
import Pagination from '@/components/Pagination';

import ProjectCardList from '@/pages/ProjectList/components/ProjectCardList';
import ProjectListHeader from '@/pages/ProjectList/components/ProjectListHeader';
import { useProjectList } from '@/pages/ProjectList/hooks';
import { S } from '@/pages/ProjectList/style';

export default function ProjectList() {
  const { projectList, pagination, isMyProject, setPage, toggleIsMyProject, updateKeyword } = useProjectList();

  const onPageChange = (newPage: number) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  return (
    <Content>
      <S.Container>
        <ProjectListHeader projectList={projectList} isMyProject={isMyProject} toggleIsMyProject={toggleIsMyProject} updateKeyword={updateKeyword} />

        <Divider />

        {projectList && projectList.length ? (
          <>
            <ProjectCardList projectList={projectList} />

            <Divider />

            <Pagination
              totalCount={pagination.totalCount}
              limit={pagination.limit}
              page={pagination.page}
              hasNext={pagination.hasNext}
              onPageChange={onPageChange}
            />
          </>
        ) : (
          <S.EmptyWrapper>
            <EmptyContent size='large'>프로젝트가 없어요</EmptyContent>
          </S.EmptyWrapper>
        )}
      </S.Container>
    </Content>
  );
}
