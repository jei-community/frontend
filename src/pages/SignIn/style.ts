import theme from '@/styles/theme';
import styled from '@emotion/styled';

import backgroundImage from './assets/background.png';

export const S = {
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
  SignInForm: styled.div({
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
  GoogleLogin: {
    Button: styled.button({
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      padding: '1.2rem',
      border: '0.2rem solid #E0E0E0',
      width: '18.8rem',
      height: '3.9rem',
      gap: '1.9rem',
    }),
    Logo: styled.img({
      width: '2rem',
      height: '2rem',
      objectFit: 'contain',
    }),
    Text: styled.p({
      color: '#000000',
      ...theme.typography.body4,
    }),
  },
};
