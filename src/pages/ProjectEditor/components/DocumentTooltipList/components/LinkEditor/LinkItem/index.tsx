import { Trash2Icon } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

import { LinkItem as LinkItemType } from '@/types/project';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';

interface Props {
  linksToRender: LinkItemType;
  item: string;
  url: string;
  tag: string;
  index: number;
  setLinksToRender: Dispatch<SetStateAction<LinkItemType>>;
}

export default function LinkItem({ linksToRender, item, url, tag, index, setLinksToRender }: Props) {
  const updateItem = (newItem: string) => {
    const updatedLinks = linksToRender?.map((link) => {
      if (link.tag !== tag) return link;

      const updatedItems = [...(link.items || [])];
      updatedItems[index] = newItem;

      return { ...link, items: updatedItems };
    });

    setLinksToRender(updatedLinks);
  };

  // const updateTag = (newTag: string) => {
  //   const updatedLinks = linksToRender?.map((link) => {
  //     if (link.tag !== tag) return link;

  //     return { ...link, tag: newTag };
  //   });

  //   setLinksToRender(updatedLinks);
  // };

  const deleteItem = () => {
    const updatedLinks = linksToRender
      ?.map((link) => {
        if (link.tag !== tag) return link;

        return {
          ...link,
          items: link.items?.filter((_, idx) => idx !== index),
        };
      })
      .filter((link) => link.items && link.items.length);

    setLinksToRender(updatedLinks);
  };

  return (
    <S.Container>
      <button>
        <S.Icon src={url} alt={tag} />
      </button>
      {/* <S.NameFieldWrapper>
        <TextField heightSize='small' placeholder='링크 이름을 입력해 주세요' value={tag} onChange={(e) => updateTag(e.target.value)} />
      </S.NameFieldWrapper> */}
      <TextField heightSize='small' placeholder='https://' value={item} onChange={(e) => updateItem(e.target.value)} />
      <Button color='error' size='icon' onClick={deleteItem}>
        <Trash2Icon />
      </Button>
    </S.Container>
  );
}
