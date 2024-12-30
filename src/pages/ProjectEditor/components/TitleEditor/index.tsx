import { Dispatch, SetStateAction } from 'react';

import { Members, Status } from '@/types/project';

import Divider from '@/components/Divider';

import MemberAndDateEditor from '@/pages/ProjectEditor/components/TitleEditor/components/MemberEditor';
import ProjectTitleEditor from '@/pages/ProjectEditor/components/TitleEditor/components/ProjectTitleEditor';
import ThumbnailEditor from '@/pages/ProjectEditor/components/TitleEditor/components/ThumbnailEditor';
import { S } from '@/pages/ProjectEditor/components/TitleEditor/style';

interface Props {
  thumbnailImageUrl: string | ArrayBuffer | null;
  title: string | null;
  status: Status | null;
  startDate: string | null;
  endDate: string | null;
  members: Members;
  setMembersToRender: Dispatch<SetStateAction<Members>>;
}

export default function TitleEditor({ thumbnailImageUrl, title, status, startDate, endDate, members, setMembersToRender }: Props) {
  return (
    <S.Container>
      <ThumbnailEditor thumbnailImageUrl={thumbnailImageUrl} />

      <S.RightContainer>
        <ProjectTitleEditor title={title} status={status} />

        <Divider />

        <MemberAndDateEditor startDate={startDate} endDate={endDate} members={members} setMembersToRender={setMembersToRender} />
      </S.RightContainer>
    </S.Container>
  );
}
