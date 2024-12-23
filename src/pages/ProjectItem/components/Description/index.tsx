import { RefObject, useState } from 'react';

import DescriptionContainer from '@/components/DescriptionContainer';
import MoreButton from '@/components/MoreButton';

import { S } from '@/pages/ProjectItem/components/Description/style';

interface Props {
  ref: RefObject<HTMLHeadingElement | null>;
  description: string;
}

// TODO(증훈): 서버 데이터로 교체
export default function Description({ ref, description }: Props) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleToggleDescription = () => setIsDescriptionOpen(!isDescriptionOpen);

  return (
    <DescriptionContainer ref={ref}>
      <S.DescriptionText $isOpen={isDescriptionOpen}>{description}</S.DescriptionText>
      <MoreButton isOpen={isDescriptionOpen} onClick={handleToggleDescription} />
    </DescriptionContainer>
  );
}
