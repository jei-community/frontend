import { ImagePlusIcon, X } from 'lucide-react';
import { DragEvent, HTMLAttributes, useEffect, useState } from 'react';

import { S } from './style';

interface FileInfo {
  name: string;
  size: string;
  type: string;
  imageUrl?: string;
  file: File; // 실제 파일 객체 추가
}

interface Props {
  uploadedFiles: FileInfo[];
  onUpload: (file: FileInfo) => void;
  onDelete: (index: number) => void;
}

export default function ImageUploadBox({ uploadedFiles, onUpload, onDelete, children }: Props & HTMLAttributes<HTMLDivElement>) {
  const [isActive, setActive] = useState(false);
  const [inputKey, setInputKey] = useState(0);
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    e.preventDefault();
    e.stopPropagation();
    setActive(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  /** 파일 입력시 유효성 검사 후 통과시 이미지 편집모달로 이동 */
  const handleAddFile = (file: File) => {
    // 파일 형식 제한 혹은 파일 개수 제한
    const validFormats = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!validFormats.includes(file.type) || uploadedFiles.length >= 5) {
      alert('사용할 수 없는 이미지 입니다.');

      return;
    }
    // 파일 용량 제한 확인
    const fileSizeMB = file.size / (1024 * 1024); // 바이트 단위를 MB로 변환
    if (fileSizeMB > 5) {
      alert('사용할 수 없는 이미지 입니다.');

      return;
    }

    addFile(file);
  };

  /** 드래그앤 드랍을 통한 입력 */
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(false);

    const files = Array.from(e.dataTransfer.files);
    // 한번에 하나씩 입력 제한
    if (files.length > 1) {
      alert('이미지를 한 개씩 등록해 주세요.');

      return;
    }
    const file = files[0];
    handleAddFile(file);
  };

  /** 파일 선택을 통한 입력 */
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    // 파일 선택은 하나만 허용
    const file = files[0];
    setInputKey((p) => p + 1);
    handleAddFile(file); // 공통 로직 호출
  };

  /** 업로드된 이미지를 저장하는 함수 */
  const addFile = (file: File) => {
    const { name, size: byteSize, type } = file;
    const size = (byteSize / (1024 * 1024)).toFixed(2) + ' MB';
    const fileInfo: FileInfo = { name, size, type, file };

    const reader = new FileReader();
    reader.onload = () => {
      const newFileInfo = { ...fileInfo, imageUrl: reader.result as string };
      onUpload(newFileInfo);
    };
    reader.readAsDataURL(file);
  };

  //   /** 이미지 편집중일 떄 뒤로가기 누르면 뜨는 모달에서 확인 버튼 클릭시 동작하는 함수 */
  //   const handleCheckPrevYnModalConfirm = () => {
  //     setIsOpenEditModal(false);
  //     setIsOpenCheckPrevYnModal(false);
  //   };
  //   /** 이미지 편집중일 떄 뒤로가기 누르면 뜨는 모달에서 취소 버튼 클릭시 동작하는 함수 */
  //   const handleCheckPrevYnModalCancel = () => {
  //     setIsOpenCheckPrevYnModal(false);
  //   };

  //   /** 이미지 편집중일 떄 저장 버튼 눌렀을때 동작하는 함수 */
  //   const handleImageEditSave = (editedFile: File) => {
  //     setIsOpenEditModal(false);
  //     addFile(editedFile);
  //   };

  useEffect(() => {
    console.log(uploadedFiles);
  }, [uploadedFiles]);

  return (
    <S.Container $isActive={isActive} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
      {children}
      {isActive && <S.ActiveDim />}
      {uploadedFiles.length === 0 && (
        <S.EmptyFiles>
          <S.HiddenInput type='file' onChange={handleFileInput} />
          <S.EmptyContent>
            <S.ImagePlusIcon />
            <p>사진을 여기 끌어다 놓거나, [+] 버튼을 선택해 주세요.</p>
            <p>5MB 미만 / jpg, jpeg, png 파일 / 최대 5개</p>
          </S.EmptyContent>
        </S.EmptyFiles>
      )}
      <S.FileWrapper>
        {uploadedFiles.length > 0 && uploadedFiles.length <= 5 && (
          <>
            {uploadedFiles.map((file, index) => (
              <S.FileItem key={index}>
                <S.DeleteButton onClick={() => onDelete(index)}>
                  <X />
                </S.DeleteButton>
                {file.imageUrl && <img src={file.imageUrl} alt='미리보기' />}
              </S.FileItem>
            ))}
          </>
        )}
        {uploadedFiles.length > 0 && uploadedFiles.length < 5 && (
          <S.AddFileWrapper>
            <S.HiddenInput key={inputKey} type='file' onChange={handleFileInput} />
            <ImagePlusIcon />
          </S.AddFileWrapper>
        )}
      </S.FileWrapper>
    </S.Container>
  );
}
