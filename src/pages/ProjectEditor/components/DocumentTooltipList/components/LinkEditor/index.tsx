import { Trash2Icon } from 'lucide-react';
import { SetStateAction } from 'react';

import { LinkItem, LinkType } from '@/types/project';

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
}

export default function LinkEditor({ linksToRender, setLinksToRender }: Props) {
  const LINK_TYPES: LinkType[] = ['gitlab', 'figma', 'presentation', 'spreadsheet', 'xd'];

  const addNewUrlToLinksToRender = (tag: LinkType) => {
    if (!linksToRender) {
      setLinksToRender([{ url: [''], tag }]);
    } else if (linksToRender.find((link) => link.tag === tag)) {
      const newLinksToRender = linksToRender.map((link) => {
        if (link.tag === tag) link.url.push('');

        return link;
      });

      setLinksToRender(newLinksToRender);
    } else {
      setLinksToRender([...linksToRender, { url: [''], tag }]);
    }
  };

  return (
    <S.ModalContainer>
      <S.LinkList>
        {linksToRender ? (
          linksToRender.map(({ url, tag }) => {
            return url.map((documentUrl) => {
              return (
                <li key={Math.random()}>
                  <S.Container>
                    <button>
                      <img src={ICONS[tag as LinkType]} alt={tag} />
                    </button>
                    <S.NameFieldWrapper>
                      <TextField heightSize='small' placeholder='링크 이름을 입력해 주세요' defaultValue={tag} />
                    </S.NameFieldWrapper>
                    <TextField heightSize='small' placeholder='https://' defaultValue={documentUrl} />
                    <Button color='error' size='icon'>
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
        <S.DocumentIconButtonContainer>
          {LINK_TYPES.map((tag) => (
            <DocumentIconButton tag={tag} addNewUrlToLinksToRender={addNewUrlToLinksToRender} />
          ))}
        </S.DocumentIconButtonContainer>

        <Button size='medium' color='success'>
          저장
        </Button>
      </S.LinkEditBottom>
    </S.ModalContainer>
  );
}
