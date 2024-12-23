import TechStack from '@/components/TechStack';

import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import { S } from '@/pages/ProjectEditor/components/TechStackEditor/style';

interface Props {
  openTechStackModal: (position: string) => void;
}

export default function DefaultTechStacks({ openTechStackModal }: Props) {
  return (
    <>
      <TechStack>
        <TechStack.Title>FRONTEND</TechStack.Title>
        <ButtonWithIcon size='100%' onClick={() => openTechStackModal('FRONTEND')}>
          <S.TechListWrapper>
            <div style={{ height: '100px' }} />
          </S.TechListWrapper>
        </ButtonWithIcon>
      </TechStack>
      <TechStack>
        <TechStack.Title>BACKEND</TechStack.Title>
        <ButtonWithIcon size='100%' onClick={() => openTechStackModal('BACKEND')}>
          <S.TechListWrapper>
            <div style={{ height: '100px' }} />
          </S.TechListWrapper>
        </ButtonWithIcon>
      </TechStack>
    </>
  );
}
