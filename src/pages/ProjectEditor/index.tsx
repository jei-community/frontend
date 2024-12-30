import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

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
import { useProjectAssets } from '@/pages/ProjectEditor/hooks';
import { S } from '@/pages/ProjectEditor/style';
import { TechStacksToRender } from '@/pages/ProjectEditor/type';

export default function ProjectEditor() {
  const { title, thumbnailImageUrl, status, startDate, endDate, description, frontend, backend, links, isEdit } = useProjectDetails();
  const { members } = useMember();
  const [membersToRender, setMembersToRender] = useState<Members>(members);
  const { techStackAssets, linkAssets } = useProjectAssets();
  const [techStacksToRender, setTechStacksToRender] = useState<TechStacksToRender>({
    frontend,
    backend,
  });
  const [linksToRender, setLinksToRender] = useState<LinkItem>(links);
  const navigate = useNavigate();

  const submitProjectDetails = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const status = formData.getAll('status');
    const data = Object.fromEntries(formData.entries());

    console.log(data, status);

    if (confirm('저장하시겠습니까?')) {
      console.log('Save');
      navigate(PATH.PROJECT.ABSOLUTE.LIST.ITEM.WITH_ID('newId'));
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
