import { SearchIcon, UserPlusIcon } from 'lucide-react';
import { useState } from 'react';

import { members } from '@/mocks/data/project';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

import Modal from '@/pages/ProjectEditor/components/Modal';
import { S } from '@/pages/ProjectEditor/components/TitleEditor/style';

interface Props {
  startDate: string | null;
  endDate: string | null;
}

export default function MemberAndDateEditor({ startDate, endDate }: Props) {
  // Modal 공통 컴포넌트, hook으로 교체할 예정
  const [isOpen, setIsOpen] = useState(false);

  const openMemberEditorModal = () => setIsOpen(true);

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
        <Button size='icon' onClick={openMemberEditorModal}>
          <UserPlusIcon color='white' />
        </Button>
      </S.MemberInfoContainer>

      <S.DateWrapper>
        <TextField placeholder='시작 날짜' heightSize='small' defaultValue={startDate ?? ''} />
        <S.DateText> ~ </S.DateText>
        <TextField placeholder='종료 날짜' heightSize='small' defaultValue={endDate ?? ''} />
      </S.DateWrapper>

      {isOpen && (
        <Modal title='프로젝트 참여 팀원' close={() => setIsOpen(false)} hasClose>
          <S.ModalContentContainer>
            <S.SearchBarContainer>
              <TextField placeholder='팀원 이름을 입력해 주세요' heightSize='small' />
              <Button size='icon'>
                <SearchIcon />
              </Button>
            </S.SearchBarContainer>
            <S.MemberList>
              {members.map(({ name, position }, index) => {
                return (
                  <li key={index}>
                    <S.CheckBoxContainer>
                      <S.LabelContainer htmlFor={String(index)}>
                        <S.Avatar src='https://via.placeholder.com/32' />
                        <S.NameText>{name}</S.NameText>
                        <S.PositionText>{position}</S.PositionText>
                      </S.LabelContainer>
                      <input type='checkbox' id={String(index)} name={name} />
                    </S.CheckBoxContainer>
                  </li>
                );
              })}
            </S.MemberList>
          </S.ModalContentContainer>
        </Modal>
      )}
    </S.MemberAndDateContainer>
  );
}
