import { CatIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';
import Modal from '@/pages/ProjectEditor/components/Modal';
import TooltipList from '@/pages/ProjectItem/components/TooltipList';
import styled from '@emotion/styled';

export default function DocumentTooltipList() {
  const [isOpen, setIsOpen] = useState(false);

  const openDocumentLinkModal = () => setIsOpen(true);

  const closeDocumentLinkModal = () => setIsOpen(false);

  return (
    <>
      <ButtonWithIcon onClick={openDocumentLinkModal}>
        <S.TooltipListWrapper>
          <TooltipList />
        </S.TooltipListWrapper>
      </ButtonWithIcon>

      {isOpen && (
        <Modal title='관련 문서 링크' close={closeDocumentLinkModal}>
          <LinkStyle.LinkList>
            {Array.from({ length: 20 }, (_, index) => {
              return (
                <li key={index}>
                  <LinkStyle.Container>
                    <Button variant='outlined' size='icon'>
                      <CatIcon />
                    </Button>
                    <LinkStyle.NameFieldWrapper>
                      <TextField heightSize='small' placeholder='링크 이름을 입력해 주세요' />
                    </LinkStyle.NameFieldWrapper>
                    <TextField heightSize='small' placeholder='https://' />
                    <Button color='error' size='icon'>
                      <Trash2Icon />
                    </Button>
                  </LinkStyle.Container>
                </li>
              );
            })}
          </LinkStyle.LinkList>
        </Modal>
      )}
    </>
  );
}

const LinkStyle = {
  Container: styled.div({
    display: 'flex',
    gap: '0.8rem',
  }),

  NameFieldWrapper: styled.div({
    width: '20rem',
  }),

  LinkList: styled.ul({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  }),
};
