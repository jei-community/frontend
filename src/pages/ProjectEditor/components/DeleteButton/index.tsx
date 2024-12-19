import { useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';

export default function DeleteButton() {
  const navigate = useNavigate();

  const deleteProject = () => {
    if (confirm('프로젝트를 삭제하시겠습니까?')) {
      console.log('삭제');
      navigate(PATH.PROJECTS);
    }
  };

  return (
    <Button color='error' onClick={deleteProject}>
      프로젝트 삭제
    </Button>
  );
}
