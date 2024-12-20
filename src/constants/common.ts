import { Status, StatusText } from '@/types/project';

export const STATUS_TEXT: Record<Status, StatusText> = {
  LIVE: '서비스',
  DEVELOP: '개발',
  STOP: '서비스 중단',
};
