import { useRef } from 'react';

import Aside from '@/components/Aside';
import Content from '@/components/Content';
import Divider from '@/components/Divider';
import ProjectContentContainer from '@/components/ProjectContentContainer';
import ProjectSideContainer from '@/components/ProjectSideContainer';

import { useProjectDetails } from '@/hooks';
import Description from '@/pages/ProjectItem/components/Description';
import EditorLink from '@/pages/ProjectItem/components/EditorLink';
import TableOfContent from '@/pages/ProjectItem/components/TableOfContent';
import TechStack from '@/pages/ProjectItem/components/TechStack';
import Title from '@/pages/ProjectItem/components/Title';
import TooltipList from '@/pages/ProjectItem/components/TooltipList';

export default function ProjectItem() {
  const linkRef = useRef<HTMLUListElement | null>(null);
  const descriptionRef = useRef<HTMLHeadingElement | null>(null);
  const techStackRef = useRef<HTMLHeadingElement | null>(null);
  const { title, thumbnailImageUrl, status, startDate, endDate, description, frontend, backend, links } = useProjectDetails();

  return (
    <>
      <Content>
        <ProjectContentContainer>
          <Title thumbnailImageUrl={thumbnailImageUrl} title={title} status={status} startDate={startDate} endDate={endDate} />

          <Description ref={descriptionRef} description={description} />

          <TechStack ref={techStackRef} frontend={frontend} backend={backend} />

          {/* <Env ref={envRef} configuration={configuration} /> */}
        </ProjectContentContainer>
      </Content>
      <Aside>
        <ProjectSideContainer>
          <TooltipList ref={linkRef} links={links} />
          <EditorLink />
          <Divider />
          <TableOfContent
            linkRef={linkRef}
            descriptionRef={descriptionRef}
            techStackRef={techStackRef}
            hasTechStackContent={Boolean(frontend || backend)}
          />
        </ProjectSideContainer>
      </Aside>
    </>
  );
}
