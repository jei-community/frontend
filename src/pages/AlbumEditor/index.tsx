import { deleteAlbum, postAlbum, putAlbum } from 'everydei-api-dev/lib/apis/functional/albums';
import { postS3PresignedUrl } from 'everydei-api-dev/lib/apis/functional/aws/s3/presigned_url';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { FileInfo } from '@/types/album';

import Aside from '@/components/Aside';
import Button from '@/components/Button';
import Content from '@/components/Content';
import TextArea from '@/components/TextArea';

import ImageUploadBox from './components/ImageUploadBox';
import { S } from './style';

interface State {
  uploadedImages: FileInfo[];
  content: string | undefined | null;
  id: string;
}

export default function AlbumEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as State;
  const [text, setText] = useState<string | undefined>(state?.content ?? undefined);
  const [uploadedFiles, setUploadedFiles] = useState<FileInfo[]>(state?.uploadedImages ?? []); // 업로드된 이미지들
  const [oldFilesLength, setOldFilesLength] = useState(state?.uploadedImages.length ?? 0);

  // API 헤더
  const connection = {
    host: 'https://api-dev.everydei.site/api/v1',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  /** Presigned URL을 발급받은 후 파일을 업로드하는 함수 */
  const uploadFileToS3 = async (url: string, file: FileInfo) => {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: file.file,
        headers: {
          'Content-Type': file.type, // 파일의 MIME 타입 설정
        },
      });

      if (!response.ok) throw new Error(`Failed to upload file to S3. Status: ${response.status}`);
    } catch (error) {
      console.error(`Error uploading file ${file.name}:`, error);
      throw error; // 실패한 파일이 있으면 예외 처리
    }
  };

  /** 앨범 등록/수정 함수 */
  const onConfirm = async (pageStatus: 'edit' | 'register') => {
    const presignedUrlRequestBody = {
      type: 'ALBUM_IMAGE',
    };

    // TODO: oldFilesLength만큼 앞에서 제외하고 호출
    const presignedUrlRequests = uploadedFiles.slice(oldFilesLength).map(() => postS3PresignedUrl(connection, presignedUrlRequestBody));

    try {
      // 1. 모든 presigned-url 요청을 병렬로 실행
      const presignedUrlResponses = await Promise.all(presignedUrlRequests);

      // 2. 응답에서 fileName 추출 (수정 상태에서 수정되지 않는 사진은 기존 url 유지)
      const fileNames = [
        ...uploadedFiles.slice(0, oldFilesLength).map((file) => file.name), // oldFilesLength까지의 file.name 추가
        ...presignedUrlResponses.map((response) => response.fileName), // 기존 presigned-url 응답에서 추출
      ];
      const presignedUrls = presignedUrlResponses.map((response) => response.url);

      // 3. S3에 파일 업로드
      await Promise.all(uploadedFiles.slice(oldFilesLength).map((file, index) => uploadFileToS3(presignedUrls[index], file)));

      // 4. album API에 POST 요청
      const albumRequestBody = {
        albumImageList: fileNames,
        content: text === undefined ? null : text,
      };

      if (pageStatus === 'register') await postAlbum(connection, albumRequestBody);
      else await putAlbum(connection, state.id, albumRequestBody);
      navigate(-1);
    } catch (error) {
      console.error('Failed to register album:', error);
    }
  };

  /** 수정 취소 함수 */
  const onBack = () => {
    navigate(-1);
  };

  /** 앨범 삭제 함수 */
  const onDelete = () => {
    deleteAlbum(connection, state.id);
  };

  /** 파일이 업로드되면 상태 업데이트 */
  const handleFileUpload = (file: FileInfo) => {
    setUploadedFiles([...uploadedFiles, file]);
  };
  /** 업로드 되어있는 파일 삭제 */
  const handleFileDelete = (index: number) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    if (index <= oldFilesLength - 1) setOldFilesLength(oldFilesLength - 1);
    setUploadedFiles(updatedFiles);
  };

  return (
    <>
      <Aside />
      <Content>
        <S.Container>
          <S.PageTitle>{state ? '앨범 수정' : '새 앨범 등록'}</S.PageTitle>
          <S.PageSubTitle>사진을 업로드해주세요. 최대 5장까지 추가할 수 있습니다.</S.PageSubTitle>
          <ImageUploadBox uploadedFiles={uploadedFiles} onUpload={handleFileUpload} onDelete={handleFileDelete} />
          <TextArea
            value={text === '' ? undefined : text}
            onChange={(e) => setText(e.target.value)}
            placeholder='내용을 입력해주세요. (선택)'
            rows={3}
          />
        </S.Container>
      </Content>
      <Aside>
        <S.AsideContainer>
          <S.AsideButtonWrapper>
            <Button color='success' onClick={() => onConfirm(state ? 'edit' : 'register')}>
              {state ? '수정' : '등록'}
            </Button>
            <Button color='neutral' onClick={onBack}>
              취소
            </Button>
          </S.AsideButtonWrapper>
          {state && (
            <div>
              <Button color='error' onClick={onDelete}>
                삭제
              </Button>
            </div>
          )}
        </S.AsideContainer>
      </Aside>
    </>
  );
}
