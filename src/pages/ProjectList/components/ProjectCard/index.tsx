import { Status } from '@/types/project';

import { STATUS_TEXT } from '@/constants/common';

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
      <S.Thumbnail src={thumbnailImageUrl}></S.Thumbnail>
      <S.ContentContainer>
        <S.DateContainer>
          <S.DateText>{startDate}</S.DateText>
          <S.DateText>~</S.DateText>
          <S.DateText>{endDate}</S.DateText>
        </S.DateContainer>
        <S.ProjectItemTitleStyle.Badge $status={status}>
          <S.ProjectItemTitleStyle.BadgeText>{STATUS_TEXT[status]}</S.ProjectItemTitleStyle.BadgeText>
        </S.ProjectItemTitleStyle.Badge>
      </S.ContentContainer>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}