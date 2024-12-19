import DescriptionContainer from '@/components/DescriptionContainer';
import TextArea from '@/components/TextArea';

export default function DescriptionEditor() {
  return (
    <DescriptionContainer>
      <TextArea placeholder='프로젝트 설명을 입력해 주세요' rows={5} />
    </DescriptionContainer>
  );
}
