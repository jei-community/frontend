import { TechStackItem } from '@/types/project';

import TechStack from '@/components/TechStack';

import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import { S } from '@/pages/ProjectEditor/components/TechStackEditor/style';

interface Props {
  techStacks: TechStackItem[];
  openTechStackModal: (position: string) => void;
}

export default function EditableTechStacks({ techStacks, openTechStackModal }: Props) {
  return (
    <ul>
      {techStacks.map(({ position, data }) => {
        return (
          <li key={Math.random()}>
            <TechStack>
              <TechStack.Title>{position}</TechStack.Title>
              <ButtonWithIcon size='100%' onClick={() => openTechStackModal(position)}>
                <S.TechListWrapper>
                  <TechStack.List techStacks={data} display={'grid'} />
                </S.TechListWrapper>
              </ButtonWithIcon>
            </TechStack>
          </li>
        );
      })}
    </ul>
  );
}
