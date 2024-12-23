import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

import { S } from '@/pages/ProjectList/components/Searchbar/style';

interface Props {
  isMyProjectSelected: boolean;
  selectMyProject: () => void;
  selectProjectAll: () => void;
  filterProjects: (query: string) => void;
}

export default function Searchbar({ isMyProjectSelected, selectMyProject, selectProjectAll, filterProjects }: Props) {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const searchProject = (event: ChangeEvent<HTMLInputElement>) => {
    // 검색어 정리
    const query = event.target.value.trim();
    setValue(query);

    // 검색어가 없을 때 선택된 프로젝트 목록 표시
    const showSelectedProjects = () => {
      if (isMyProjectSelected) selectMyProject();
      else selectProjectAll();
    };

    if (!query) showSelectedProjects();
    else filterProjects(query);
  };

  useEffect(() => setValue(''), [isMyProjectSelected]);

  return (
    <S.SearchContainer>
      <S.TextFieldWrapper>
        <TextField placeholder='검색할 프로젝트 이름을 입력해 주세요' heightSize='small' value={value} onChange={searchProject} />
      </S.TextFieldWrapper>
      <Button size='large' onClick={() => navigate(PATH.PROJECT.ABSOLUTE.CREATE)}>
        프로젝트 생성
      </Button>
    </S.SearchContainer>
  );
}
