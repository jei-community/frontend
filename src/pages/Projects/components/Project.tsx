import { S } from '@/pages/Projects/components/style';

import GlassSVG from '../assets/icons/glass.svg';

export default function Project() {
  return (
    <S.Container>
      <S.Title>EVERYDEI</S.Title>
      <S.Thumbnail src={GlassSVG}></S.Thumbnail>
      <S.ContentContainer>
        <S.Date>2024. 00. 00 ~ 2024. 00. 00</S.Date>
        <S.ProjectState />
      </S.ContentContainer>
      <S.Description>
        Lorem ipsum dolor sit amet consectetur. In convallis mi mauris euismod risus vitae gravida libero. Suspendisse nec in amet at malesuada.
        Vestibulum hac vulputate praesent venenatis facilisi molestie egestas placerat.
      </S.Description>
    </S.Container>
  );
}
