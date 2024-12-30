import { SearchIcon, UserPlusIcon } from 'lucide-react';
import { useState } from 'react';

import { members } from '@/mocks/data/project';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Modal from '@/components/Modal';
import { useModalStore } from '@/components/Modal/store';
import TextField from '@/components/TextField';

import { S } from '@/pages/ProjectEditor/components/TitleEditor/style';

interface Props {
  startDate: string | null;
  endDate: string | null;
}

export default function MemberAndDateEditor({ startDate, endDate }: Props) {
  const { onOpenModal } = useModalStore();
  const [checkedMembers, setCheckedMembers] = useState<string[]>([]);

  const deleteMember = (id: string) => {
    setCheckedMembers((prev) => prev.filter((prevId) => prevId !== id));
  };

  const addMember = (id: string) => {
    setCheckedMembers((prev) => [...prev, id]);
  };

  const toggleCheckbox = (id: string) => {
    if (checkedMembers.includes(id)) deleteMember(id);
    else addMember(id);
  };

  return (
    <S.MemberAndDateContainer>
      <S.MemberInfoContainer>
        <S.AvatarContainer>
          {Array.from({ length: 5 }, (_, index) => {
            return (
              <li key={index}>
                <S.Avatar src='https://via.placeholder.com/50' alt='avatar' />
              </li>
            );
          })}
        </S.AvatarContainer>
        <S.MemberCountText>+n명</S.MemberCountText>
        <Button size='icon' type='button' onClick={onOpenModal}>
          <UserPlusIcon color='white' />
        </Button>
      </S.MemberInfoContainer>

      <S.DateWrapper>
        <TextField placeholder='시작 날짜' heightSize='small' defaultValue={startDate ?? ''} name='startDate' />
        <S.DateText> ~ </S.DateText>
        <TextField placeholder='종료 날짜' heightSize='small' defaultValue={endDate ?? ''} name='endDate' />
      </S.DateWrapper>

      <Modal title='프로젝트 참여 팀원' onConfirm={() => console.log('')}>
        <S.ModalContentContainer>
          <S.SearchBarContainer>
            <TextField placeholder='팀원 이름을 입력해 주세요' heightSize='small' />
            <Button size='icon'>
              <SearchIcon />
            </Button>
          </S.SearchBarContainer>
          <S.MemberList>
            {members.map(({ id, name, position }) => {
              return (
                <li key={id}>
                  <S.CheckBoxContainer>
                    <S.LabelContainer htmlFor={id}>
                      <S.Avatar src='https://via.placeholder.com/32' />
                      <S.NameText>{name}</S.NameText>
                      <S.PositionText>{position}</S.PositionText>
                    </S.LabelContainer>
                    <Checkbox id={id} checked={checkedMembers.includes(id)} onChange={() => toggleCheckbox(id)} />
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
