import { Link, useLocation, useNavigate } from 'react-router';

import { postLogout } from '@/apis/auth';

import { PATH } from '@/constants/path';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Logo from '@/components/Layout/Header/assets/logo.svg';
import { S } from '@/components/Layout/Header/style';

import { useUserInfoStore } from '@/store';

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { userId, profileImageUrl } = useUserInfoStore();

  const logout = async () => {
    await postLogout();
    navigate(PATH.SIGN_IN);
  };

  return (
    <S.Header>
      <S.Content>
        <S.LeftContainer>
          <Link to='/'>
            <img src={Logo} alt='Logo' />
          </Link>
          <S.LinkContainer>
            <S.CustomLink to={PATH.MAIN} $isFocused={pathname === PATH.MAIN}>
              홈
            </S.CustomLink>
            <S.CustomLink to={PATH.PROJECT.ABSOLUTE.LIST.INDEX} $isFocused={pathname === PATH.PROJECT.ABSOLUTE.LIST.INDEX}>
              프로젝트
            </S.CustomLink>
            <S.CustomLink to={PATH.DAILY_CHECK} $isFocused={pathname === PATH.DAILY_CHECK}>
              일일점검
            </S.CustomLink>
            <S.CustomLink to={PATH.POSTS.INDEX} $isFocused={pathname === `${PATH.POSTS.INDEX}/list`}>
              포스트
            </S.CustomLink>
            <S.CustomLink to={PATH.ALBUMS.INDEX} $isFocused={pathname === `${PATH.ALBUMS.INDEX}/list`}>
              앨범
            </S.CustomLink>
          </S.LinkContainer>
        </S.LeftContainer>
        {userId && (
          <S.RightContainer>
            <Avatar src={profileImageUrl} />
            <Button size='small' onClick={logout}>
              로그아웃
            </Button>
          </S.RightContainer>
        )}
      </S.Content>
    </S.Header>
  );
}
