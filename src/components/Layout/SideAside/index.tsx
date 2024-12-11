import styled from '@emotion/styled';

interface Props {
  position: 'left' | 'right';
}

export default function SideAside({ position }: Props) {
  // TODO(증훈): 프로젝트리스트, 프로젝트 path일 때 조건부 렌더링

  return (
    <S.Aside>
      <S.Content>{position}</S.Content>
    </S.Aside>
  );
}

const S = {
  Aside: styled.aside({
    width: '27rem',

    '@media (max-width: 767px)': {
      display: 'none',
    },
  }),

  Content: styled.div({
    display: 'flex',
    flexDirection: 'column',

    gap: '16px',
    padding: '16px',

    '@media (max-width: 1200px)': {
      display: 'none',
    },
  }),
};
