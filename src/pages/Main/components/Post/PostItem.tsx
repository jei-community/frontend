import { Thumbnail } from '../../assets';
import { S } from './style';

interface Props {
  name: string;
  position: string;
  title: string;
  description: string;
  date: string;
}
export default function PostItem({ name, position, title, description, date }: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.MetaWrapper>
        <S.AuthorInfo.Wrapper>
          <S.AuthorInfo.Avatar src={Thumbnail} />
          <S.AuthorInfo.Name>{name}</S.AuthorInfo.Name>
          <S.AuthorInfo.Position>{position}</S.AuthorInfo.Position>
        </S.AuthorInfo.Wrapper>
        <S.AuthorInfo.Date>{date}</S.AuthorInfo.Date>
      </S.MetaWrapper>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
