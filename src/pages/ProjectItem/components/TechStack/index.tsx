import { RefObject, useState } from 'react';

import { TechStackItem } from '@/types/project';

import MoreButton from '@/components/MoreButton';
import TechStackWithPosition from '@/components/TechStack';
import TechStackContainer from '@/components/TechStackContainer';

interface Props {
  ref: RefObject<HTMLHeadingElement | null>;
  frontend?: TechStackItem;
  backend?: TechStackItem;
}

export default function TechStack({ ref, frontend, backend }: Props) {
  const [isTechStackOpen, setIsTechStackOpen] = useState(false);

  const handleToggleTechStack = () => setIsTechStackOpen(!isTechStackOpen);

  if (!frontend && !backend) return null;

  return (
    <TechStackContainer ref={ref}>
      <TechStackWithPosition>
        {frontend && (
          <>
            <TechStackWithPosition.Title>FRONTEND</TechStackWithPosition.Title>
            <TechStackWithPosition.List techStacks={frontend} display={isTechStackOpen ? 'grid' : 'flex'} />
          </>
        )}
        {backend && (
          <>
            <TechStackWithPosition.Title>BACKEND</TechStackWithPosition.Title>
            <TechStackWithPosition.List techStacks={backend} display={isTechStackOpen ? 'grid' : 'flex'} />
          </>
        )}
      </TechStackWithPosition>

      <MoreButton isOpen={isTechStackOpen} onClick={handleToggleTechStack} />
    </TechStackContainer>
  );
}
