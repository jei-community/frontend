import { useState } from 'react';

import Aside from '@/components/Aside';
import Button from '@/components/Button';
import Content from '@/components/Content';
import TextArea from '@/components/TextArea';

import { S } from './style';

export default function AlbumEditor() {
  const [text, setText] = useState<string>(); // TextArea input값

  /**
   * 앨범 등록 함수
   * TODO(범규): 등록 버튼 클릭시 동작하는 로직 구현하기
   */
  const onRegister = () => {
    console.log('등록');
  };

  return (
    <>
      <Aside />
      <Content>
        <S.Container>
          <S.PageTitle>새 앨범 등록</S.PageTitle>
          <S.PageSubTitle>사진을 업로드해주세요. 최대 5장까지 추가할 수 있습니다.</S.PageSubTitle>
          <S.ImageUploadBox>
            <S.Image src='https://via.placeholder.com/160'></S.Image>
            <S.Image src='https://via.placeholder.com/160'></S.Image>
            <S.Image src='https://via.placeholder.com/160'></S.Image>
            <S.Image src='https://via.placeholder.com/160'></S.Image>
            <S.Image src='https://via.placeholder.com/160'></S.Image>
          </S.ImageUploadBox>
          <TextArea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={() => {}}
            onFocus={() => {}}
            onKeyDown={() => {}}
            placeholder='내용을 입력해주세요. (선택)'
            rows={3}
          />
        </S.Container>
      </Content>
      <Aside>
        <S.AsideContainer>
          <Button color='success' onClick={onRegister}>
            등록
          </Button>
          <Button color='neutral'>취소</Button>
        </S.AsideContainer>
      </Aside>
    </>
  );
}
