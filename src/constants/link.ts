import { Figma, Gitlab, Presentation, Spreadsheet, Xd } from '@/assets/index';

import { LinkType } from '@/types/project';

export const ICONS: Record<LinkType, string> = {
  gitlab: Gitlab,
  figma: Figma,
  presentation: Presentation,
  spreadsheet: Spreadsheet,
  xd: Xd,
};
