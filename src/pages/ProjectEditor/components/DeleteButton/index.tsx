import { useNavigate, useParams } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';

import { useDeleteProjectMutation } from '@/pages/ProjectEditor/hooks/useDeleteProjectMutation';

export default function DeleteButton() {
  const { projectId } = useParams();
  const mutation = useDeleteProjectMutation();
  const navigate = useNavigate();

  const deleteProject = () => {
    if (!projectId) return;

    if (confirm('프로젝트를 삭제하시겠습니까?')) {
      mutation.mutate({ projectId });
      navigate(PATH.PROJECT.ABSOLUTE.LIST.INDEX);
    }
  };

  return (
    <Button color='error' type='button' onClick={deleteProject}>
      프로젝트 삭제
    </Button>
  );
}
