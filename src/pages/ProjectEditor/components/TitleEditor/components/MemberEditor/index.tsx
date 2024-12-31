import { SearchIcon, UserPlusIcon } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

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
  const { onOpenModal } = useModalStore();
  const modalId = 'editMember';
  const parsedMembers = members.filter((member) => member.isJoin);

  const addMember = (id: string) => {
    setMembersToRender(
      members.map((member) => {
        if (member.id !== id) return member;

        return {
          ...member,
          isJoin: true,
        };
      }),
    );
  };

  const deleteMember = (id: string) => {
    setMembersToRender(
      members.map((member) => {
        if (member.id !== id) return member;

        return {
          ...member,
          isJoin: false,
        };
      }),
    );
  };

  const toggleCheckbox = (id: string) => {
    if (members.find((member) => member.id === id)?.isJoin) deleteMember(id);
    else addMember(id);
  };

  return (
    <S.MemberAndDateContainer>
      <S.MemberInfoContainer>
        <S.AvatarContainer>
          {parsedMembers.map(({ id, profileImageUrl }) => {
            return (
              <li key={id}>
                <Avatar src={profileImageUrl} size='small' />
              </li>
            );
          })}
        </S.AvatarContainer>
        {Boolean(parsedMembers.length) && <S.MemberCountText>{parsedMembers.length}명</S.MemberCountText>}
        <Button size='icon' type='button' onClick={() => onOpenModal(modalId)}>
          <UserPlusIcon color='white' />
        </Button>
      </S.MemberInfoContainer>

      <S.DateWrapper>
        <TextField placeholder='시작 날짜' heightSize='small' defaultValue={startDate ?? ''} name='startDate' />
        <S.DateText> ~ </S.DateText>
        <TextField placeholder='종료 날짜' heightSize='small' defaultValue={endDate ?? ''} name='endDate' />
      </S.DateWrapper>

      <Modal id={modalId} title='프로젝트 참여 팀원' onConfirm={() => console.log('')}>
        <S.ModalContentContainer>
          <S.SearchBarContainer>
            <TextField placeholder='팀원 이름을 입력해 주세요' heightSize='small' />
            <Button size='icon'>
              <SearchIcon />
            </Button>
          </S.SearchBarContainer>
          <S.MemberList>
            {members.map(({ id, profileImageUrl, name, role, isJoin }) => {
              return (
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
              );
            })}
          </S.MemberList>
        </S.ModalContentContainer>
      </Modal>
    </S.MemberAndDateContainer>
  );
}
