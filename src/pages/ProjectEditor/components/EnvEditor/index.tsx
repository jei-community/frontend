import EnvContainer from '@/components/EnvContainer';
import TextArea from '@/components/TextArea';

interface Props {
  configuration: string | null;
}

export default function EnvEditor({ configuration }: Props) {
  return (
    <EnvContainer>
      <TextArea placeholder='환경 변수를 입력해 주세요' rows={3} defaultValue={configuration ?? ''} />
    </EnvContainer>
  );
}
