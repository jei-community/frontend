import { MEDIA_QUERY } from '@/constants';
import styled from '@emotion/styled';

export const S = {
  Container: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '1.6rem',
    padding: '3.2rem 1.6rem',

    userSelect: 'none',
  }),

  HeaderContainer: styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
  }),

  ToggleContainer: styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
  }),

  ButtonContainer: styled.div({
    display: 'flex',
    gap: '1.2rem',
  }),

  MyProjectLabelText: styled.label<{ $isMyProject: boolean }>(({ theme, $isMyProject }) => ({
    color: $isMyProject ? theme.colors.gray[900] : theme.colors.gray[300],
    ...theme.typography.body1,
  })),

  ProjectList: styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    gap: 4.4rem;

    @media (max-width: ${MEDIA_QUERY.DESKTOP_M}px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${MEDIA_QUERY.DESKTOP_S}px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,

  EmptyWrapper: styled.div({
    position: 'absolute',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
};
