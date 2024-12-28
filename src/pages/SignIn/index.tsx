import { Navigate } from 'react-router';

import { loginToGoogle } from '@/apis/auth';

import { PATH } from '@/constants/path';

import GlobalStyle from '@/styles/GlobalStyle';
import Logo from '@/styles/assets/images/logo_white.svg';

import GoogleLogo from './assets/google-logo.svg';
import { S } from './style';

/**
 * 로그인 페이지
 */
export default function SignIn() {
  if (localStorage.getItem('token')) return <Navigate to={PATH.PRIVATE_ROUTER} />;

  return (
    <GlobalStyle>
      <S.WhiteDim />
      <S.Container>
        <S.SignInContainer>
          <S.Logo src={Logo} alt='EVERYDEI' />
          <S.GoogleLogin.Container onClick={loginToGoogle}>
            <S.GoogleLogin.Logo src={GoogleLogo} alt='Google' />
            <S.GoogleLogin.Text>Google 계정으로 로그인</S.GoogleLogin.Text>
          </S.GoogleLogin.Container>
        </S.SignInContainer>
      </S.Container>
    </GlobalStyle>
  );
}
