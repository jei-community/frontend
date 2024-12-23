import Aside from '@/components/Aside';
import Content from '@/components/Content';
import Divider from '@/components/Divider';
import ProjectContentContainer from '@/components/ProjectContentContainer';
import ProjectSideContainer from '@/components/ProjectSideContainer';

import CancelButton from '@/pages/ProjectEditor/components/CancelButton';
import DeleteButton from '@/pages/ProjectEditor/components/DeleteButton';
import DescriptionEditor from '@/pages/ProjectEditor/components/DescriptionEditor';
// import DocumentTooltipList from '@/pages/ProjectEditor/components/DocumentTooltipList';
import EnvEditor from '@/pages/ProjectEditor/components/EnvEditor';
import SaveButton from '@/pages/ProjectEditor/components/SaveButton';
import TechStackEditor from '@/pages/ProjectEditor/components/TechStackEditor';
import TitleEditor from '@/pages/ProjectEditor/components/TitleEditor';

export default function ProjectEditor() {
  return (
    <>
      <Content>
        <ProjectContentContainer>
          <TitleEditor />

          <DescriptionEditor />

          <TechStackEditor />

          <EnvEditor />
        </ProjectContentContainer>
      </Content>
      <Aside>
        <ProjectSideContainer>
          {/* <DocumentTooltipList /> */}

          <Divider />

          <SaveButton />

          <CancelButton />

          <Divider />

          <DeleteButton />
        </ProjectSideContainer>
      </Aside>
    </>
  );
}
