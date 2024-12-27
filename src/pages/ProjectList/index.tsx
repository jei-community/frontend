import Content from '@/components/Content';
import Divider from '@/components/Divider';
import EmptyContent from '@/components/EmptyContent';

import ProjectCardList from '@/pages/ProjectList/components/ProjectCardList';
import ProjectListHeader from '@/pages/ProjectList/components/ProjectListHeader';
import { useProjectList } from '@/pages/ProjectList/hooks';
import { S } from '@/pages/ProjectList/style';

export default function ProjectList() {
  const { projectList, pagination, updateProjectList, selectMyProject, selectProjectAll } = useProjectList();

  return (
    <Content>
      <S.Container>
        <ProjectListHeader
          projectList={projectList}
          updateProjectList={updateProjectList}
          selectMyProject={selectMyProject}
          selectProjectAll={selectProjectAll}
        />

        <Divider />

        {projectList && projectList.length ? (
          <ProjectCardList projectList={projectList} pagination={pagination} />
        ) : (
          <S.EmptyWrapper>
            <EmptyContent size='large'>프로젝트가 없어요</EmptyContent>
          </S.EmptyWrapper>
        )}
      </S.Container>
    </Content>
  );
}
