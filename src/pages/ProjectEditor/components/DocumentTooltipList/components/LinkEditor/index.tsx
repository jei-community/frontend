import { Trash2Icon } from 'lucide-react';
import { SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { LinkItem, ProjectAsset } from '@/types/project';

import Button from '@/components/Button';
import CenteredWrapper from '@/components/CenteredWrapper';
import EmptyContent from '@/components/EmptyContent';
import TextField from '@/components/TextField';

import DocumentIconButton from '@/pages/ProjectEditor/components/DocumentTooltipList/components/DocumentIconButton';
import { LINK_TYPES } from '@/pages/ProjectEditor/components/DocumentTooltipList/constants';
import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';

interface Props {
  linkAssets: ProjectAsset[];
  linksToRender: LinkItem;
  setLinksToRender: (value: SetStateAction<LinkItem>) => void;
  closeDocumentLinkModal: () => void;
}

export default function LinkEditor({ linkAssets, linksToRender, setLinksToRender, closeDocumentLinkModal }: Props) {
  const addNewUrlToLinksToRender = (tag: string) => {
    const linkToRenderId = uuidv4();

    if (!linksToRender) {
      // 링크가 0개 일 경우
      setLinksToRender([{ id: linkToRenderId, url: linkAssets.find((linkAsset) => tag === linkAsset.tag)?.url ?? '', tag, items: [''] }]);
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
        { id: linkToRenderId, url: linkAssets.find((linkAsset) => tag === linkAsset.tag)?.url ?? '', tag, items: [''] },
      ]);
    }
  };

  const deleteUrlFromLinksToRender = (tag: string, item: string) => {
    const updatedLinksToRender = linksToRender
      ?.map((linkToRender) => {
        if (linkToRender.tag !== tag) return linkToRender;

        return {
          ...linkToRender,
          items: linkToRender.items?.filter((url) => url !== item),
        };
      })
      .filter((link) => link.url.length);

    setLinksToRender(updatedLinksToRender ?? null);
  };

  return (
    <S.ModalContainer>
      <S.LinkList>
        {linksToRender ? (
          linksToRender.map(({ url, tag, items }) => {
            return items?.map((item) => {
              const itemId = uuidv4();

              return (
                <li key={itemId}>
                  <S.Container>
                    <button>
                      <S.Icon src={url} alt={tag} />
                    </button>
                    <S.NameFieldWrapper>
                      <TextField heightSize='small' placeholder='링크 이름을 입력해 주세요' defaultValue={tag} />
                    </S.NameFieldWrapper>
                    <TextField heightSize='small' placeholder='https://' defaultValue={item} />
                    <Button color='error' size='icon' onClick={() => deleteUrlFromLinksToRender(tag, item)}>
                      <Trash2Icon />
                    </Button>
                  </S.Container>
                </li>
              );
            });
          })
        ) : (
          <CenteredWrapper>
            <EmptyContent>링크를 추가해 주세요</EmptyContent>
          </CenteredWrapper>
        )}
      </S.LinkList>
      <S.LinkEditBottom>
        <S.DocumentIconButtonList>
          {LINK_TYPES.map((tag) => {
            return (
              <li key={tag}>
                <DocumentIconButton tag={tag} addNewUrlToLinksToRender={addNewUrlToLinksToRender} />
              </li>
            );
          })}
        </S.DocumentIconButtonList>

        <Button size='medium' color='success' onClick={closeDocumentLinkModal}>
          저장
        </Button>
      </S.LinkEditBottom>
    </S.ModalContainer>
  );
}
