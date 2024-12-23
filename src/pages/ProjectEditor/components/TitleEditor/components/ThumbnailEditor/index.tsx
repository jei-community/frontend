import { ChangeEvent, useRef, useState } from 'react';

import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import { S } from '@/pages/ProjectEditor/components/TitleEditor/style';

interface Props {
  thumbnailImageUrl: string | ArrayBuffer | null;
}

export default function ThumbnailEditor({ thumbnailImageUrl }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [thumbnailSrc, setThumbnailSrc] = useState<string | ArrayBuffer | null>(thumbnailImageUrl);

  const openFileUploader = () => {
    if (!inputRef.current) return;

    inputRef.current.click();
  };

  const uploadThumbnail = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const [file] = event.target.files;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => setThumbnailSrc(fileReader.result);
  };

  return (
    <ButtonWithIcon align='center' iconVariant='image' onClick={openFileUploader}>
      <input ref={inputRef} type='file' accept='image/*' style={{ display: 'none' }} onChange={uploadThumbnail} name='thumbnail' />
      <S.Thumbnail src={typeof thumbnailSrc === 'string' ? thumbnailSrc : 'https://via.placeholder.com/100'} alt='thumbnail' />
    </ButtonWithIcon>
  );
}
