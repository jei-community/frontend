import { RefObject, useState } from 'react';

import { techStacks } from '@/mocks/data';

import MoreButton from '@/components/MoreButton';
import TechStackContainer from '@/components/TechStackContainer';
import TechStackList from '@/components/TechStackList';

interface Props {
  ref: RefObject<HTMLHeadingElement | null>;
}

// TODO(증훈): 서버 데이터로 교체
export default function TechStack({ ref }: Props) {
  const [isTechStackOpen, setIsTechStackOpen] = useState(false);

  const handleToggleTechStack = () => setIsTechStackOpen(!isTechStackOpen);

  return (
    <TechStackContainer ref={ref}>
      <TechStackList.Title>Frontend</TechStackList.Title>
      <TechStackList techStacks={techStacks} display={isTechStackOpen ? 'grid' : 'flex'} />
      <TechStackList.Title>Backend</TechStackList.Title>
      <TechStackList techStacks={techStacks} display={isTechStackOpen ? 'grid' : 'flex'} />
      <MoreButton isOpen={isTechStackOpen} onClick={handleToggleTechStack} />
    </TechStackContainer>
  );
}
