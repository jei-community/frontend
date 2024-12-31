import theme from '@/styles/theme';
import styled from '@emotion/styled';

import backgroundImage from '../assets/background.png';

/** 로그인 페이지 스타일 */
export const S = {
  /** 로그인 페이지 컨테이너 스타일 */
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
  }),
  /** 흰색 딤 스타일 */
  WhiteDim: styled.div({
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    backdropFilter: 'blur(0.5rem)',
    WebkitBackdropFilter: 'blur(0.5rem)',
    width: '100vw',
    height: '100vh',
  }),
  /** 로그인 컨테이너 스타일 */
  SignInContainer: styled.div({
    position: 'absolute',
    display: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '6.4rem',
    boxSizing: 'border-box',
    borderRadius: '2.4rem',
    width: '320px',
    height: '32rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  Logo: styled.img({
    width: '17.5rem',
    height: '2.3rem',
    objectFit: 'contain',
  }),
  /** 구글로그인 관련 스타일 */
  GoogleLogin: {
    /** 구글로그인 버튼 컨테이너 스타일 */
    Container: styled.button({
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      padding: '1.2rem',
      border: `2px solid ${theme.colors.gray[200]}`,
      width: '18.8rem',
      height: '3.9rem',
      gap: '1.9rem',
      cursor: 'pointer',
    }),
    /** 구글로그인 버튼 로고 스타일 */
    Logo: styled.img({
      width: '2rem',
      height: '2rem',
      objectFit: 'contain',
    }),
    /** 구글로그인 버튼 텍스트 스타일 */
    Text: styled.p({
      color: 'black',
      ...theme.typography.body4,
    }),
  },
};
