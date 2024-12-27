import { Trash2Icon } from 'lucide-react';
import { SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { LinkItem, LinkType, Url } from '@/types/project';

import { ICONS } from '@/constants/link';

import Button from '@/components/Button';
import CenteredWrapper from '@/components/CenteredWrapper';
import EmptyContent from '@/components/EmptyContent';
import TextField from '@/components/TextField';

import DocumentIconButton from '@/pages/ProjectEditor/components/DocumentTooltipList/components/DocumentIconButton';
import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';

interface Props {
  linksToRender: LinkItem[] | null;
  setLinksToRender: (value: SetStateAction<LinkItem[] | null>) => void;
  closeDocumentLinkModal: () => void;
}

export default function LinkEditor({ linksToRender, setLinksToRender, closeDocumentLinkModal }: Props) {
  const LINK_TYPES: LinkType[] = ['gitlab', 'figma', 'presentation', 'spreadsheet', 'xd'];

  const addNewUrlToLinksToRender = (tag: LinkType) => {
    const linkToRenderId = uuidv4();
    const newUrl: Url = { id: uuidv4(), url: '' };

    if (!linksToRender) {
      // 링크가 0개 일 경우
      setLinksToRender([{ id: linkToRenderId, url: [newUrl], tag }]);
    } else if (linksToRender.find((link) => link.tag === tag)) {
      // 같은 태그의 링크가 존재할 경우
      const newLinksToRender = linksToRender.map((link) => {
        if (link.tag === tag) link.url.push(newUrl);

        return link;
      });

      setLinksToRender(newLinksToRender);
    } else {
      // 새로운 태그의 링크일 경우
      setLinksToRender([...linksToRender, { id: linkToRenderId, url: [newUrl], tag }]);
    }
  };

  const deleteUrlFromLinksToRender = (tag: LinkType, key: string) => {
    const updatedLinksToRender = linksToRender
      ?.map((linkToRender) => {
        if (linkToRender.tag !== tag) return linkToRender;

        return {
          ...linkToRender,
          url: linkToRender.url.filter(({ id }) => id !== key),
        };
      })
      .filter((link) => link.url.length);

    setLinksToRender(updatedLinksToRender ?? null);
  };

  return (
    <S.ModalContainer>
      <S.LinkList>
        {linksToRender ? (
          linksToRender.map((linkToRender) => {
            return linkToRender.url.map(({ id, url }) => {
              return (
                <li key={id}>
                  <S.Container>
                    <button>
                      <img src={ICONS[linkToRender.tag]} alt={linkToRender.tag} />
                    </button>
                    <S.NameFieldWrapper>
                      <TextField heightSize='small' placeholder='링크 이름을 입력해 주세요' defaultValue={linkToRender.tag} />
                    </S.NameFieldWrapper>
                    <TextField heightSize='small' placeholder='https://' defaultValue={url} />
                    <Button color='error' size='icon' onClick={() => deleteUrlFromLinksToRender(linkToRender.tag, id)}>
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
