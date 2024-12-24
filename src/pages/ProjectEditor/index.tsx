import { FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router';

import { mockProjectConfigurations, mockProjectDetails } from '@/mocks/data/project';

import { PATH } from '@/constants/path';

import Aside from '@/components/Aside';
import Content from '@/components/Content';
import Divider from '@/components/Divider';
import ProjectContentContainer from '@/components/ProjectContentContainer';
import ProjectSideContainer from '@/components/ProjectSideContainer';

import CancelButton from '@/pages/ProjectEditor/components/CancelButton';
import DeleteButton from '@/pages/ProjectEditor/components/DeleteButton';
import DescriptionEditor from '@/pages/ProjectEditor/components/DescriptionEditor';
import DocumentTooltipList from '@/pages/ProjectEditor/components/DocumentTooltipList';
import EnvEditor from '@/pages/ProjectEditor/components/EnvEditor';
import SaveButton from '@/pages/ProjectEditor/components/SaveButton';
import TechStackEditor from '@/pages/ProjectEditor/components/TechStackEditor';
import TitleEditor from '@/pages/ProjectEditor/components/TitleEditor';
import { S } from '@/pages/ProjectEditor/style';

export default function ProjectEditor() {
  const { projectId } = useParams();
  const { thumbnailImageUrl, title, status, startDate, endDate, description, metadata } = mockProjectDetails;
  const { configuration } = mockProjectConfigurations;
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
              thumbnailImageUrl={projectId ? thumbnailImageUrl : null}
              title={projectId ? title : null}
              status={projectId ? status : null}
              startDate={projectId ? startDate : null}
              endDate={projectId ? endDate : null}
            />

            <DescriptionEditor description={projectId ? description : null} />

            <TechStackEditor techStacks={projectId ? metadata.tech : null} />

            <EnvEditor configuration={projectId ? configuration : null} />
          </ProjectContentContainer>
        </Content>
        <Aside>
          <ProjectSideContainer>
            <DocumentTooltipList links={projectId ? metadata.link : null} />

            <Divider />

            <S.SideStickyContainer>
              <SaveButton />

              <CancelButton />

              <Divider />

              <DeleteButton />
            </S.SideStickyContainer>
          </ProjectSideContainer>
        </Aside>
      </S.Form>
    </>
  );
}
