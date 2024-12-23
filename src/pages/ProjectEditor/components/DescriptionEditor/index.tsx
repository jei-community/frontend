import DescriptionContainer from '@/components/DescriptionContainer';
import TextArea from '@/components/TextArea';

interface Props {
  description: string | null;
}

export default function DescriptionEditor({ description }: Props) {
  return (
    <DescriptionContainer>
      <TextArea placeholder='프로젝트 설명을 입력해 주세요' rows={5} defaultValue={description ?? ''} name='description' />
    </DescriptionContainer>
  );
}
