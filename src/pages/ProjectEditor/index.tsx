import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

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
import { useEditProjectMutation } from '@/pages/ProjectEditor/hooks/useEditProjectMutation';
import { useUploadS3Mutation } from '@/pages/ProjectEditor/hooks/usePresignedUrlMutation';
import { useProjectAssets } from '@/pages/ProjectEditor/hooks/useProjectAssets';
import { S } from '@/pages/ProjectEditor/style';
import { TechStacksToRender } from '@/pages/ProjectEditor/type';

export default function ProjectEditor() {
  const { projectId } = useParams();
  const { title, thumbnailImageUrl, status, startDate, endDate, description, frontend, backend, links, isEdit, isLoading } = useProjectDetails();
  const [statusToRender, setStatusToRender] = useState<string>(status);
  const { members } = useMember({ projectId });
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
  const createProjectMutation = useCreateProjectMutation();
  const editProjectMutation = useEditProjectMutation();

  const submitProjectDetails = async (event: FormEvent) => {
    event.preventDefault();

    const filteredParticipantList = membersToRender.filter((member) => member.isJoin).map((member) => member.id);

    if (confirm('저장하시겠습니까?')) {
      const formData = new FormData(event.target as HTMLFormElement);
      const { title, thumbnail, description, startDate, endDate } = Object.fromEntries(formData.entries());

      let thumbnailUrlToSave = thumbnailImageUrl;

      // Presigned URL 생성 및 파일 업로드가 필요한 경우
      if (thumbnail && thumbnail instanceof File && thumbnail.size !== 0 && thumbnail.name !== '') {
        // 기존 thumbnailImageUrl와 같지 않은 경우에만 Presigned URL 요청
        const presignedResult = await presignedMutation.mutateAsync({ type: 'PROJECT_THUMBNAIL' });

        // S3 업로드
        await uploadS3Mutation.mutateAsync({
          url: presignedResult.url,
          file: thumbnail,
        });

        // 새로 저장할 썸네일 URL 설정
        thumbnailUrlToSave = presignedResult.fileName;
      }

      // 최종 프로젝트 데이터 생성
      const newProjectDetail = {
        title,
        description,
        thumbnailImageUrl: thumbnailUrlToSave ?? null,
        participantList: filteredParticipantList.length ? filteredParticipantList : null,
        metadata: {
          frontend: techStacksToRender.frontend?.map(({ id }) => id) ?? null,
          backend: techStacksToRender.backend?.map(({ id }) => id) ?? null,
          link:
            linksToRender
              ?.map(({ id, items }) => ({
                id,
                items: items?.filter((item) => item.trim() !== '') ?? [], // 빈 문자열 제거
              }))
              .filter(({ items }) => items && items.length > 0) ?? null, // items가 빈 배열이면 제외
        },
        status: statusToRender ?? status ?? 'LIVE',
        startDate: formatToYYYYMMDD(new Date(String(startDate))),
        endDate: formatToYYYYMMDD(new Date(String(endDate))),
      };

      console.log(newProjectDetail.metadata.link);

      let newProjectId = projectId;

      if (isEdit) {
        await editProjectMutation.mutateAsync(newProjectDetail);
      } else {
        const projectResult = await createProjectMutation.mutateAsync(newProjectDetail);
        newProjectId = projectResult.newProjectId;
      }

      // 네비게이션 이동
      navigate(newProjectId ? PATH.PROJECT.ABSOLUTE.LIST.ITEM.WITH_ID(newProjectId) : PATH.PROJECT.ABSOLUTE.LIST.INDEX);
    }
  };

  if (isLoading) return null;

  return (
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

          <TechStackEditor techStackAssets={techStackAssets} techStacksToRender={techStacksToRender} setTechStacksToRender={setTechStacksToRender} />

          {/* <EnvEditor configuration={projectId ? configuration : null} /> */}
        </ProjectContentContainer>
      </Content>
      <Aside>
        <ProjectSideContainer>
          <DocumentTooltipList linkAssets={linkAssets} linksToRender={linksToRender} setLinksToRender={setLinksToRender} />

          <Divider />

          <S.SideStickyContainer>
            <SaveButton isEdit={isEdit} />

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
  );
}
