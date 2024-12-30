import { SearchIcon } from 'lucide-react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { PATH } from '@/constants/path';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

import { S } from '@/pages/ProjectList/components/Searchbar/style';

interface Props {
  updateKeyword: (keyword: string) => void;
}

export default function Searchbar({ updateKeyword }: Props) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') updateKeyword(keyword.trim());
  };

  const searchProject = () => {
    updateKeyword(keyword.trim());
  };

  return (
    <S.SearchContainer>
      <S.TextFieldWrapper>
        <TextField
          placeholder='검색할 프로젝트 이름을 입력해 주세요'
          heightSize='small'
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          value={keyword}
        />
      </S.TextFieldWrapper>
      <Button onClick={searchProject}>
        <SearchIcon />
      </Button>
      <Button size='large' onClick={() => navigate(PATH.PROJECT.ABSOLUTE.CREATE)}>
        프로젝트 생성
      </Button>
    </S.SearchContainer>
  );
}
