import { useRef } from 'react';

import { mockProjectConfigurations, mockProjectDetails } from '@/mocks/data/project';

import Aside from '@/components/Aside';
import Content from '@/components/Content';
import Divider from '@/components/Divider';
import ProjectContentContainer from '@/components/ProjectContentContainer';
import ProjectSideContainer from '@/components/ProjectSideContainer';

import Description from '@/pages/ProjectItem/components/Description';
import EditorLink from '@/pages/ProjectItem/components/EditorLink';
import Env from '@/pages/ProjectItem/components/Env';
import TableOfContent from '@/pages/ProjectItem/components/TableOfContent';
import TechStack from '@/pages/ProjectItem/components/TechStack';
import Title from '@/pages/ProjectItem/components/Title';
import TooltipList from '@/pages/ProjectItem/components/TooltipList';

export default function ProjectItem() {
  const linkRef = useRef<HTMLUListElement | null>(null);
  const descriptionRef = useRef<HTMLHeadingElement | null>(null);
  const techStackRef = useRef<HTMLHeadingElement | null>(null);
  const envRef = useRef<HTMLHeadingElement | null>(null);
  const { thumbnailImageUrl, title, status, startDate, endDate, description, metadata } = mockProjectDetails;
  const { configuration } = mockProjectConfigurations;

  return (
    <>
      <Content>
        <ProjectContentContainer>
          <Title thumbnailImageUrl={thumbnailImageUrl} title={title} status={status} startDate={startDate} endDate={endDate} />

          <Description ref={descriptionRef} description={description} />

          <TechStack ref={techStackRef} techStacks={metadata.tech} />

          <Env ref={envRef} configuration={configuration} />
        </ProjectContentContainer>
      </Content>
      <Aside>
        <ProjectSideContainer>
          <TooltipList ref={linkRef} links={metadata.link} />
          <EditorLink />
          <Divider />
          <TableOfContent linkRef={linkRef} descriptionRef={descriptionRef} techStackRef={techStackRef} envRef={envRef} />
        </ProjectSideContainer>
      </Aside>
    </>
  );
}
