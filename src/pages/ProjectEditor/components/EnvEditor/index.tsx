import EnvContainer from '@/components/EnvContainer';
import TextArea from '@/components/TextArea';

export default function EnvEditor() {
  return (
    <EnvContainer>
      <TextArea placeholder='환경 변수를 입력해 주세요' rows={3} />
    </EnvContainer>
  );
}
