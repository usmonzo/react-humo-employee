import { useState } from 'react';
import { PrimaryBtn } from '../Buttons/PrimaryButton';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import {
  FormHeadline,
  FormInput,
  FormLabel,
  FormSelect,
  HideBlock8,
  Horizontal,
  SRHideBlock,
  Vertical,
  VerticalGroupClick,
  WhiteContainer,
} from './IdentificationsElements';

export default function ThirdStep() {
  const [show8, setShow8] = useState(true);
  const [showSecRecommender, setShowSecRecommender] = useState(true);
  return (
    <>
      <WhiteContainer id="first-recommender">
        <VerticalGroupClick
          onClick={() => (show8 ? setShow8(false) : setShow8(true))}
        >
          <FormHeadline>Рекомендатель 1</FormHeadline>
          {!show8 ? (
            <RiArrowDownSLine size={25} color="#00000099" />
          ) : (
            <RiArrowUpSLine size={25} color="#00000099" />
          )}
        </VerticalGroupClick>
        <HideBlock8 show8={show8}>
          <Horizontal>
            <Vertical>
              <FormLabel>Фамилия</FormLabel>
              <FormInput size="large" name="rec_name" />
            </Vertical>
            <Vertical>
              <FormLabel>Имя</FormLabel>
              <FormInput size="large" name="rec_surname" />
            </Vertical>
            <Vertical>
              <FormLabel>Отчество</FormLabel>
              <FormInput size="large" name="rec_patronomyc" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Кем приходится</FormLabel>
              <FormInput size="large" name="operational_monthly_charges" />
            </Vertical>
            <Vertical>
              <FormLabel>Номер телефона</FormLabel>
              <FormInput size="large" name="total_family_expenses_per_month" />
            </Vertical>
          </Horizontal>
        </HideBlock8>
      </WhiteContainer>
      <WhiteContainer id="second-recommender">
        <VerticalGroupClick
          onClick={() =>
            showSecRecommender
              ? setShowSecRecommender(false)
              : setShowSecRecommender(true)
          }
        >
          <FormHeadline>Рекомендатель 2</FormHeadline>
          {!showSecRecommender ? (
            <RiArrowDownSLine size={25} color="#00000099" />
          ) : (
            <RiArrowUpSLine size={25} color="#00000099" />
          )}
        </VerticalGroupClick>
        <SRHideBlock showSecRecommender={showSecRecommender}>
          <Horizontal>
            <Vertical>
              <FormLabel>Фамилия</FormLabel>
              <FormInput size="large" name="rec_name" />
            </Vertical>
            <Vertical>
              <FormLabel>Имя</FormLabel>
              <FormInput size="large" name="rec_surname" />
            </Vertical>
            <Vertical>
              <FormLabel>Отчество</FormLabel>
              <FormInput size="large" name="rec_patronomyc" />
            </Vertical>
          </Horizontal>
          <Horizontal>
            <Vertical>
              <FormLabel>Кем приходится</FormLabel>
              <FormInput size="large" name="operational_monthly_charges" />
            </Vertical>
            <Vertical>
              <FormLabel>Номер телефона</FormLabel>
              <FormInput size="large" name="total_family_expenses_per_month" />
            </Vertical>
          </Horizontal>
        </SRHideBlock>
      </WhiteContainer>
      <PrimaryBtn>Далее</PrimaryBtn>
    </>
  );
}
