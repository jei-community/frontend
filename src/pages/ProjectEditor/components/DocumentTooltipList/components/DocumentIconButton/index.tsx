import { FigmaAdder, GitlabAdder, PresentationAdder, SpreadsheetAdder, XdAdder } from '@/pages/ProjectEditor/components/DocumentTooltipList/assets';

interface Props {
  tag: string;
  addNewUrlToLinksToRender: (tag: string) => void;
}

export default function DocumentIconButton({ tag, addNewUrlToLinksToRender }: Props) {
  const ICON: Record<string, string> = {
    gitlab: GitlabAdder,
    figma: FigmaAdder,
    presentation: PresentationAdder,
    sheets: SpreadsheetAdder,
    xd: XdAdder,
  };

  return (
    <button onClick={() => addNewUrlToLinksToRender(tag)}>
      <img src={ICON[tag]} alt={tag} />
    </button>
  );
}
