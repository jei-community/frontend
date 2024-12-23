import { S } from '@/pages/ProjectList/components/ProjectListToggle/style';

interface Props {
  isMyProjectSelected: boolean;
  toggleIsMyProjectSelected: () => void;
}

export default function ProjectListToggle({ isMyProjectSelected, toggleIsMyProjectSelected }: Props) {
  return (
    <S.ToggleContainer>
      {/* 공통 토글 스위치 컴포넌트 구현되면 교체 예정 */}
      <input type='radio' checked={!isMyProjectSelected} onChange={toggleIsMyProjectSelected} />
      <input type='radio' id='my-project-list' checked={isMyProjectSelected} onChange={toggleIsMyProjectSelected} />
      <S.MyProjectLabelText htmlFor='my-project-list'>내 프로젝트만 보기</S.MyProjectLabelText>
    </S.ToggleContainer>
  );
}
