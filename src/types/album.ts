export interface FileInfo {
  name: string;
  size: string;
  type: string;
  file: File; // 실제 파일 객체 추가
  imageUrl?: string;
}
