import { useRef } from 'react';

import Aside from '@/components/Aside';
import Content from '@/components/Content';
import Divider from '@/components/Divider';

import DescriptionContainer from '@/pages/Project/components/DescriptionContainer';
import HyperlinkList from '@/pages/Project/components/HyperlinkList';
import TableOfContent from '@/pages/Project/components/TableOfContent';
import TechStackAndEnvContainer from '@/pages/Project/components/TechStackAndEnvContainer';
import TitleContainer from '@/pages/Project/components/TitleContainer';
import { S } from '@/pages/Project/style';

export default function Project() {
  const linkRef = useRef<HTMLUListElement | null>(null);
  const descriptionRef = useRef<HTMLHeadingElement | null>(null);
  const techStackRef = useRef<HTMLHeadingElement | null>(null);
  const envRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <>
      <Content>
        <S.Container>
          <TitleContainer />
          <DescriptionContainer ref={descriptionRef} />
          <TechStackAndEnvContainer techStackRef={techStackRef} envRef={envRef} />
        </S.Container>
      </Content>
      <Aside>
        <S.SideContainer>
          <HyperlinkList ref={linkRef} />
          <S.EditLink to='/projects/editor'>
            <S.EditText>프로젝트 수정</S.EditText>
          </S.EditLink>
          <Divider direction='horizontal' />
          <TableOfContent linkRef={linkRef} descriptionRef={descriptionRef} techStackRef={techStackRef} envRef={envRef} />
        </S.SideContainer>
      </Aside>
    </>
  );
}
