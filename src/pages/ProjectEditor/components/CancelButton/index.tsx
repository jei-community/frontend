import { useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';

export default function CancelButton() {
  const navigate = useNavigate();

  const cancelEdit = () => {
    if (confirm('정말 취소하시겠습니까?')) navigate(PATH.PROJECT.ABSOLUTE.LIST.INDEX);
  };

  return (
    <Button color='neutral' onClick={cancelEdit}>
      취소
    </Button>
  );
}
