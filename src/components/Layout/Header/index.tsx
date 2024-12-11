import styled from '@emotion/styled';

export default function Header() {
  return (
    <S.Header>
      <S.Content>헤더</S.Content>
    </S.Header>
  );
}

const S = {
  Header: styled.header({
    display: 'flex',
    justifyContent: 'center',

    width: '100%',
    height: '6.4rem',

    borderBottom: '1px solid #E0E0E0',
  }),

  Content: styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    boxSizing: 'border-box',
    width: '120rem',
    height: '100%',

    padding: '0 16px',
  }),
};
