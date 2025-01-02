import { UserPlusIcon } from 'lucide-react';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Members } from '@/types/project';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Modal from '@/components/Modal';
import { useModalStore } from '@/components/Modal/store';
import TextField from '@/components/TextField';

import { S } from '@/pages/ProjectEditor/components/TitleEditor/style';

interface Props {
  startDate: string | null;
  endDate: string | null;
  members: Members;
  setMembersToRender: Dispatch<SetStateAction<Members>>;
}

export default function MemberAndDateEditor({ startDate, endDate, members, setMembersToRender }: Props) {
  const [searchValue, setSearchValue] = useState('');
  const [searchedMembers, setSearchedMembers] = useState<Members>(members); // 검색된 멤버 목록
  const { onOpenModal } = useModalStore();
  const modalId = 'editMember';
  const parsedMembers = members.filter((member) => member.isJoin);

  // 검색어 변경 시 검색 결과 업데이트
  useEffect(() => {
    const filteredMembers = members.filter(
      (member) =>
        member.name.toLowerCase().includes(searchValue.toLowerCase()) || // 이름 검색
        member.role.toLowerCase().includes(searchValue.toLowerCase()), // 역할 검색 (선택 사항)
    );
    setSearchedMembers(filteredMembers);
  }, [searchValue, members]); // 검색어와 members 상태가 변경될 때 실행

  const searchMember = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const addMember = (id: string) => {
    setMembersToRender((prev) => prev.map((member) => (member.id === id ? { ...member, isJoin: true } : member)));
  };

  const deleteMember = (id: string) => {
    setMembersToRender((prev) => prev.map((member) => (member.id === id ? { ...member, isJoin: false } : member)));
  };

  const toggleCheckbox = (id: string) => {
    if (members.find((member) => member.id === id)?.isJoin) {
      deleteMember(id);
    } else {
      addMember(id);
    }
  };

  return (
    <S.MemberAndDateContainer>
      <S.MemberInfoContainer>
        <S.AvatarContainer>
          {parsedMembers.map(({ id, profileImageUrl }) => (
            <li key={id}>
              <Avatar src={profileImageUrl} size='small' />
            </li>
          ))}
        </S.AvatarContainer>
        {Boolean(parsedMembers.length) && <S.MemberCountText>{parsedMembers.length}명</S.MemberCountText>}
        <Button size='icon' type='button' onClick={() => onOpenModal(modalId)}>
          <UserPlusIcon color='white' />
        </Button>
      </S.MemberInfoContainer>

      <S.DateWrapper>
        <TextField placeholder='시작 날짜' heightSize='small' defaultValue={startDate ?? ''} name='startDate' required />
        <S.DateText> ~ </S.DateText>
        <TextField placeholder='종료 날짜' heightSize='small' defaultValue={endDate ?? ''} name='endDate' required />
      </S.DateWrapper>

      <Modal id={modalId} title='프로젝트 참여 팀원' onConfirm={() => console.log('')}>
        <S.ModalContentContainer>
          <S.SearchBarContainer>
            <TextField value={searchValue} placeholder='팀원 이름을 입력해 주세요' heightSize='small' onChange={searchMember} />
          </S.SearchBarContainer>
          <S.MemberList>
            {searchedMembers.map(({ id, profileImageUrl, name, role, isJoin }) => (
              <li key={id}>
                <S.CheckBoxContainer>
                  <S.LabelContainer htmlFor={id}>
                    <Avatar src={profileImageUrl} size='small' />
                    <S.NameText>{name}</S.NameText>
                    <S.PositionText>{role}</S.PositionText>
                  </S.LabelContainer>
                  <Checkbox id={id} checked={isJoin} onChange={() => toggleCheckbox(id)} />
                </S.CheckBoxContainer>
              </li>
            ))}
          </S.MemberList>
        </S.ModalContentContainer>
      </Modal>
    </S.MemberAndDateContainer>
  );
}
