import { CatIcon, LinkIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';

import { LinkItem } from '@/types/project';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';
import Modal from '@/pages/ProjectEditor/components/Modal';
import TooltipList from '@/pages/ProjectItem/components/TooltipList';

interface Props {
  links: LinkItem[] | null;
}

export default function DocumentTooltipList({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openDocumentLinkModal = () => setIsOpen(true);

  const closeDocumentLinkModal = () => setIsOpen(false);

  return (
    <>
      <ButtonWithIcon size='100%' onClick={openDocumentLinkModal}>
        <S.TooltipListWrapper>
          {links ? (
            <TooltipList links={links} />
          ) : (
            <S.EmptyDocumentLinkContainer>
              <S.IconContainer>
                <LinkIcon />
                <PlusIcon width='1.2rem' height='1.2rem' />
              </S.IconContainer>
              <S.AddDocumentLinkText>문서 외부 링크 추가</S.AddDocumentLinkText>
            </S.EmptyDocumentLinkContainer>
          )}
        </S.TooltipListWrapper>
      </ButtonWithIcon>

      {isOpen && (
        <Modal title='관련 문서 링크' close={closeDocumentLinkModal}>
          <S.LinkList>
            {Array.from({ length: 20 }, (_, index) => {
              return (
                <li key={index}>
                  <S.Container>
                    <Button variant='outlined' size='icon'>
                      <CatIcon />
                    </Button>
                    <S.NameFieldWrapper>
                      <TextField heightSize='small' placeholder='링크 이름을 입력해 주세요' />
                    </S.NameFieldWrapper>
                    <TextField heightSize='small' placeholder='https://' />
                    <Button color='error' size='icon'>
                      <Trash2Icon />
                    </Button>
                  </S.Container>
                </li>
              );
            })}
          </S.LinkList>
        </Modal>
      )}
    </>
  );
}
