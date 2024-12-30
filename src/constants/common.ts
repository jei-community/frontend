import { Status, StatusText } from '@/types/project';

import { BadgeColor } from '@/components/Badge/types';

export const STATUS_TEXT: Record<Status, StatusText> = {
  LIVE: '서비스',
  DEVELOP: '개발',
  STOP: '서비스 중단',
};

export const BADGE_STATUS: Record<Status, BadgeColor> = {
  LIVE: 'success',
  DEVELOP: 'warning',
  STOP: 'error',
};
