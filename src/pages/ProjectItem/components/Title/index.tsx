import { useParams } from 'react-router';

import { Status } from '@/types/project';

import { BADGE_STATUS, STATUS_TEXT } from '@/constants/common';

import Avatar from '@/components/Avatar';
import Badge from '@/components/Badge';
import Divider from '@/components/Divider';
import ProjectThumbnail from '@/components/ProjectThumbnail';

import { useMember } from '@/hooks';
import { S } from '@/pages/ProjectItem/components/Title/style';

interface Props {
  thumbnailImageUrl: string;
  title: string;
  status: Status;
  startDate: string;
  endDate: string;
}

export default function Title({ thumbnailImageUrl, title, status, startDate, endDate }: Props) {
  const { projectId } = useParams();
  const { members } = useMember({ projectId });
  const parsedMembers = members.filter((member) => member.isJoin);

  return (
    <S.Container>
      <ProjectThumbnail src={thumbnailImageUrl} alt={`${title} 썸네일 이미지`} />
      <S.RightContainer>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
          <Badge color={BADGE_STATUS[status]}>{STATUS_TEXT[status]}</Badge>
        </S.TitleContainer>

        <Divider />
        <S.MemberAndDateContainer>
          <S.MemberInfoContainer>
            <S.AvatarContainer>
              {parsedMembers.map(({ id, profileImageUrl }) => {
                return (
                  <li key={id}>
                    <Avatar src={profileImageUrl} size='small' />
                  </li>
                );
              })}
            </S.AvatarContainer>
            {Boolean(parsedMembers.length) && <S.MemberCountText>{parsedMembers.length}명</S.MemberCountText>}
          </S.MemberInfoContainer>
          {/\d/.test(startDate) && /\d/.test(endDate) && <S.DateText>{`${startDate} ~ ${endDate}`}</S.DateText>}
        </S.MemberAndDateContainer>
      </S.RightContainer>
    </S.Container>
  );
}
