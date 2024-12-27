import { S } from './style';

/** 클릭시 포스트 작성페이지로 이동하는 버튼 */
export default function EditorLink() {
  return (
    <S.EditLink to='/posts/editor'>
      <S.EditText>글쓰기</S.EditText>
    </S.EditLink>
  );
}
