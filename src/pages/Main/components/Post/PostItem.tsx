import { formatRelativeDate } from '@/utils/common';

import { Role } from '@/types/album';

import { ROLE_TEXT } from '@/constants/common';

import { S } from './style';

interface Props {
  name: string;
  profileImageUrl: string;
  position: string;
  title: string;
  description: string;
  date: Date;
  onClick: () => void;
}

export default function PostItem({ name, profileImageUrl, position, title, description, date, onClick }: Props) {
  return (
    <S.Container onClick={onClick}>
      <S.Title>{title}</S.Title>
      <S.MetaWrapper>
        <S.AuthorInfo.Wrapper>
          <S.AuthorInfo.Avatar src={profileImageUrl} />
          <S.AuthorInfo.Name>{name}</S.AuthorInfo.Name>
          <S.AuthorInfo.Position>{ROLE_TEXT[position as Role]}</S.AuthorInfo.Position>
        </S.AuthorInfo.Wrapper>
        <S.AuthorInfo.Date>{formatRelativeDate(date)}</S.AuthorInfo.Date>
      </S.MetaWrapper>
      <S.MarkdownWrapper>
        <S.Markdown
          source={description}
          components={{
            h1: ({ children }) => <h1 style={{ borderBottom: 'none' }}>{children}</h1>,
            h2: ({ children }) => <h2 style={{ borderBottom: 'none' }}>{children}</h2>,
            h3: ({ children }) => <h3 style={{ borderBottom: 'none' }}>{children}</h3>,
            h4: ({ children }) => <h4 style={{ borderBottom: 'none' }}>{children}</h4>,
            h5: ({ children }) => <h5 style={{ borderBottom: 'none' }}>{children}</h5>,
            h6: ({ children }) => <h6 style={{ borderBottom: 'none' }}>{children}</h6>,
          }}
        ></S.Markdown>
      </S.MarkdownWrapper>
    </S.Container>
  );
}
