import { RefObject, useState } from 'react';

import { S } from '@/pages/Project/components/DescriptionContainer/style';

interface Props {
  ref: RefObject<HTMLHeadingElement | null>;
}

// TODO(증훈): 서버 데이터로 교체
export default function DescriptionContainer({ ref }: Props) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleToggleDescription = () => setIsDescriptionOpen(!isDescriptionOpen);

  return (
    <S.DescribeContainer>
      <S.CommonS.SubTitle ref={ref}>프로젝트 설명</S.CommonS.SubTitle>
      <S.DescribeContent $isOpen={isDescriptionOpen}>
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
      </S.DescribeContent>
      <S.CommonS.MoreButtonWrapper>
        <S.CommonS.MoreButton onClick={handleToggleDescription}>{isDescriptionOpen ? '접기' : '더 보기'}</S.CommonS.MoreButton>
      </S.CommonS.MoreButtonWrapper>
    </S.DescribeContainer>
  );
}
