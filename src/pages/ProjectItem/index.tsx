import { useRef } from 'react';

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

  return (
    <>
      <Content>
        <ProjectContentContainer>
          <Title />

          <Description ref={descriptionRef} />

          <TechStack ref={techStackRef} />

          <Env ref={envRef} />
        </ProjectContentContainer>
      </Content>
      <Aside>
        <ProjectSideContainer>
          <TooltipList ref={linkRef} />
          <EditorLink />
          <Divider />
          <TableOfContent linkRef={linkRef} descriptionRef={descriptionRef} techStackRef={techStackRef} envRef={envRef} />
        </ProjectSideContainer>
      </Aside>
    </>
  );
}
