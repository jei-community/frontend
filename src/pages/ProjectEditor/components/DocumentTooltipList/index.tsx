import { Dispatch, SetStateAction, useState } from 'react';

import { LinkItem, ProjectAsset } from '@/types/project';

import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import EmptyLink from '@/pages/ProjectEditor/components/DocumentTooltipList/components/EmptyLink';
import LinkEditor from '@/pages/ProjectEditor/components/DocumentTooltipList/components/LinkEditor';
import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';
import Modal from '@/pages/ProjectEditor/components/Modal';
import TooltipList from '@/pages/ProjectItem/components/TooltipList';

interface Props {
  linkAssets: ProjectAsset[];
  linksToRender: LinkItem;
  setLinksToRender: Dispatch<SetStateAction<LinkItem>>;
}

export default function DocumentTooltipList({ linkAssets, linksToRender, setLinksToRender }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openDocumentLinkModal = () => setIsOpen(true);

  const closeDocumentLinkModal = () => setIsOpen(false);

  return (
    <>
      <ButtonWithIcon size='100%' onClick={openDocumentLinkModal}>
        <S.TooltipListWrapper>{linksToRender ? <TooltipList links={linksToRender} /> : <EmptyLink />}</S.TooltipListWrapper>
      </ButtonWithIcon>

      {isOpen && (
        <Modal title='관련 문서 링크' close={closeDocumentLinkModal}>
          <LinkEditor
            linkAssets={linkAssets}
            linksToRender={linksToRender}
            setLinksToRender={setLinksToRender}
            closeDocumentLinkModal={closeDocumentLinkModal}
          />
        </Modal>
      )}
    </>
  );
}
