import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';
import loginLogo from '../../assets/LoginLogo.svg';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentId,
  currentOtpCode,
  GetCode,
  GetId,
  handleNewPassword,
} from '../../store/slices/userSlice';

const LoginBoxContainer = styled.div`
  display: flex;
  height: 85vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 56px;
`;

const LoginBoxContent = styled.div`
  max-width: 528px;
  width: 100%;
  max-height: 542px;
  height: 100%;
  gap: 16px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

const LoginBoxLogo = styled.img`
  width: 70px;
  height: 70px;
`;

const LoginBoxHeadline = styled.h1`
  width: 300px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
  opacity: 0.87;
`;

const LoginBoxParagraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;
  opacity: 0.87;
`;

const LoginBoxForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const LoginBoxFormLabel = styled.label`
  font-family: 'Inter', sans-serif;
  padding-bottom: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.38);
  align-self: flex-start;
`;
const LoginBoxInput = styled(Input)`
  //text-transform: capitalize;
  box-sizing: border-box;
  padding: 8px 12px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.006em;
`;

const LoginBoxFormButton = styled(Link)`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 12px;
  gap: 10px;
  background: #ff6200;
  border-radius: 100px;
  color: #ffffff;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;

const NewPassword = () => {
  const [show, setShow] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);
  const handleClick = () => setShow(!show);
  const code = useSelector(currentOtpCode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector(currentId);
  useEffect(() => {
    setTimeout(() => {
      setLoadingButton(false);
    }, 2000);
  }, [loadingButton]);

  return (
    <LoginBoxContainer>
      <LoginBoxContent>
        <LoginBoxLogo src={loginLogo} />
        <LoginBoxHeadline>Новый пароль</LoginBoxHeadline>
        <LoginBoxParagraph>Создайте себе новый пароль </LoginBoxParagraph>
        <LoginBoxForm>
          <LoginBoxFormLabel>Новый пароль</LoginBoxFormLabel>

          <InputGroup size="md">
            <LoginBoxInput
              isRequired
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Пароль"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?^_-]{8,30}$"
            />
            <InputRightElement width="3.1rem">
              <Button
                bgColor="#fff"
                _hover="none"
                _active="none"
                size="sm"
                onClick={handleClick}
              >
                {show ? <ViewIcon boxSize={6} /> : <ViewOffIcon boxSize={6} />}
              </Button>
            </InputRightElement>
          </InputGroup>

          <LoginBoxFormLabel style={{ marginTop: '20px' }}>
            Подтвердите пароль
          </LoginBoxFormLabel>
          <InputGroup size="md">
            <LoginBoxInput
              isRequired
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Пароль"
              value={newPassword2}
              onChange={(e) => setNewPassword2(e.target.value)}
              // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?^_-]{8,30}$"
            />
            <InputRightElement width="3.1rem">
              <Button
                bgColor="#ffffff"
                _hover="none"
                _active="none"
                size="sm"
                onClick={handleClick}
              >
                {show ? <ViewIcon boxSize={6} /> : <ViewOffIcon boxSize={6} />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </LoginBoxForm>

        <LoginBoxFormButton
          as={Button}
          borderRadius={30}
          backgroundColor="#ff6200"
          p={6}
          _hover="none"
          isDisabled={
            newPassword !== newPassword2 ||
            newPassword === '' ||
            newPassword2 === ''
              ? true
              : false
          }
          isLoading={loadingButton}
          onClick={() => {
            setLoadingButton(true);
            dispatch(handleNewPassword(id, code, newPassword, navigate));
            dispatch(GetCode(code));
            dispatch(GetId(id));
          }}
        >
          Завершить
        </LoginBoxFormButton>
      </LoginBoxContent>
    </LoginBoxContainer>
  );
};

export default NewPassword;
