import { Input } from 'antd';
import { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { PrimaryBtn } from '../Buttons/PrimaryButton';
import { SecondaryBtn } from '../Buttons/SecondaryButton';
import {
  FormHeadline,
  FormInput,
  FormLabel,
  FormSelect,
  GrayBlock,
  HideBlock5,
  HideBlock6,
  HideBlock7,
  Horizontal,
  PrimaryText,
  Vertical,
  VerticalGroupClick,
  WhiteContainer,
} from './IdentificationsElements';

export default function SecondStep() {
  const [show5, setShow5] = useState(true);
  const [show6, setShow6] = useState(true);
  const [show7, setShow7] = useState(true);
  return (
    <>
      <WhiteContainer id="finance">
        <VerticalGroupClick
          onClick={() => (show5 ? setShow5(false) : setShow5(true))}
        >
          <FormHeadline>Информация о финансах:</FormHeadline>
          {!show5 ? (
            <RiArrowDownSLine size={25} color="#00000099" />
          ) : (
            <RiArrowUpSLine size={25} color="#00000099" />
          )}
        </VerticalGroupClick>
        <HideBlock5 show5={show5}>
          <Horizontal>
            <Vertical>
              <FormLabel>Количество членов семьи</FormLabel>
              <FormInput size="large" name="family_count_num" />
            </Vertical>
            <Vertical>
              <FormLabel>Количество иждевенцев</FormLabel>
              <FormInput size="large" name="dependencies_num" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Месячный доход</FormLabel>
              <FormInput size="large" type="number" name="monthly_income" />
            </Vertical>
            <Vertical>
              <FormLabel>Семейные расходы клиента</FormLabel>
              <FormInput size="large" name="total_family_expenses_per_month" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Операционные расходы за месяц</FormLabel>
              <FormInput size="large" name="operational_monthly_charges" />
            </Vertical>
            <Vertical>
              <FormLabel>Семейные расходы за месяц</FormLabel>
              <FormInput size="large" name="total_family_expenses_per_month" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Наличие недвижимости</FormLabel>
              <FormSelect size="large" name="has_estate" />
            </Vertical>
            <Vertical>
              <FormLabel>Наличие личного автомобиля</FormLabel>
              <FormSelect size="large" name="has_car" />
            </Vertical>
          </Horizontal>
        </HideBlock5>
      </WhiteContainer>
      <WhiteContainer id="job">
        <VerticalGroupClick
          onClick={() => (show6 ? setShow6(false) : setShow6(true))}
        >
          <FormHeadline>Место работы:</FormHeadline>
          {!show6 ? (
            <RiArrowDownSLine size={25} color="#00000099" />
          ) : (
            <RiArrowUpSLine size={25} color="#00000099" />
          )}
        </VerticalGroupClick>
        <HideBlock6 show6={show6}>
          <Horizontal>
            <Vertical>
              <FormLabel>Область</FormLabel>
              <FormSelect size="large" name="work_place_region" />
            </Vertical>
            <Vertical>
              <FormLabel>Населенный пункт</FormLabel>
              <FormSelect size="large" name="work_place_city" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Адрес строкой</FormLabel>
              <Input size="large" name="work_place_full_address" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Сфера деятельности</FormLabel>
              <FormSelect size="large" name="work_place_scope" />
            </Vertical>
            <Vertical>
              <FormLabel>Трудовой стаж (в месяцах)</FormLabel>
              <FormInput size="large" name="work_experience_num" />
            </Vertical>
          </Horizontal>
        </HideBlock6>
      </WhiteContainer>
      <WhiteContainer id="documents">
        <VerticalGroupClick
          onClick={() => (show7 ? setShow7(false) : setShow7(true))}
        >
          <FormHeadline>Добавление документов</FormHeadline>
          {!show7 ? (
            <RiArrowDownSLine size={25} color="#00000099" />
          ) : (
            <RiArrowUpSLine size={25} color="#00000099" />
          )}
        </VerticalGroupClick>
        <HideBlock7 show7={show7}>
          <Horizontal>
            <Vertical>
              <GrayBlock>
                <div></div>
                <PrimaryText>Паспорт</PrimaryText>
              </GrayBlock>
            </Vertical>
            <Vertical>
              <GrayBlock>
                <div></div>
                <PrimaryText>ИНН</PrimaryText>
              </GrayBlock>
            </Vertical>
            <Vertical>
              <GrayBlock>
                <div></div>
                <PrimaryText>Паспорт</PrimaryText>
              </GrayBlock>
            </Vertical>
          </Horizontal>
          <SecondaryBtn style={{ marginTop: '12px' }}>
            Добавить документ
          </SecondaryBtn>
        </HideBlock7>
      </WhiteContainer>
      <PrimaryBtn>Далее</PrimaryBtn>
    </>
  );
}
