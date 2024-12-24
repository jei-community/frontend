import { useState } from 'react';

import { LinkItem } from '@/types/project';

import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import EmptyLink from '@/pages/ProjectEditor/components/DocumentTooltipList/components/EmptyLink';
import LinkEditor from '@/pages/ProjectEditor/components/DocumentTooltipList/components/LinkEditor';
import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';
import Modal from '@/pages/ProjectEditor/components/Modal';
import TooltipList from '@/pages/ProjectItem/components/TooltipList';

interface Props {
  links: LinkItem[] | null;
}

export default function DocumentTooltipList({ links }: Props) {
  const [linksToRender, setLinksToRender] = useState<LinkItem[] | null>(links);
  const [isOpen, setIsOpen] = useState(false);

  const openDocumentLinkModal = () => setIsOpen(true);

  const closeDocumentLinkModal = () => {
    setIsOpen(false);
    resetLinksToRender();
  };

  const resetLinksToRender = () => setLinksToRender(links);

  return (
    <>
      <ButtonWithIcon size='100%' onClick={openDocumentLinkModal}>
        <S.TooltipListWrapper>{linksToRender ? <TooltipList links={linksToRender} /> : <EmptyLink />}</S.TooltipListWrapper>
      </ButtonWithIcon>

      {isOpen && (
        <Modal title='관련 문서 링크' close={closeDocumentLinkModal}>
          <LinkEditor linksToRender={linksToRender} setLinksToRender={setLinksToRender} />
        </Modal>
      )}
    </>
  );
}
