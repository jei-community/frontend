import { S } from '@/components/ProjectThumbnail/style';
import { Size } from '@/components/ProjectThumbnail/types';

import { IMAGE_URL } from '@/assets';

interface Props {
  src: string | null;
  alt?: string;
  size?: Size;
}

export default function ProjectThumbnail({ src, alt = '썸네일', size = 'small' }: Props) {
  return <S.Thumbnail src={src ?? IMAGE_URL.FILE_BOX} $size={size} alt={alt} />;
}
