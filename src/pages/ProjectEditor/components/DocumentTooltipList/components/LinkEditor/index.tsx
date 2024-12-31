import { SetStateAction } from 'react';

import { LinkItem as LinkItemType, ProjectAsset } from '@/types/project';

import Button from '@/components/Button';
import CenteredWrapper from '@/components/CenteredWrapper';
import EmptyContent from '@/components/EmptyContent';

import DocumentIconButton from '@/pages/ProjectEditor/components/DocumentTooltipList/components/DocumentIconButton';
import LinkItem from '@/pages/ProjectEditor/components/DocumentTooltipList/components/LinkEditor/LinkItem';
import { LINK_TYPES } from '@/pages/ProjectEditor/components/DocumentTooltipList/constants';
import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';

interface Props {
  linkAssets: ProjectAsset;
  linksToRender: LinkItemType;
  setLinksToRender: (value: SetStateAction<LinkItemType>) => void;
  closeDocumentLinkModal: () => void;
}

export default function LinkEditor({ linkAssets, linksToRender, setLinksToRender, closeDocumentLinkModal }: Props) {
  const addNewUrlToLinksToRender = (tag: string) => {
    if (!linksToRender) {
      // 링크가 0개일 경우
      setLinksToRender([
        {
          id: linkAssets.find((linkAsset) => tag === linkAsset.tag)?.id,
          url: linkAssets.find((linkAsset) => tag === linkAsset.tag)?.url ?? '',
          tag,
          items: [''],
        },
      ]);
    } else if (linksToRender.find((link) => link.tag === tag)) {
      // 같은 태그의 링크가 존재할 경우
      const newLinksToRender = linksToRender.map((link) => {
        if (link.tag === tag) {
          if (link.items) link.items.push('');
          else link.items = [''];
        }

        return link;
      });

      setLinksToRender(newLinksToRender);
    } else {
      // 새로운 태그의 링크일 경우
      setLinksToRender([
        ...linksToRender,
        {
          id: linkAssets.find((linkAsset) => tag === linkAsset.tag)?.id,
          url: linkAssets.find((linkAsset) => tag === linkAsset.tag)?.url ?? '',
          tag,
          items: [''],
        },
      ]);
    }
  };

  return (
    <S.ModalContainer>
      <S.LinkList>
        {linksToRender ? (
          linksToRender.map(({ url, tag, items }) => {
            return items?.map((item, index) => (
              <li key={`${tag}-${index}`}>
                <LinkItem linksToRender={linksToRender} setLinksToRender={setLinksToRender} item={item} url={url} tag={tag} index={index} />
              </li>
            ));
          })
        ) : (
          <CenteredWrapper>
            <EmptyContent>링크를 추가해 주세요</EmptyContent>
          </CenteredWrapper>
        )}
      </S.LinkList>
      <S.LinkEditBottom>
        <S.DocumentIconButtonList>
          {LINK_TYPES.map((tag) => (
            <li key={tag}>
              <DocumentIconButton tag={tag} addNewUrlToLinksToRender={addNewUrlToLinksToRender} />
            </li>
          ))}
        </S.DocumentIconButtonList>
        <Button size='medium' color='success' onClick={closeDocumentLinkModal}>
          닫기
        </Button>
      </S.LinkEditBottom>
    </S.ModalContainer>
  );
}
