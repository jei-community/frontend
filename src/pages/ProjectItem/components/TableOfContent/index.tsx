import { RefObject, useState } from 'react';

import { S } from '@/pages/ProjectItem/components/TableOfContent/style';

interface FocusedScroll {
  link: boolean;
  description: boolean;
  techStack: boolean;
}

interface Props {
  linkRef: RefObject<HTMLUListElement | null>;
  descriptionRef: RefObject<HTMLHeadingElement | null>;
  techStackRef: RefObject<HTMLHeadingElement | null>;
  hasTechStackContent: boolean;
}

export default function TableOfContent({ linkRef, descriptionRef, techStackRef, hasTechStackContent }: Props) {
  const [focusedScroll, setFocusedScroll] = useState<FocusedScroll>({
    link: true,
    description: false,
    techStack: false,
  });

  const handleScrollTo = (ref: RefObject<HTMLElement | null>, to: 'link' | 'description' | 'techStack' | 'env') => {
    if (!ref.current) return;

    ref.current.scrollIntoView({ behavior: 'smooth' });

    setFocusedScroll({
      link: to === 'link',
      description: to === 'description',
      techStack: to === 'techStack',
    });
  };

  return (
    <S.TableContainer>
      <S.TableOfContentTitle>목차</S.TableOfContentTitle>
      <S.TableOfContentContainer>
        <S.TableOfContentButton onClick={() => handleScrollTo(linkRef, 'link')}>
          <S.TableOfContentText $isFocus={focusedScroll.link}>링크</S.TableOfContentText>
        </S.TableOfContentButton>
        <S.TableOfContentButton onClick={() => handleScrollTo(descriptionRef, 'description')}>
          <S.TableOfContentText $isFocus={focusedScroll.description}>프로젝트 설명</S.TableOfContentText>
        </S.TableOfContentButton>
        {hasTechStackContent && (
          <S.TableOfContentButton onClick={() => handleScrollTo(techStackRef, 'techStack')}>
            <S.TableOfContentText $isFocus={focusedScroll.techStack}>기술 스택</S.TableOfContentText>
          </S.TableOfContentButton>
        )}
      </S.TableOfContentContainer>
    </S.TableContainer>
  );
}
