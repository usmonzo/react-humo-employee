import {
  LoginBoxContainer,
  LoginBoxContent,
  LoginBoxForm,
  LoginBoxFormButton,
  LoginBoxFormLabel,
  LoginBoxHeadline,
  LoginBoxInput,
  LoginBoxLink,
  LoginBoxLogo,
  LoginBoxParagraph,
} from './LoginBoxElements';
import loginLogo from '../../assets/LoginLogo.svg';
import {
  Button,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  authBtnLoading,
  errorAuth,
  handleLogin,
  setUser,
} from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getToken } from '../../utils/axios';

export default function LoginBox() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => setShow(!show);
  const errorRequest = useSelector(errorAuth);
  const authLoading = useSelector(authBtnLoading);
  const navigate = useNavigate();
  const logedUser = {
    login: Number(login),
    password: password,
    token: getToken(),
  };

  const handleChange = (event) => {
    const login = event.target.value.replace(/\D/g, '');
    setLogin(login);
  };
  const handleSubmit = () => {
    if (login !== '' && password !== '') {
      dispatch(handleLogin(login, password, navigate));
      dispatch(setUser(logedUser));
      setLoadingButton(true);
      setLogin('');
      setPassword('');
    } else {
      return null;
    }
  };
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLoadingButton(false);
    }, 2000);
  }, [loadingButton]);
  return (
    <>
      <LoginBoxContainer>
        <LoginBoxContent>
          <LoginBoxLogo src={loginLogo} />
          <LoginBoxHeadline>Авторизация</LoginBoxHeadline>
          <LoginBoxParagraph>
            Для авторизации введите свой номер телефона
          </LoginBoxParagraph>
          <LoginBoxForm onKeyPress={(e) => handleEnter(e)}>
            <LoginBoxFormLabel>Номер телефона</LoginBoxFormLabel>
            <InputGroup>
              <InputLeftAddon
                children="+992"
                fontSize={16}
                fontWeight="500"
                p={3}
                borderColor={errorRequest ? 'red' : '#e7edf3'}
                bgColor={errorRequest ? '#FFECF0' : ''}
                color={errorRequest ? 'red' : ''}
              />
              <LoginBoxInput
                borderColor={!errorRequest ? '#e7edf3' : '#F94A43'}
                _focus={{
                  borderColor: 'none',
                  outline: 'none',
                }}
                focusBorderColor={!errorRequest ? '' : '#F94A43'}
                _active={{ outline: !errorRequest ? '' : '#F94A43' }}
                _hover={{}}
                name="login"
                isRequired
                type="text"
                value={login}
                onChange={handleChange}
                maxWidth="420px"
                // placeholder="Логин"
              />
            </InputGroup>
            {/* <LoginBoxFormLabel>Пароль</LoginBoxFormLabel>
            <InputGroup size="md">
              <LoginBoxInput
                borderColor={!errorRequest ? '#e7edf3' : '#F94A43'}
                _focus={{
                  borderColor: 'none',
                  outline: 'none',
                }}
                _active={{ outline: !errorRequest ? '' : '#F94A43' }}
                _hover={{}}
                focusBorderColor={!errorRequest ? '' : '#F94A43'}
                name="password"
                isRequired
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                // _placeholder={{ color: !errorRequest ? '#000' : 'red' }}
              />
              <InputRightElement width="3.1rem">
                <Button
                  bgColor="#fff"
                  _hover={{}}
                  _active={{}}
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? (
                    <ViewIcon boxSize={6} />
                  ) : (
                    <ViewOffIcon boxSize={6} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errorRequest ? (
              <LoginBoxFormLabel style={{ color: '#F94A43' }}>
                Логин или пароль введены неверно
              </LoginBoxFormLabel>
            ) : null} */}
          </LoginBoxForm>
          <LoginBoxFormButton
            borderRadius={30}
            backgroundColor="#ff6200"
            p={6}
            _hover={{}}
            isLoading={authLoading}
            onClick={() => {
              handleSubmit();
              setLogin('');
              setPassword('');
            }}
          >
            Продолжить
          </LoginBoxFormButton>
        </LoginBoxContent>
      </LoginBoxContainer>
    </>
  );
}
