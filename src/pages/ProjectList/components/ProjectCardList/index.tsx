import { useState } from 'react';
import { Link } from 'react-router';

import { Pagination as PaginationType, ProjectListData } from '@/types/project';

import { PATH } from '@/constants/path';

import Divider from '@/components/Divider';
import Pagination from '@/components/Pagination';

import ProjectCard from '@/pages/ProjectList/components/ProjectCard';
import { S } from '@/pages/ProjectList/style';

interface Props {
  projectList: ProjectListData;
  pagination: PaginationType;
}

export default function ProjectCardList({ projectList, pagination }: Props) {
  const [currentPage, setCurrentPage] = useState(pagination.page);

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

      <Divider />

      <Pagination
        totalCount={pagination.totalCount}
        limit={pagination.limit}
        page={currentPage}
        hasNext={currentPage < Math.ceil(pagination.totalCount / pagination.limit)}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </>
  );
}
