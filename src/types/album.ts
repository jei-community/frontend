export interface FileInfo {
  name: string;
  size: string;
  type: string;
  file: File; // 실제 파일 객체 추가
  imageUrl?: string;
}

export type Role = 'USER' | 'ADMIN';
export type RoleText = '연구원' | '선임 연구원';
