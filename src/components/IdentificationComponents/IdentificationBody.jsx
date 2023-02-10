import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { PrimaryBtn } from '../Buttons/PrimaryButton';
import Footer from '../Footer/Footer(e)';
import {
  FormContainer,
  FormContent,
  FormHeadline,
  FormInput,
  FormLabel,
  FormSelect,
  GrayBlock,
  HideBlock,
  HideBlock2,
  HideBlock3,
  HideBlock4,
  HideBlock5,
  HideBlock6,
  HideBlock7,
  Horizontal,
  MiniFormContainer,
  PrimaryText,
  SecondaryText,
  SlimText,
  Vertical,
  VerticalGroupClick,
  WhiteContainer,
  VerticalBtns,
  RoundBtn,
  ScoringBtn,
  GrayLine,
  ScoredData,
} from './IdentificationsElements';

const IdentificationBody = () => {
  const [showClient, setShowClient] = useState(true);
  const [showPassport, setShowPassport] = useState(true);
  const [showRecommender, setShowRecommender] = useState(true);
  const [showSecondRecommender, setShowSecondRecommender] = useState(true);

  return (
    <>
      <FormContainer>
        <FormContent>
          <Horizontal
            style={{
              justifySelf: 'center',
              justifyContent: 'flex-start',
              gap: '30px',
              marginBottom: '26px',
              alignSelf: 'flex-start',
            }}
          >
            <Button
              p={0}
              w="50px"
              h="50px"
              borderRadius={100}
              justifySelf="flex-start"
              backgroundColor="#FAFAFA"
              _hover={{ backgroundColor: '#eaeaea' }}
            >
              <MdKeyboardArrowLeft color="black" size={30} />
            </Button>
            <h1>Идентификация Х.О</h1>
          </Horizontal>
          <WhiteContainer id="client">
            <VerticalGroupClick
              onClick={() =>
                showClient ? setShowClient(false) : setShowClient(true)
              }
            >
              <FormHeadline>Информация о клиенте:</FormHeadline>
              {!showClient ? (
                <RiArrowDownSLine size={25} color="#00000099" />
              ) : (
                <RiArrowUpSLine size={25} color="#00000099" />
              )}
            </VerticalGroupClick>
            <HideBlock show={showClient}>
              <Horizontal>
                <Vertical>
                  <FormLabel>Фамилия</FormLabel>
                  <FormInput name="surname" />
                </Vertical>
                <Vertical>
                  <FormLabel>Имя</FormLabel>
                  <FormInput name="name" />
                </Vertical>
                <Vertical>
                  <FormLabel>Отчество</FormLabel>
                  <FormInput name="patronymic" />
                </Vertical>
              </Horizontal>
              <Horizontal>
                <Vertical>
                  <FormLabel>ИНН</FormLabel>
                  <FormInput type="text" />
                </Vertical>
              </Horizontal>
              <Horizontal>
                <Vertical>
                  <FormLabel>Номер телефона</FormLabel>
                  <FormInput type="text" />
                </Vertical>
                <Vertical>
                  <FormLabel>Дата рождения</FormLabel>
                  <FormInput type="date" />
                </Vertical>
              </Horizontal>
              <Horizontal>
                <Vertical>
                  <FormLabel>Пол</FormLabel>
                  <FormSelect></FormSelect>
                </Vertical>
                <Vertical>
                  <FormLabel>Семейное положение</FormLabel>
                  <FormSelect></FormSelect>
                </Vertical>
              </Horizontal>
              <Horizontal>
                <Vertical>
                  <FormLabel>
                    Количество людей зависящих от дохода этого клиента
                  </FormLabel>
                </Vertical>
              </Horizontal>
            </HideBlock>
          </WhiteContainer>
          <WhiteContainer id="passport_information">
            <VerticalGroupClick
              onClick={() =>
                showPassport ? setShowPassport(false) : setShowPassport(true)
              }
            >
              <FormHeadline>Паспортные данные:</FormHeadline>
              {!showPassport ? (
                <RiArrowDownSLine size={25} color="#00000099" />
              ) : (
                <RiArrowUpSLine size={25} color="#00000099" />
              )}
            </VerticalGroupClick>
            <HideBlock show={showPassport}>
              <Horizontal>
                <Vertical>
                  <FormLabel>Серия(буква)</FormLabel>
                  <FormInput name="surname" />
                </Vertical>
                <Vertical>
                  <FormLabel>Серия(номер)</FormLabel>
                  <FormInput name="name" />
                </Vertical>
              </Horizontal>
              <Horizontal>
                <Vertical>
                  <FormLabel>Кем выдан паспорт</FormLabel>
                  <FormInput type="text" />
                </Vertical>
              </Horizontal>
              <Horizontal>
                <Vertical>
                  <FormLabel>Дата выдачи</FormLabel>
                  <FormInput type="date" />
                </Vertical>
                <Vertical>
                  <FormLabel>Срок окончания</FormLabel>
                  <FormInput type="date" />
                </Vertical>
              </Horizontal>
            </HideBlock>
          </WhiteContainer>
          <WhiteContainer id="first-recommender">
            <VerticalGroupClick
              onClick={() =>
                showRecommender
                  ? setShowRecommender(false)
                  : setShowRecommender(true)
              }
            >
              <FormHeadline>Рекомендатель 1</FormHeadline>
              {!showRecommender ? (
                <RiArrowDownSLine size={25} color="#00000099" />
              ) : (
                <RiArrowUpSLine size={25} color="#00000099" />
              )}
            </VerticalGroupClick>
            <HideBlock show={showRecommender}>
              <Horizontal>
                <Vertical>
                  <FormLabel>Фамилия</FormLabel>
                  <FormInput name="surname" />
                </Vertical>
                <Vertical>
                  <FormLabel>Имя</FormLabel>
                  <FormInput name="name" />
                </Vertical>
                <Vertical>
                  <FormLabel>Отчество</FormLabel>
                  <FormInput type="text" />
                </Vertical>
              </Horizontal>
              <Horizontal>
                <Vertical>
                  <FormLabel>Кем приходится</FormLabel>
                  <FormSelect></FormSelect>
                </Vertical>
                <Vertical>
                  <FormLabel>Номер телефона</FormLabel>
                  <FormInput></FormInput>
                </Vertical>
              </Horizontal>
            </HideBlock>
          </WhiteContainer>
          <WhiteContainer id="second-recommender">
            <VerticalGroupClick
              onClick={() =>
                showSecondRecommender
                  ? setShowSecondRecommender(false)
                  : setShowSecondRecommender(true)
              }
            >
              <FormHeadline>Рекомендатель 2</FormHeadline>
              {!showSecondRecommender ? (
                <RiArrowDownSLine size={25} color="#00000099" />
              ) : (
                <RiArrowUpSLine size={25} color="#00000099" />
              )}
            </VerticalGroupClick>
            <HideBlock show={showSecondRecommender}>
              <Horizontal>
                <Vertical>
                  <FormLabel>Фамилия</FormLabel>
                  <FormInput name="surname" />
                </Vertical>
                <Vertical>
                  <FormLabel>Имя</FormLabel>
                  <FormInput name="name" />
                </Vertical>
                <Vertical>
                  <FormLabel>Отчество</FormLabel>
                  <FormInput type="text" />
                </Vertical>
              </Horizontal>
              <Horizontal>
                <Vertical>
                  <FormLabel>Кем приходится</FormLabel>
                  <FormSelect></FormSelect>
                </Vertical>
                <Vertical>
                  <FormLabel>Номер телефона</FormLabel>
                  <FormInput></FormInput>
                </Vertical>
              </Horizontal>
            </HideBlock>
          </WhiteContainer>
          <PrimaryBtn>Далее</PrimaryBtn>
        </FormContent>
      </FormContainer>
      <Footer position="inherit" />
    </>
  );
};

export default IdentificationBody;
