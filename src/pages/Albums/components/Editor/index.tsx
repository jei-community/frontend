import Aside from '@/components/Aside';
import Button from '@/components/Button';
import Content from '@/components/Content';

import { S } from './style';

export default function AlbumEditor() {
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
        </S.Container>
      </Content>
      <Aside>
        <Button color='success' onClick={onRegister}>
          등록
        </Button>
        <Button color='neutral'>취소</Button>
      </Aside>
    </>
  );
}
