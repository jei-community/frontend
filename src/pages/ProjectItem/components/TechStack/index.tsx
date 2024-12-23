import { RefObject, useState } from 'react';

import { TechStackItem } from '@/types/project';

import MoreButton from '@/components/MoreButton';
import TechStackWithPosition from '@/components/TechStack';
import TechStackContainer from '@/components/TechStackContainer';

interface Props {
  ref: RefObject<HTMLHeadingElement | null>;
  techStacks: TechStackItem[];
}

export default function TechStack({ ref, techStacks }: Props) {
  const [isTechStackOpen, setIsTechStackOpen] = useState(false);

  const handleToggleTechStack = () => setIsTechStackOpen(!isTechStackOpen);

  return (
    <TechStackContainer ref={ref}>
      <ul>
        {techStacks.map(({ position, data }) => {
          return (
            <li key={Math.random()}>
              <TechStackWithPosition>
                <TechStackWithPosition.Title>{position}</TechStackWithPosition.Title>
                <TechStackWithPosition.List techStacks={data} display={isTechStackOpen ? 'grid' : 'flex'} />
              </TechStackWithPosition>
            </li>
          );
        })}
      </ul>
      <MoreButton isOpen={isTechStackOpen} onClick={handleToggleTechStack} />
    </TechStackContainer>
  );
}
