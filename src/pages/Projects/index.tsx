import { Link } from 'react-router';

import Content from '@/components/Content';
import Divider from '@/components/Divider';

import { MEDIA_QUERY } from '@/constants';
import Project from '@/pages/Projects/components/Project';
import styled from '@emotion/styled';

import GlassSVG from './assets/icons/glass.svg';

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
        <S.Pagination></S.Pagination>
      </S.Container>
    </Content>
  );
}

const S = {
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '1.6rem',
    padding: '3.2rem 1.6rem',
  }),

  TopContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
  }),

  Title: styled.h1(({ theme }) => ({
    ...theme.typography.title,
  })),

  Button: styled.button(({ theme }) => ({
    width: '12.8rem',
    height: '3.2rem',
    backgroundColor: theme.colors.primary[500],
    color: theme.colors.white,
    border: 'none',

    ...theme.typography.body4,
  })),

  SearchWrapper: styled.div({
    display: 'flex',
    justifyContent: 'end',

    width: '100%',
  }),

  InputContainer: styled.div({
    display: 'flex',
    gap: '0.8rem',
  }),

  Input: styled.input(({ theme }) => ({
    width: '25.6rem',
    height: '3.2rem',

    padding: '0 1.2rem',

    border: '1px solid',
    borderColor: theme.colors.gray[300],
  })),

  InputButton: styled.button(({ theme }) => ({
    width: '3.2rem',
    height: '3.2rem',

    backgroundColor: theme.colors.gray[200],
    border: 'none',
  })),

  Projects: styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 4.4rem;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_M}px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,

  ProjectItem: styled.li({
    width: 'fit-content',
  }),

  CustomLink: styled(Link)({
    display: 'block',
    width: 'fit-content',
  }),

  Pagination: styled.div({}),
};
