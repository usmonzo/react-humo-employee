import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Input, Button, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import loginLogo from '../../assets/LoginLogo.svg';
import { useDispatch } from 'react-redux';
import { GetId, handleForgetPass } from '../../store/slices/userSlice';

const LoginBoxContainer = styled.div`
  display: flex;
  height: 85vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 56px;
`;

const LoginBoxContent = styled.div`
  gap: 16px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 56px;
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
`;
const LoginBoxFormLabel = styled.label`
  font-family: 'Inter', sans-serif;
  //font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.38);
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

const LoginBoxFormButton = styled(Button)`
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
  margin-top: 15px;
`;

const ForgotPassword = () => {
  const [id, setId] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const id = event.target.value.replace(/\D/g, '');
    setId(id);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoadingButton(false);
    }, 2000);
  }, [loadingButton]);

  const addLogin = () => {
    dispatch(handleForgetPass(id, navigate));
    dispatch(GetId(id));
    setLoadingButton(true);
  };
  return (
    <LoginBoxContainer>
      <LoginBoxContent>
        <LoginBoxLogo src={loginLogo} alt="userlogo" />
        <LoginBoxHeadline>Восстановление пароля</LoginBoxHeadline>
        <LoginBoxParagraph>Введите свой идентификатор</LoginBoxParagraph>
        <LoginBoxForm>
          <LoginBoxFormLabel>Логин:</LoginBoxFormLabel>
          <InputGroup>
            <InputLeftAddon children="Андеррайтер" />
            <LoginBoxInput
              required
              type="text"
              placeholder="Логин"
              value={id}
              onChange={handleChange}
              onDragEnter={(e) => addLogin(e)}
            />
          </InputGroup>
        </LoginBoxForm>
        <LoginBoxFormButton
          borderRadius={30}
          backgroundColor="#ff6200"
          p={6}
          _hover="none"
          isLoading={loadingButton}
          onClick={() => {
            dispatch(handleForgetPass(+id, navigate));
            dispatch(GetId(+id));
            setLoadingButton(true);
          }}
        >
          Далее
        </LoginBoxFormButton>
      </LoginBoxContent>
    </LoginBoxContainer>
  );
};

export default ForgotPassword;
