import { useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';

export default function SaveButton() {
  const navigate = useNavigate();

  const saveProject = () => {
    // TODO(증훈): 세이브 로직 작성 필요
    if (confirm('저장하시겠습니까?')) {
      console.log('Save');
      navigate(PATH.PROJECT.ABSOLUTE.LIST.GET_PROJECT_ITEM('newId'));
    }
  };

  return (
    <Button color='success' onClick={saveProject}>
      저장
    </Button>
  );
}
