import { Status } from '@/types/project';

import { BADGE_STATUS, STATUS_TEXT } from '@/constants/common';

import Badge from '@/components/Badge';
import Divider from '@/components/Divider';

import { S } from '@/pages/ProjectItem/components/Title/style';

interface Props {
  thumbnailImageUrl: string;
  title: string;
  status: Status;
  startDate: string;
  endDate: string;
}

export default function Title({ thumbnailImageUrl, title, status, startDate, endDate }: Props) {
  return (
    <S.Container>
      <S.Thumbnail src={thumbnailImageUrl} alt={`${title} 썸네일 이미지`} />
      <S.RightContainer>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
          <Badge color={BADGE_STATUS[status]}>{STATUS_TEXT[status]}</Badge>
        </S.TitleContainer>

        <Divider />
        <S.MemberAndDateContainer>
          <S.MemberInfoContainer>
            <S.AvatarContainer>
              {Array.from({ length: 5 }, (_, index) => {
                return (
                  <li key={index}>
                    <S.Avatar src='https://via.placeholder.com/32' alt='avatar' />
                  </li>
                );
              })}
            </S.AvatarContainer>
            <S.MemberCountText>+n명</S.MemberCountText>
          </S.MemberInfoContainer>
          <S.DataContainer>
            <S.DateText>{startDate}</S.DateText>
            <S.DateText>~</S.DateText>
            <S.DateText>{endDate}</S.DateText>
          </S.DataContainer>
        </S.MemberAndDateContainer>
      </S.RightContainer>
    </S.Container>
  );
}
