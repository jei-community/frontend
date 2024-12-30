import { Link } from 'react-router';

import { ProjectListData } from '@/types/project';

import { PATH } from '@/constants/path';

import ProjectCard from '@/pages/ProjectList/components/ProjectCard';
import { S } from '@/pages/ProjectList/style';

interface Props {
  projectList: ProjectListData;
}

export default function ProjectCardList({ projectList }: Props) {
  return (
    <>
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
    </>
  );
}
