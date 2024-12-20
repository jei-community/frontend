import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';
import Content from '@/components/Content';
import Divider from '@/components/Divider';
import TextField from '@/components/TextField';

import ProjectCard from '@/pages/ProjectList/components/ProjectCard';
import { S } from '@/pages/ProjectList/style';

export default function ProjectList() {
  const [isMyProjectSelected, setIsMyProjectSelected] = useState(false);
  const navigate = useNavigate();

  const toggleMyProjectSelected = () => setIsMyProjectSelected(!isMyProjectSelected);

  return (
    <Content>
      <S.Container>
        <S.HeaderContainer>
          <S.ToggleContainer>
            {/* 공통 토글 스위치 컴포넌트 구현되면 교체 예정 */}
            <input type='radio' checked={!isMyProjectSelected} onChange={toggleMyProjectSelected} />
            <input type='radio' id='my-project' checked={isMyProjectSelected} onChange={toggleMyProjectSelected} />
            <S.MyProjectLabelText htmlFor='my-project'>내 프로젝트만 보기</S.MyProjectLabelText>
          </S.ToggleContainer>
          <S.SearchContainer>
            <S.TextFieldWrapper>
              <TextField placeholder='프로젝트명을 입력해 주세요' heightSize='small' />
            </S.TextFieldWrapper>
            <Button size='icon'>
              <SearchIcon />
            </Button>
            <Button size='large' onClick={() => navigate(PATH.PROJECT.ABSOLUTE.EDITOR)}>
              프로젝트 생성
            </Button>
          </S.SearchContainer>
        </S.HeaderContainer>

        <Divider />

        <S.ProjectList>
          {Array.from({ length: 6 }, (_, index) => {
            return (
              // TODO(증훈): 프로젝트 상세페이지로 연결
              <li key={index}>
                <Link to={PATH.PROJECT.RELATIVE.LIST.GET_PROJECT_ITEM('1')}>
                  <ProjectCard />
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
