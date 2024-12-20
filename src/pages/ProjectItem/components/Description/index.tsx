import { RefObject, useState } from 'react';

import DescriptionContainer from '@/components/DescriptionContainer';
import MoreButton from '@/components/MoreButton';

import { S } from '@/pages/ProjectItem/components/Description/style';

interface Props {
  ref: RefObject<HTMLHeadingElement | null>;
}

// TODO(증훈): 서버 데이터로 교체
export default function Description({ ref }: Props) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleToggleDescription = () => setIsDescriptionOpen(!isDescriptionOpen);

  return (
    <DescriptionContainer ref={ref}>
      <S.DescriptionText $isOpen={isDescriptionOpen}>
        Lorem ipsum dolor sit amet consectetur. Nunc enim at dignissim condimentum. A vel odio nibh ullamcorper. Cursus purus in ultrices posuere sed
        ut. Amet a diam purus vitae ipsum eleifend mi quisque tortor. Odio sed tellus suscipit sem volutpat. Aliquam amet sollicitudin varius laoreet
        eget sollicitudin. Id vestibulum arcu molestie mauris suspendisse aliquet magna convallis. Ut vulputate ornare sollicitudin mattis amet a ante
        et. Sed vulputate consectetur lorem rhoncus tempus tempus a risus. Sit eu in quam fermentum non interdum et risus. Orci nulla vitae venenatis
        donec vulputate magnis enim lobortis. Elementum egestas neque venenatis nunc. Lorem ipsum dolor sit amet consectetur. Nunc enim at dignissim
        condimentum. A vel odio nibh ullamcorper. Cursus purus in ultrices posuere sed ut. Amet a diam purus vitae ipsum eleifend mi quisque tortor.
        Odio sed tellus suscipit sem volutpat. Aliquam amet sollicitudin varius laoreet eget sollicitudin. Id vestibulum arcu molestie mauris
        suspendisse aliquet magna convallis. Ut vulputate ornare sollicitudin mattis amet a ante et. Sed vulputate consectetur lorem rhoncus tempus
        tempus a risus. Sit eu in quam fermentum non interdum et risus. Orci nulla vitae venenatis donec vulputate magnis enim lobortis. Elementum
        egestas neque venenatis nunc
      </S.DescriptionText>
      <MoreButton isOpen={isDescriptionOpen} onClick={handleToggleDescription} />
    </DescriptionContainer>
  );
}
