import { useState } from 'react';
import { PrimaryBtn } from '../Buttons/PrimaryButton';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import {
  FormHeadline,
  FormInput,
  FormLabel,
  FormSelect,
  HideBlock,
  HideBlock3,
  HideBlock4,
  Horizontal,
  Vertical,
  VerticalGroupClick,
  WhiteContainer,
} from './IdentificationsElements';
import { Input } from 'antd';
// import TextArea from 'antd/es/input/TextArea';

export default function FirstStep() {
  const [showClient, setShowClient] = useState(true);
  const [showPassport, setShowPassport] = useState(true);
  const [showAddress, setShowAddress] = useState(true);
  const [show4, setShow4] = useState(true);
  return (
    <>
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
              <FormInput size="large" name="surname" />
            </Vertical>
            <Vertical>
              <FormLabel>Имя</FormLabel>
              <FormInput size="large" name="name" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Отчество</FormLabel>
              <FormInput size="large" name="patronymic" />
            </Vertical>
            <Vertical>
              <FormLabel>Дата рождения</FormLabel>
              <FormInput size="large" type="date" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>ИНН</FormLabel>
              <FormInput size="large" type="text" />
            </Vertical>
            <Vertical>
              <FormLabel>Гражданство</FormLabel>
              <FormSelect size="large" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Семейное положение</FormLabel>
              <FormSelect size="large" />
            </Vertical>
            <Vertical>
              <FormLabel>Пол</FormLabel>
              <FormSelect size="large" />
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
              <FormInput size="large" name="surname" />
            </Vertical>
            <Vertical>
              <FormLabel>Серия(номер)</FormLabel>
              <FormInput size="large" name="name" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Кем выдан паспорт</FormLabel>
              <Input size="large" type="text" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Дата выдачи</FormLabel>
              <FormInput size="large" type="date" />
            </Vertical>
            <Vertical>
              <FormLabel>Срок окончания</FormLabel>
              <FormInput size="large" type="date" />
            </Vertical>
          </Horizontal>
        </HideBlock>
      </WhiteContainer>
      <WhiteContainer id="address">
        <VerticalGroupClick
          onClick={() =>
            showAddress ? setShowAddress(false) : setShowAddress(true)
          }
        >
          <FormHeadline>Адрес</FormHeadline>
          {!showAddress ? (
            <RiArrowDownSLine size={25} color="#00000099" />
          ) : (
            <RiArrowUpSLine size={25} color="#00000099" />
          )}
        </VerticalGroupClick>
        <HideBlock3 show3={showAddress}>
          <Horizontal>
            <Vertical>
              <FormLabel>Тип адреса</FormLabel>
              <FormSelect size="large" name="address_type" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Область</FormLabel>
              <FormSelect size="large" name="region" />
            </Vertical>
            <Vertical>
              <FormLabel>Населенный пункт</FormLabel>
              <FormSelect size="large" name="city" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Район</FormLabel>
              <FormInput size="large" type="text" name="district" />
            </Vertical>
            <Vertical>
              <FormLabel>Улица</FormLabel>
              <FormInput size="large" type="text" name="street" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Дом</FormLabel>
              <FormInput size="large" type="text" name="house" />
            </Vertical>
            <Vertical>
              <FormLabel>Корпус</FormLabel>
              <FormInput size="large" type="text" name="korpus" />
            </Vertical>
            <Vertical>
              <FormLabel>Квартира/комната</FormLabel>
              <FormInput size="large" type="text" name="flat" />
            </Vertical>
          </Horizontal>
        </HideBlock3>
      </WhiteContainer>
      <WhiteContainer id="credit">
        <VerticalGroupClick
          onClick={() => (show4 ? setShow4(false) : setShow4(true))}
        >
          <FormHeadline>Информация о кредите:</FormHeadline>
          {!show4 ? (
            <RiArrowDownSLine size={25} color="#00000099" />
          ) : (
            <RiArrowUpSLine size={25} color="#00000099" />
          )}
        </VerticalGroupClick>
        <HideBlock4 show4={show4}>
          <Horizontal>
            <Vertical>
              <FormLabel>Кредитный продукт</FormLabel>
              <FormSelect size="large" name="credit_product" />
            </Vertical>
            <Vertical>
              <FormLabel>Цель кредита</FormLabel>
              <FormSelect size="large" name="credit_goal" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Цель кредита (подробнее)</FormLabel>
              <Input size="large" type="text" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Сумма кредита</FormLabel>
              <FormInput size="large" type="text" name="credit_sum" />
            </Vertical>
            <Vertical>
              <FormLabel>Срок кредита</FormLabel>
              <FormInput size="large" max={37} name="credit_term" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Сумма лимита ОРЗУ</FormLabel>
              <FormInput size="large" type="text" name="credit_limit" />
            </Vertical>
            <Vertical>
              <FormLabel>Процентаная ставка</FormLabel>
              <FormInput size="large" type="text" name="interest_rate" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Номер карты ОРЗУ</FormLabel>
              <FormInput size="large" type="text" name="orzu_id" />
            </Vertical>
            <Vertical>
              <FormLabel>Номер телефона</FormLabel>
              <FormInput size="large" type="text" name="phone_number" />
            </Vertical>
          </Horizontal>
        </HideBlock4>
      </WhiteContainer>
      <PrimaryBtn>Далее</PrimaryBtn>
    </>
  );
}
