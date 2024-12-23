import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

import { S } from '@/pages/ProjectList/components/Searchbar/style';

interface Props {
  isMyProjectSelected: boolean;
  showSelectedProjects: (isMyProjectSelected: boolean) => void;
  filterProjects: (query: string) => void;
}

export default function Searchbar({ isMyProjectSelected, showSelectedProjects, filterProjects }: Props) {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const searchProject = (event: ChangeEvent<HTMLInputElement>) => {
    // 검색어 정리
    const query = event.target.value.trim();
    setValue(query);

    if (!query) showSelectedProjects(isMyProjectSelected);
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
