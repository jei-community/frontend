import Button from '@/components/Button';

interface Props {
  isEdit: boolean;
}

export default function SaveButton({ isEdit }: Props) {
  return (
    <Button color='success' type='submit'>
      {isEdit ? '수정' : '저장'}
    </Button>
  );
}
