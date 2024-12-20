import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';
import TooltipList from '@/pages/ProjectItem/components/TooltipList';

export default function DocumentTooltipList() {
  return (
    <ButtonWithIcon>
      <S.TooltipListWrapper>
        <TooltipList />
      </S.TooltipListWrapper>
    </ButtonWithIcon>
  );
}
