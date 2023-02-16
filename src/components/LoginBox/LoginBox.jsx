import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  LoginBoxContainer,
  LoginBoxContent,
  LoginBoxForm,
  LoginBoxFormButton,
  LoginBoxFormLabel,
  LoginBoxHeadline,
  LoginBoxInput,
  LoginBoxLogo,
  LoginBoxParagraph,
} from './LoginBoxElements';
import loginLogo from '../../assets/LoginLogo.svg';
// import { InputGroup, InputLeftAddon } from '@chakra-ui/react';
import {
  authBtnLoading,
  errorAuth,
  handleLogin,
  setUser,
} from '../../store/slices/userSlice';
import { PrimaryBtn } from '../Buttons/PrimaryButton';

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

            <LoginBoxInput
              size="large"
              addonBefore="+992"
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
          <PrimaryBtn
            borderRadius={30}
            backgroundColor="#ff6200"
            p={6}
            style={{ marginTop: '15px' }}
            isLoading={authLoading}
            onClick={() => {
              handleSubmit();
              setLogin('');
              setPassword('');
            }}
          >
            Продолжить
          </PrimaryBtn>
        </LoginBoxContent>
      </LoginBoxContainer>
    </>
  );
}
