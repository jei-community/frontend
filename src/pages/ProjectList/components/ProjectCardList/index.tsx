import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router';

import { ProjectListData } from '@/types/project';

import { PATH } from '@/constants/path';

import Divider from '@/components/Divider';

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
    </>
  );
}
