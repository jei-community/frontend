import { Status } from '@/types/project';

import { BADGE_STATUS, STATUS_TEXT } from '@/constants/common';

import Badge from '@/components/Badge';
import DateText from '@/components/DateText';
import ProjectThumbnail from '@/components/ProjectThumbnail';

import { S } from '@/pages/ProjectList/components/ProjectCard/style';

interface Props {
  title: string;
  thumbnailImageUrl: string;
  startDate: string;
  endDate: string;
  status: Status;
  description: string;
}

export default function ProjectCard({ title, thumbnailImageUrl, startDate, endDate, status, description }: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <ProjectThumbnail src={thumbnailImageUrl} alt={`${title} 썸네일`} size='large' />
      <S.ContentContainer>
        <DateText startDate={startDate} endDate={endDate} size='small' />
        <S.BadgeContainer>
          <Badge color={BADGE_STATUS[status]}>{STATUS_TEXT[status]}</Badge>
        </S.BadgeContainer>
      </S.ContentContainer>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
