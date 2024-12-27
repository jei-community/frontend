import { LinkType } from '@/types/project';

import { FigmaAdder, GitlabAdder, PresentationAdder, SpreadsheetAdder, XdAdder } from '@/pages/ProjectEditor/components/DocumentTooltipList/assets';

interface Props {
  tag: LinkType;
  addNewUrlToLinksToRender: (tag: LinkType) => void;
}

export default function DocumentIconButton({ tag, addNewUrlToLinksToRender }: Props) {
  const ICON = {
    gitlab: GitlabAdder,
    figma: FigmaAdder,
    presentation: PresentationAdder,
    spreadsheet: SpreadsheetAdder,
    xd: XdAdder,
  };

  return (
    <button onClick={() => addNewUrlToLinksToRender(tag)}>
      <img src={ICON[tag]} alt={tag} />
    </button>
  );
}
