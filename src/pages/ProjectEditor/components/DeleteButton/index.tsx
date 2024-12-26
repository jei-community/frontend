import { useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';

export default function DeleteButton() {
  const navigate = useNavigate();

  const deleteProject = () => {
    if (confirm('프로젝트를 삭제하시겠습니까?')) {
      navigate(PATH.PROJECT.ABSOLUTE.LIST.INDEX);
    }
  };

  return (
    <Button color='error' type='button' onClick={deleteProject}>
      프로젝트 삭제
    </Button>
  );
}
