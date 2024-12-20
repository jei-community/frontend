import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';
import Content from '@/components/Content';
import Divider from '@/components/Divider';
import TextField from '@/components/TextField';

import ProjectCard from '@/pages/ProjectList/components/ProjectCard';
import { S } from '@/pages/ProjectList/style';

export default function ProjectList() {
  const navigate = useNavigate();

  return (
    <Content>
      <S.Container>
        <S.TopContainer>
          <S.Title>내 프로젝트</S.Title>
          <Button size='large' onClick={() => navigate(PATH.PROJECT.ABSOLUTE.EDITOR)}>
            프로젝트 생성
          </Button>
        </S.TopContainer>
        <Divider />
        <S.SearchWrapper>
          <S.InputContainer>
            <TextField placeholder='프로젝트명을 입력해 주세요' heightSize='small' />
            <Button size='icon'>
              <SearchIcon />
            </Button>
          </S.InputContainer>
        </S.SearchWrapper>
        <S.Projects>
          {Array.from({ length: 6 }, (_, index) => {
            return (
              // TODO(증훈): 프로젝트 상세페이지로 연결
              <S.ProjectItem key={index}>
                <S.CustomLink to={PATH.PROJECT.RELATIVE.LIST.GET_PROJECT_ITEM('1')}>
                  <ProjectCard />
                </S.CustomLink>
              </S.ProjectItem>
            );
          })}
        </S.Projects>
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
