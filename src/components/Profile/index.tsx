import { Role } from '@/types/album';

import { ROLE_TEXT } from '@/constants/common';

import { useUserInfoStore } from '@/store';

import Avatar from '../Avatar';
import { S } from './style';

export default function Profile() {
  const { name, role, profileImageUrl } = useUserInfoStore();

  return (
    <S.Container>
      <S.Title>내 프로필</S.Title>
      <S.FlexWrapper>
        <Avatar size='large' src={profileImageUrl} />
        <S.InfoWrapper>
          <S.Name>{name}</S.Name>
          <S.Position>{ROLE_TEXT[role as Role]}</S.Position>
        </S.InfoWrapper>
      </S.FlexWrapper>
    </S.Container>
  );
}
