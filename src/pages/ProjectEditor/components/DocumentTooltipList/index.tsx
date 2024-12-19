import TooltipList from '@/pages/Project/components/TooltipList';
import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import { S } from '@/pages/ProjectEditor/components/DocumentTooltipList/style';

export default function DocumentTooltipList() {
  return (
    <ButtonWithIcon>
      <S.TooltipListWrapper>
        <TooltipList />
      </S.TooltipListWrapper>
    </ButtonWithIcon>
  );
}
