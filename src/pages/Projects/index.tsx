import Content from '@/components/Content';
import Divider from '@/components/Divider';

import { GlassSVG, LeftChevronFirstSVG, LeftChevronSVG, RightChevronLastSVG, RightChevronSVG } from '@/pages/Projects/assets';
import Project from '@/pages/Projects/components/Project';
import { S } from '@/pages/Projects/style';

export default function Projects() {
  return (
    <Content>
      <S.Container>
        <S.TopContainer>
          <S.Title>내 프로젝트</S.Title>
          <S.Button>프로젝트 생성</S.Button>
        </S.TopContainer>
        <Divider direction='horizontal' />
        <S.SearchWrapper>
          <S.InputContainer>
            <S.Input placeholder='프로젝트명을 입력해주세요' />
            <S.InputButton>
              <img src={GlassSVG} alt='검색 버튼' />
            </S.InputButton>
          </S.InputContainer>
        </S.SearchWrapper>
        <S.Projects>
          {Array.from({ length: 6 }, (_, index) => {
            return (
              // TODO(증훈): 프로젝트 상세페이지로 연결
              <S.ProjectItem key={index}>
                <S.CustomLink to='/'>
                  <Project />
                </S.CustomLink>
              </S.ProjectItem>
            );
          })}
        </S.Projects>
        <Divider direction='horizontal' />
        <S.Pagination>
          <S.PaginationButton>
            <img src={LeftChevronFirstSVG} />
          </S.PaginationButton>
          <S.PaginationButton>
            <img src={LeftChevronSVG} />
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
            <img src={RightChevronSVG} />
          </S.PaginationButton>
          <S.PaginationButton>
            <img src={RightChevronLastSVG} />
          </S.PaginationButton>
        </S.Pagination>
      </S.Container>
    </Content>
  );
}
