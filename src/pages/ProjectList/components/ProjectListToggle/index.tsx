import { S } from '@/pages/ProjectList/components/ProjectListToggle/style';

interface Props {
  isMyProject: boolean;
  toggleIsMyProject: () => void;
}

export default function ProjectListToggle({ isMyProject, toggleIsMyProject }: Props) {
  return (
    <S.ToggleContainer>
      {/* 공통 토글 스위치 컴포넌트 구현되면 교체 예정 */}
      <input type='radio' checked={!isMyProject} onChange={toggleIsMyProject} />
      <input type='radio' id='my-project-list' checked={isMyProject} onChange={toggleIsMyProject} />
      <S.MyProjectLabelText htmlFor='my-project-list'>내 프로젝트만 보기</S.MyProjectLabelText>
    </S.ToggleContainer>
  );
}
