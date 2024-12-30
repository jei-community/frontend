import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { formatToYYYYMMDD } from '@/utils/common';

import { LinkItem, Members } from '@/types/project';

import { PATH } from '@/constants/path';

import Aside from '@/components/Aside';
import Content from '@/components/Content';
import Divider from '@/components/Divider';
import ProjectContentContainer from '@/components/ProjectContentContainer';
import ProjectSideContainer from '@/components/ProjectSideContainer';

import { useMember } from '@/hooks/useMember';

import { useProjectDetails } from '@/hooks';
import CancelButton from '@/pages/ProjectEditor/components/CancelButton';
import DeleteButton from '@/pages/ProjectEditor/components/DeleteButton';
import DescriptionEditor from '@/pages/ProjectEditor/components/DescriptionEditor';
import DocumentTooltipList from '@/pages/ProjectEditor/components/DocumentTooltipList';
import SaveButton from '@/pages/ProjectEditor/components/SaveButton';
import TechStackEditor from '@/pages/ProjectEditor/components/TechStackEditor';
import TitleEditor from '@/pages/ProjectEditor/components/TitleEditor';
import { useCreateProjectMutation, usePresignedUrlMutation } from '@/pages/ProjectEditor/hooks';
import { useUploadS3Mutation } from '@/pages/ProjectEditor/hooks/usePresignedUrlMutation';
import { useProjectAssets } from '@/pages/ProjectEditor/hooks/useProjectAssets';
import { S } from '@/pages/ProjectEditor/style';
import { TechStacksToRender } from '@/pages/ProjectEditor/type';

export default function ProjectEditor() {
  const { title, thumbnailImageUrl, status, startDate, endDate, description, frontend, backend, links, isEdit } = useProjectDetails();
  const [statusToRender, setStatusToRender] = useState<string>(status);
  const { members } = useMember();
  const [membersToRender, setMembersToRender] = useState<Members>(members);
  const { techStackAssets, linkAssets } = useProjectAssets();
  const [techStacksToRender, setTechStacksToRender] = useState<TechStacksToRender>({
    frontend,
    backend,
  });
  const [linksToRender, setLinksToRender] = useState<LinkItem>(links);
  const navigate = useNavigate();
  const presignedMutation = usePresignedUrlMutation();
  const uploadS3Mutation = useUploadS3Mutation();
  const projectMutation = useCreateProjectMutation();

  const submitProjectDetails = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const { title, thumbnail, description, startDate, endDate } = Object.fromEntries(formData.entries());

    // 1. Presigned URL 생성
    const presignedResult = await presignedMutation.mutateAsync({ type: 'PROJECT_THUMBNAIL' });

    // 2. 파일 S3 업로드
    await uploadS3Mutation.mutateAsync({
      url: presignedResult.url,
      file: thumbnail as File,
    });

    // 3. 프로젝트 저장 확인
    if (confirm('저장하시겠습니까?')) {
      // 4. 프로젝트 생성 요청
      const filteredParticipantList = membersToRender.filter((member) => member.isJoin).map((member) => member.id);
      const projectResult = await projectMutation.mutateAsync({
        title,
        description,
        thumbnailImageUrl: presignedResult.fileName ?? null,
        participantList: filteredParticipantList.length ? filteredParticipantList : null,
        metadata: {
          frontend: techStacksToRender.frontend?.map(({ id }) => id) ?? null,
          backend: techStacksToRender.backend?.map(({ id }) => id) ?? null,
          link: linksToRender?.map(({ id, items }) => ({ id, items: items ?? [] })) ?? null,
        },
        status: statusToRender ?? status ?? 'LIVE',
        startDate: formatToYYYYMMDD(new Date(String(startDate))),
        endDate: formatToYYYYMMDD(new Date(String(endDate))),
      });

      // 5. 네비게이션
      navigate(projectResult ? PATH.PROJECT.ABSOLUTE.LIST.ITEM.WITH_ID(projectResult.newProjectId) : PATH.PROJECT.ABSOLUTE.LIST.INDEX);
    }
  };

  return (
    <>
      <S.Form onSubmit={submitProjectDetails}>
        <Content>
          <ProjectContentContainer>
            <TitleEditor
              thumbnailImageUrl={thumbnailImageUrl}
              title={title}
              status={status}
              startDate={startDate}
              endDate={endDate}
              members={membersToRender}
              setStatusToRender={setStatusToRender}
              setMembersToRender={setMembersToRender}
            />

            <DescriptionEditor description={description} />

            <TechStackEditor
              techStackAssets={techStackAssets}
              techStacksToRender={techStacksToRender}
              setTechStacksToRender={setTechStacksToRender}
            />

            {/* <EnvEditor configuration={projectId ? configuration : null} /> */}
          </ProjectContentContainer>
        </Content>
        <Aside>
          <ProjectSideContainer>
            <DocumentTooltipList linkAssets={linkAssets} linksToRender={linksToRender} setLinksToRender={setLinksToRender} />

            <Divider />

            <S.SideStickyContainer>
              <SaveButton />

              <CancelButton />

              {isEdit && (
                <>
                  <Divider />

                  <DeleteButton />
                </>
              )}
            </S.SideStickyContainer>
          </ProjectSideContainer>
        </Aside>
      </S.Form>
    </>
  );
}
