import Avatar from '../Avatar';
import { S } from './style';

export default function Profile() {
  return (
    <S.Container>
      <S.Title>내 프로필</S.Title>
      <S.FlexWrapper>
        <Avatar size='large' src='https://via.placeholder.com/64' />
        <S.InfoWrapper>
          <S.Name>김성찬</S.Name>
          <S.Position>연구원</S.Position>
        </S.InfoWrapper>
      </S.FlexWrapper>
    </S.Container>
  );
}
