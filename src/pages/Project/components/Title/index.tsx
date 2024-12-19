import Divider from '@/components/Divider';

import { S } from '@/pages/Project/components/Title/style';

// TODO(증훈): 서버 데이터로 교체
export default function Title() {
  return (
    <S.Container>
      <S.Thumbnail src='https://via.placeholder.com/100' alt='thumbnail' />
      <S.RightContainer>
        <S.TitleContainer>
          <S.Title>EVERYDEI</S.Title>
          <S.Badge>
            <S.BadgeText>서비스</S.BadgeText>
          </S.Badge>
        </S.TitleContainer>

        <Divider />
        <S.MemberAndDateContainer>
          <S.MemberInfoContainer>
            <S.AvatarContainer>
              {Array.from({ length: 5 }, (_, index) => {
                return (
                  <li key={index}>
                    <S.Avatar src='https://via.placeholder.com/50' alt='avatar' />
                  </li>
                );
              })}
            </S.AvatarContainer>
            <S.MemberCountText>+n명</S.MemberCountText>
          </S.MemberInfoContainer>
          <S.DateText>2024. 00. 00 ~ 2024. 00. 00</S.DateText>
        </S.MemberAndDateContainer>
      </S.RightContainer>
    </S.Container>
  );
}
