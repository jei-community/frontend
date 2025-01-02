import { RefObject, useState } from 'react';

import DescriptionContainer from '@/components/DescriptionContainer';
import MoreButton from '@/components/MoreButton';

import { useIsMoreButtonVisible } from '@/pages/ProjectItem/components/Description/hooks';
import { S } from '@/pages/ProjectItem/components/Description/style';

interface Props {
  ref: RefObject<HTMLHeadingElement | null>;
  description: string;
}

export default function Description({ description, ref }: Props) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const isMoreButtonVisible = useIsMoreButtonVisible({ ref, description });

  const handleToggleDescription = () => setIsDescriptionOpen(!isDescriptionOpen);

  return (
    <DescriptionContainer>
      <S.DescriptionText ref={ref} $isOpen={isDescriptionOpen}>
        {description}
      </S.DescriptionText>
      {isMoreButtonVisible && <MoreButton isOpen={isDescriptionOpen} onClick={handleToggleDescription} />}
    </DescriptionContainer>
  );
}
