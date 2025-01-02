import { useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';
import EmptyContent from '@/components/EmptyContent';
import ScrollToTop from '@/components/ScrollToTop';

import GlobalStyle from '@/styles/GlobalStyle';
import styled from '@emotion/styled';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <GlobalStyle>
      <ScrollToTop />
      <S.Container>
        <EmptyContent size='large'>잘못된 경로입니다</EmptyContent>
        <S.ButtonWrapper>
          <Button size='full' onClick={() => navigate(PATH.MAIN)}>
            홈으로 돌아가기
          </Button>
        </S.ButtonWrapper>
      </S.Container>
    </GlobalStyle>
  );
}

const S = {
  Container: styled.div({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    height: 'fit-content',

    gap: 40,
  }),

  ButtonWrapper: styled.div({
    width: '20rem',
  }),
};
