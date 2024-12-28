import styled from '@emotion/styled';

export const S = {
  ContentContainer: styled.div({
    padding: '2.4rem',
  }),
  AsideContainer: styled.div({
    padding: '2.4rem 1.6rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
  }),
  ButtonWrapper: styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  }),
  EmptyWrapper: styled.div({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
};
