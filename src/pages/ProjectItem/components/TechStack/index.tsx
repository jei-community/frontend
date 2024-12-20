import { RefObject, useState } from 'react';

import { TechStackItem } from '@/types/project';

import MoreButton from '@/components/MoreButton';
import TechStackContainer from '@/components/TechStackContainer';
import TechStackList from '@/components/TechStackList';

interface Props {
  ref: RefObject<HTMLHeadingElement | null>;
  techStacks: TechStackItem[];
}

export default function TechStack({ ref, techStacks }: Props) {
  const [isTechStackOpen, setIsTechStackOpen] = useState(false);

  const handleToggleTechStack = () => setIsTechStackOpen(!isTechStackOpen);

  return (
    <TechStackContainer ref={ref}>
      {techStacks.map(({ position, data }) => {
        return (
          <>
            <TechStackList.Title>{position}</TechStackList.Title>
            <TechStackList techStacks={data} display={isTechStackOpen ? 'grid' : 'flex'} />
          </>
        );
      })}
      <MoreButton isOpen={isTechStackOpen} onClick={handleToggleTechStack} />
    </TechStackContainer>
  );
}
