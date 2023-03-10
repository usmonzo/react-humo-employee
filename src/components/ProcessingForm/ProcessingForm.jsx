import { Fragment, useEffect, useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
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
} from './ProcessingFormElements';
import PassportBlock from './PassportBlock';
import { InputGroup, InputRightElement, Tag, Tooltip } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  fillTheGrayBox,
  fillTheInput,
} from '../../store/slices/getApplicationByIdSlice';
import { nanoid } from '@reduxjs/toolkit';
import {
  fillStaticData,
  getStaticData,
} from '../../store/slices/getStaticDataSlice';
import {
  btnLoading,
  getScoringData,
  scoringData,
} from '../../store/slices/scoreScoring';

export default function ProcessingForm() {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  const [show6, setShow6] = useState(true);
  const [show7, setShow7] = useState(true);
  // REDUX
  const dispatch = useDispatch();
  const inputData = useSelector(fillTheInput);
  const grayBoxData = useSelector(fillTheGrayBox);
  const scoringInfo = useSelector(scoringData);
  // console.log('Input Data', inputData);
  // console.log('grayBoxData Data', grayBoxData);
  const inn = inputData.client_information.inn;
  const staticData = useSelector(fillStaticData);
  const btnLoad = useSelector(btnLoading);
  // console.log('Static-data', staticData);
  // console.log('scoringInfo', scoringInfo);
  // console.log('loading', btnLoad);
  useEffect(() => {
    dispatch(getStaticData());
  }, []);

  return (
    <>
      <FormContainer>
        <FormContent>
          <VerticalBtns>
            <Tooltip
              label="???????????????????? ?? ??????????????"
              placement="top"
              hasArrow
              arrowSize={4}
            >
              <Tag style={{ background: 'none' }}>
                <RoundBtn
                  to="client"
                  smooth={true}
                  duration={500}
                  exact="true"
                  spy={true}
                  offset={-185}
                ></RoundBtn>
              </Tag>
            </Tooltip>

            <Tooltip
              label="??????????????????????????"
              placement="left"
              hasArrow
              arrowSize={4}
            >
              <Tag style={{ background: 'none' }}>
                <RoundBtn
                  to="passport"
                  smooth={true}
                  duration={500}
                  exact="true"
                  spy={true}
                  offset={-175}
                ></RoundBtn>
              </Tag>
            </Tooltip>

            <Tooltip label="??????????" placement="left" hasArrow arrowSize={4}>
              <Tag style={{ background: 'none' }}>
                <RoundBtn
                  to="address"
                  smooth={true}
                  duration={500}
                  exact="true"
                  spy={true}
                  offset={-170}
                ></RoundBtn>
              </Tag>
            </Tooltip>

            <Tooltip
              label="???????????????????? ?? ??????????????"
              placement="left"
              hasArrow
              arrowSize={4}
            >
              <Tag style={{ background: 'none' }}>
                <RoundBtn
                  to="credit"
                  smooth={true}
                  duration={500}
                  exact="true"
                  spy={true}
                  offset={-170}
                ></RoundBtn>
              </Tag>
            </Tooltip>

            <Tooltip
              label="???????????????????? ?? ????????????????"
              placement="left"
              hasArrow
              arrowSize={4}
            >
              <Tag style={{ background: 'none' }}>
                <RoundBtn
                  to="finance"
                  smooth={true}
                  duration={500}
                  exact="true"
                  spy={true}
                  offset={-170}
                ></RoundBtn>
              </Tag>
            </Tooltip>

            <Tooltip
              label="?????????? ????????????"
              placement="left"
              hasArrow
              arrowSize={4}
            >
              <Tag style={{ background: 'none' }}>
                <RoundBtn
                  to="job"
                  smooth={true}
                  duration={500}
                  exact="true"
                  spy={true}
                  offset={-170}
                ></RoundBtn>
              </Tag>
            </Tooltip>

            <Tooltip label="????????" placement="bottom" hasArrow arrowSize={4}>
              <Tag style={{ background: 'none' }}>
                <RoundBtn
                  to="kibt"
                  smooth={true}
                  duration={500}
                  exact="true"
                  spy={true}
                  offset={-170}
                ></RoundBtn>
              </Tag>
            </Tooltip>
          </VerticalBtns>

          <MiniFormContainer>
            <WhiteContainer id="client">
              <VerticalGroupClick
                onClick={() => (show ? setShow(false) : setShow(true))}
              >
                <FormHeadline>???????????????????? ?? ??????????????:</FormHeadline>
                {!show ? (
                  <RiArrowDownSLine size={25} color="#00000099" />
                ) : (
                  <RiArrowUpSLine size={25} color="#00000099" />
                )}
              </VerticalGroupClick>
              <HideBlock show={show}>
                <Horizontal>
                  <Vertical>
                    <FormLabel>??????????????</FormLabel>
                    <FormInput
                      name="surname"
                      value={inputData.client_information.name}
                    />
                  </Vertical>
                  <Vertical>
                    <FormLabel>??????</FormLabel>
                    <FormInput
                      name="name"
                      value={inputData.client_information.surname}
                    />
                  </Vertical>
                  <Vertical>
                    <FormLabel>????????????????</FormLabel>
                    <FormInput
                      name="patronymic"
                      value={inputData.client_information.patronymic}
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <SlimText>??????</SlimText>

                    <PrimaryText key={nanoid}>
                      {grayBoxData?.client_information?.fio}
                    </PrimaryText>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>???????? ????????????????</FormLabel>
                    <InputGroup>
                      <FormInput type="date" />
                      <InputRightElement zIndex="0">
                        <CalendarIcon />
                      </InputRightElement>
                    </InputGroup>
                  </Vertical>
                  <Vertical>
                    <FormLabel>??????</FormLabel>
                    <FormInput
                      type="text"
                      value={inputData.client_information.inn}
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Fragment key={nanoid}>
                      <Vertical>
                        <SecondaryText>???????? ????????????????</SecondaryText>
                        <PrimaryText>
                          {grayBoxData?.client_information?.date_of_birth}
                        </PrimaryText>
                      </Vertical>
                      <Vertical>
                        <SecondaryText>??????</SecondaryText>
                        <PrimaryText>
                          {grayBoxData?.client_information?.inn}
                        </PrimaryText>
                      </Vertical>
                    </Fragment>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????????? ????????????????</FormLabel>
                    <FormSelect>
                      <option value="?">?</option>
                      <option value="?">?</option>
                    </FormSelect>
                  </Vertical>
                  <Vertical>
                    <FormLabel>??????????????????????</FormLabel>
                    <FormSelect>
                      <option value="?">?</option>
                      <option value="?">?</option>
                    </FormSelect>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>??????. ??????????</FormLabel>
                    <FormInput
                      type="text"
                      value={inputData.client_information.reg_number}
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical key={nanoid}>
                      <SecondaryText>??????. ??????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.client_information?.registration_number}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>???????????????? ??????????????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData?.sex.map((sex) => (
                              <Fragment key={sex?.id}>
                                <option>{sex?.name_ru}</option>
                              </Fragment>
                            ))}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                  <Vertical>
                    <FormLabel>??????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData.marital_status.map((marital_status) => (
                              <Fragment key={marital_status?.id}>
                                <option>{marital_status.name_ru}</option>
                              </Fragment>
                            ))}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>???????????????? ??????????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.client_information?.marital_status === ''
                          ? '-'
                          : grayBoxData?.client_information?.marital_status}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>??????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.client_information?.gender === ''
                          ? '-'
                          : grayBoxData?.client_information?.gender}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
              </HideBlock>
            </WhiteContainer>
            <WhiteContainer id="passport">
              <VerticalGroupClick
                onClick={() => (show2 ? setShow2(false) : setShow2(true))}
              >
                <FormHeadline>??????????????????????????</FormHeadline>
                {!show2 ? (
                  <RiArrowDownSLine size={25} color="#00000099" />
                ) : (
                  <RiArrowUpSLine size={25} color="#00000099" />
                )}
              </VerticalGroupClick>
              <HideBlock2 show2={show2}>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????? ??????????????????????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData.type_of_payment.map(
                              (type_of_payment) => (
                                <Fragment key={type_of_payment?.id}>
                                  <option>{type_of_payment.name_ru}</option>
                                </Fragment>
                              )
                            )}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>?????? ??????????????????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.certificate?.doc_type === ''
                          ? '-'
                          : grayBoxData?.certificate?.doc_type}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????????? (??????????)</FormLabel>
                    <FormInput
                      type="text"
                      value={inputData?.certificate?.passport_seria}
                    />
                  </Vertical>
                  <Vertical>
                    <FormLabel>?????????? (??????????)</FormLabel>
                    <FormInput
                      type="text"
                      value={inputData?.certificate?.passport_number}
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>?????????? (??????????)</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.certificate?.passport_seria === ''
                          ? '-'
                          : grayBoxData?.certificate?.passport_seria}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>?????????? (??????????)</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.certificate?.passport_number === ''
                          ? '-'
                          : grayBoxData?.certificate?.passport_number}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????? ??????????</FormLabel>
                    <FormInput
                      type="text"
                      value={inputData?.certificate?.passport_who_issued}
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>?????? ??????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.certificate?.passport_who_issued === ''
                          ? '-'
                          : grayBoxData?.certificate?.passport_who_issued}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>???????? ????????????</FormLabel>
                    <InputGroup>
                      <FormInput
                        type="date"
                        value={inputData?.certificate?.passport_issue_date}
                      />
                      <InputRightElement zIndex="0">
                        <CalendarIcon />
                      </InputRightElement>
                    </InputGroup>
                  </Vertical>
                  <Vertical>
                    <FormLabel>???????????????????????? ????</FormLabel>
                    <InputGroup>
                      <FormInput
                        type="date"
                        value={inputData?.certificate?.passport_expire_date}
                      />
                      <InputRightElement zIndex="0">
                        <CalendarIcon />
                      </InputRightElement>
                    </InputGroup>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>???????? ????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.certificate?.passport_issue_date === ''
                          ? '-'
                          : grayBoxData?.certificate?.passport_issue_date}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>???????????????????????? ????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.certificate?.passport_expire_date === ''
                          ? '-'
                          : grayBoxData?.certificate?.passport_expire_date}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
              </HideBlock2>
            </WhiteContainer>
            <WhiteContainer id="address">
              <VerticalGroupClick
                onClick={() => (show3 ? setShow3(false) : setShow3(true))}
              >
                <FormHeadline>??????????</FormHeadline>
                {!show3 ? (
                  <RiArrowDownSLine size={25} color="#00000099" />
                ) : (
                  <RiArrowUpSLine size={25} color="#00000099" />
                )}
              </VerticalGroupClick>
              <HideBlock3 show3={show3}>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????? ????????????</FormLabel>
                    <FormSelect style={{ width: '532px' }}>
                      <option>??????????????????????</option>
                      <option>???? ?????????? ????????????????</option>
                    </FormSelect>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>?????? ????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.address?.address_type === ''
                          ? '-'
                          : grayBoxData?.address?.address_type}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>??????????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData?.regions.map((regions) => (
                              <Fragment key={regions?.id}>
                                <option>{regions?.name_ru}</option>
                              </Fragment>
                            ))}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                  <Vertical>
                    <FormLabel>???????????????????? ??????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData?.city.map((selectChoise) => (
                              <option key={selectChoise?.id}>
                                {selectChoise?.name_ru}
                              </option>
                            ))}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>??????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.address?.city === ''
                          ? '-'
                          : grayBoxData?.address?.city}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>???????????????????? ??????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.address?.locality === ''
                          ? '-'
                          : grayBoxData?.address?.locality}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>

                <Horizontal>
                  <Vertical>
                    <FormLabel>??????????</FormLabel>
                    <FormInput
                      type="text"
                      value={inputData?.address?.district}
                    />
                  </Vertical>
                  <Vertical>
                    <FormLabel>??????????</FormLabel>
                    <FormInput defaultValue="?" />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>??????</FormLabel>
                    <FormInput defaultValue="?" />
                  </Vertical>
                  <Vertical>
                    <FormLabel>????????????</FormLabel>
                    <FormInput defaultValue="?" />
                  </Vertical>
                  <Vertical>
                    <FormLabel>????????????????/??????????????</FormLabel>
                    <FormInput defaultValue="?" />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SlimText>?????????? ??????????????</SlimText>
                    </Vertical>

                    <Vertical>
                      <PrimaryText style={{ textAlign: 'left' }}>
                        {grayBoxData?.address?.full_address === ''
                          ? '-'
                          : grayBoxData?.address?.full_address}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
              </HideBlock3>
            </WhiteContainer>
            <WhiteContainer id="credit">
              <VerticalGroupClick
                onClick={() => (show4 ? setShow4(false) : setShow4(true))}
              >
                <FormHeadline>???????????????????? ?? ??????????????:</FormHeadline>
                {!show4 ? (
                  <RiArrowDownSLine size={25} color="#00000099" />
                ) : (
                  <RiArrowUpSLine size={25} color="#00000099" />
                )}
              </VerticalGroupClick>
              <HideBlock4 show4={show4}>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????????????????? ??????????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData?.credit_product.map(
                              (credit_product) => (
                                <option key={credit_product?.id}>
                                  {credit_product?.name_ru}
                                </option>
                              )
                            )}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                  <Vertical>
                    <FormLabel>???????? ??????????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData?.credit_goal.map((credit_goal) => (
                              <option key={credit_goal?.id}>
                                {credit_goal?.name_ru}
                              </option>
                            ))}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>?????????????????? ??????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.credit_information?.credit_product === ''
                          ? '-'
                          : grayBoxData?.credit_information?.credit_product}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>???????? ??????????????</SecondaryText>
                      <PrimaryText style={{ textAlign: 'left' }}>
                        {grayBoxData?.credit_information?.credit_goal === ''
                          ? '-'
                          : grayBoxData?.credit_information?.credit_goal}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>???????? ?????????????? (??????????????????)</FormLabel>
                    <FormInput
                      type="text"
                      value={
                        inputData?.credit_information?.credit_goal_description
                      }
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>???????? ?????????????? (??????????????????)</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.credit_information
                          ?.credit_goal_description === ''
                          ? '-'
                          : grayBoxData?.credit_information
                              ?.credit_goal_description}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????????? ??????????????</FormLabel>
                    <FormInput
                      value={inputData?.credit_information?.credit_sum}
                    />
                  </Vertical>
                  <Vertical>
                    <FormLabel>???????? ??????????????</FormLabel>
                    <FormSelect>
                      <option>?</option>
                    </FormSelect>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>?????????? ??????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.credit_information?.credit_sum === ''
                          ? '-'
                          : grayBoxData?.credit_information?.credit_sum}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>???????? ??????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.credit_information?.credit_term === ''
                          ? '-'
                          : grayBoxData?.credit_information?.credit_term}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????????? ???????????? ????????</FormLabel>
                    <FormInput
                      value={inputData?.credit_information?.credit_limit}
                    />
                  </Vertical>
                  <Vertical>
                    <FormLabel>?????????????????????? ????????????</FormLabel>
                    <FormInput
                      value={inputData?.credit_information?.interest_rate}
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>?????????? ???????????? ????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.credit_information?.credit_limit === null
                          ? '-'
                          : grayBoxData?.credit_information?.credit_limit}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>?????????????????????? ????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.credit_information?.interest_rate === null
                          ? '-'
                          : grayBoxData?.credit_information?.interest_rate}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????????? ?????????? ????????</FormLabel>
                    <FormInput value={inputData?.credit_information?.orzu_id} />
                  </Vertical>
                  <Vertical>
                    <FormLabel>?????????? ????????????????</FormLabel>
                    <FormInput
                      value={inputData?.credit_information?.phone_number}
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>?????????? ?????????? ????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.credit_information?.orzu_id === null
                          ? '-'
                          : grayBoxData?.credit_information?.orzu_id}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>?????????? ????????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.credit_information?.phone_number === ''
                          ? '-'
                          : grayBoxData?.credit_information?.phone_number}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SlimText style={{ width: '252px' }}>
                        ?????????????????????? ???????????????? ??????????????
                      </SlimText>
                    </Vertical>
                    <Vertical
                      style={{
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      }}
                    >
                      <PrimaryText>?</PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
              </HideBlock4>
            </WhiteContainer>
            <WhiteContainer id="finance">
              <VerticalGroupClick
                onClick={() => (show5 ? setShow5(false) : setShow5(true))}
              >
                <FormHeadline>???????????????????? ?? ????????????????:</FormHeadline>
                {!show5 ? (
                  <RiArrowDownSLine size={25} color="#00000099" />
                ) : (
                  <RiArrowUpSLine size={25} color="#00000099" />
                )}
              </VerticalGroupClick>
              <HideBlock5 show5={show5}>
                <Horizontal>
                  <Vertical>
                    <FormLabel>???????????????????? ???????????? ??????????</FormLabel>
                    <FormInput
                      value={inputData?.financial_information?.family_count_num}
                    />
                  </Vertical>
                  <Vertical>
                    <FormLabel>???????????????????? ????????????????????</FormLabel>
                    <FormInput
                      value={inputData?.financial_information?.dependencies_num}
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>???????????????????? ???????????? ??????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.financial_information
                          ?.family_count_num === null
                          ? '-'
                          : grayBoxData?.financial_information
                              ?.family_count_num}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>???????????????????? ????????????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.financial_information
                          ?.dependencies_num === null
                          ? '-'
                          : grayBoxData?.financial_information
                              ?.dependencies_num}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>???????????????? ??????????</FormLabel>
                    <FormInput
                      value={inputData?.financial_information?.monthly_income}
                    />
                  </Vertical>
                  <Vertical>
                    <FormLabel>???????????????? ?????????????? ??????????????</FormLabel>
                    <FormInput
                      value={
                        inputData?.financial_information
                          ?.family_expenses_of_client_per_month
                      }
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>???????????????? ??????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.financial_information?.monthly_income ===
                        null
                          ? '-'
                          : grayBoxData?.financial_information?.monthly_income}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>???????????????? ?????????????? ??????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.financial_information
                          ?.family_expenses_of_client_per_month === null
                          ? '-'
                          : grayBoxData?.financial_information
                              ?.family_expenses_of_client_per_month}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>???????????????????????? ?????????????? ???? ??????????</FormLabel>
                    <FormInput
                      value={
                        inputData?.financial_information
                          ?.operational_monthly_charges
                      }
                    />
                  </Vertical>
                  <Vertical>
                    <FormLabel>???????????????? ?????????????? ???? ??????????</FormLabel>
                    <FormInput
                      value={
                        inputData?.financial_information
                          ?.family_expenses_per_month
                      }
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>???????????????????????? ?????????????? </SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.financial_information
                          ?.operational_monthly_charges === null
                          ? '-'
                          : grayBoxData?.financial_information
                              ?.operational_monthly_charges}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>???????????????? ?????????????? </SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.financial_information
                          ?.family_expenses_per_month === null
                          ? '-'
                          : grayBoxData?.financial_information
                              ?.family_expenses_per_month}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????????????? ????????????????????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData?.has_estate.map((has_estate) => (
                              <option key={has_estate?.id}>
                                {has_estate?.name_ru}
                              </option>
                            ))}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                  <Vertical>
                    <FormLabel>?????????????? ?????????????? ????????????????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData?.has_car.map((has_car) => (
                              <option key={has_car?.id}>
                                {has_car?.name_ru}
                              </option>
                            ))}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>?????????????? ????????????????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.financial_information?.has_estate === ''
                          ? '-'
                          : grayBoxData?.financial_information?.has_estate}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>?????????????? ?????????????? ????????????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.financial_information?.has_car === ''
                          ? '-'
                          : grayBoxData?.financial_information?.has_car}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SlimText>?????????????????????? ????????????</SlimText>
                      <SlimText style={{ width: '390px' }}>
                        ???????????? ???? ???????????? ?????????? ?????????? ???? ??????????
                      </SlimText>
                    </Vertical>

                    <Vertical style={{ alignItems: 'flex-end' }}>
                      <PrimaryText>
                        {grayBoxData?.financial_information
                          ?.monthly_avg_income === null
                          ? '-'
                          : grayBoxData?.financial_information
                              ?.monthly_avg_income}
                      </PrimaryText>
                      <PrimaryText>
                        {grayBoxData?.financial_information
                          ?.expenses_per_family_member_per_month === null
                          ? '-'
                          : grayBoxData?.financial_information
                              ?.expenses_per_family_member_per_month}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
              </HideBlock5>
            </WhiteContainer>
            <WhiteContainer id="job">
              <VerticalGroupClick
                onClick={() => (show6 ? setShow6(false) : setShow6(true))}
              >
                <FormHeadline>?????????? ????????????:</FormHeadline>
                {!show6 ? (
                  <RiArrowDownSLine size={25} color="#00000099" />
                ) : (
                  <RiArrowUpSLine size={25} color="#00000099" />
                )}
              </VerticalGroupClick>
              <HideBlock6 show6={show6}>
                <Horizontal>
                  <Vertical>
                    <FormLabel>??????????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData?.work_address_region.map(
                              (work_address_region) => (
                                <option key={work_address_region?.id}>
                                  {work_address_region?.name_ru}
                                </option>
                              )
                            )}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                  <Vertical>
                    <FormLabel>???????????????????? ??????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData?.city.map((city) => (
                              <option key={city?.id}>{city?.name_ru}</option>
                            ))}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SecondaryText>??????????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.work_place?.work_place_locality === ''
                          ? '-'
                          : grayBoxData?.work_place?.work_place_locality}
                      </PrimaryText>
                    </Vertical>
                    <Vertical>
                      <SecondaryText>???????????????????? ??????????</SecondaryText>
                      <PrimaryText>
                        {grayBoxData?.work_place?.work_place_city === ''
                          ? '-'
                          : grayBoxData?.work_place?.work_place_city}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????????? ??????????????</FormLabel>

                    <FormInput
                      value={inputData?.work_place?.work_place_full_address}
                    />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <GrayBlock>
                    <Vertical>
                      <SlimText>?????????? ??????????????</SlimText>
                    </Vertical>
                    <Vertical>
                      <PrimaryText style={{ textAlign: 'left' }}>
                        {grayBoxData?.work_place?.work_place_full_address === ''
                          ? '-'
                          : grayBoxData?.work_place?.work_place_full_address}
                      </PrimaryText>
                    </Vertical>
                  </GrayBlock>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <FormLabel>?????????? ????????????????????????</FormLabel>
                    <FormSelect>
                      {staticData &&
                        staticData?.map((selectData) => (
                          <Fragment key={nanoid}>
                            {selectData?.work_scope.map((work_scope) => (
                              <option key={work_scope?.id}>
                                {work_scope?.name_ru}
                              </option>
                            ))}
                          </Fragment>
                        ))}
                    </FormSelect>
                  </Vertical>
                  <Vertical>
                    <FormLabel>???????????????? ???????? (?? ??????????????)</FormLabel>
                    <FormInput
                      value={inputData?.work_place?.work_experience_num}
                    />
                  </Vertical>
                </Horizontal>
              </HideBlock6>
            </WhiteContainer>

            <WhiteContainer id="kibt">
              <VerticalGroupClick
                onClick={() => (show7 ? setShow7(false) : setShow7(true))}
              >
                <FormHeadline>????????</FormHeadline>
                {!show7 ? (
                  <RiArrowDownSLine size={25} color="#00000099" />
                ) : (
                  <RiArrowUpSLine size={25} color="#00000099" />
                )}
              </VerticalGroupClick>
              <HideBlock7 show7={show7}>
                <Horizontal>
                  <Vertical>
                    <FormLabel>??????-???? ???????????????????? ????????????????</FormLabel>
                    <FormInput defaultValue="?" />
                  </Vertical>
                  <Vertical>
                    <FormLabel>??????-???? ?????????????????? ???? ???????? ????????????????</FormLabel>
                    <FormInput defaultValue="?" />
                  </Vertical>
                  <Vertical>
                    <FormLabel>??????-???? ???????????????? ????????????????</FormLabel>
                    <FormInput defaultValue="?" />
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <SecondaryText>????????????????</SecondaryText>
                  </Vertical>
                </Horizontal>
                <Horizontal>
                  <Vertical>
                    <ScoringBtn
                      borderRadius={26}
                      backgroundColor="white"
                      p={6}
                      _hover={{ backgroundColor: 'white' }}
                    >
                      ??????????????????
                    </ScoringBtn>
                  </Vertical>
                </Horizontal>
              </HideBlock7>
            </WhiteContainer>
            <WhiteContainer style={{ marginBottom: '190px' }}>
              <Horizontal style={{ paddingTop: '0' }}>
                <FormHeadline>??????????????</FormHeadline>
              </Horizontal>
              {scoringInfo.limit !== null &&
              scoringData.total_score !== null ? (
                <ScoredData>
                  <Horizontal
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0',
                    }}
                  >
                    <PrimaryText
                      style={{ textAlign: 'left', fontWeight: '600' }}
                    >
                      ??????????
                    </PrimaryText>
                    <PrimaryText
                      style={{ textAlign: 'right', fontWeight: '600' }}
                    >
                      {scoringInfo.total_score}
                    </PrimaryText>
                  </Horizontal>
                  <GrayLine></GrayLine>
                  <Horizontal
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: ' center',
                      padding: '0',
                    }}
                  >
                    <PrimaryText
                      style={{ textAlign: 'left', fontWeight: '600' }}
                    >
                      ??????????
                    </PrimaryText>
                    <PrimaryText
                      style={{ textAlign: 'right', fontWeight: '600' }}
                    >
                      {scoringInfo.limit}
                    </PrimaryText>
                  </Horizontal>
                </ScoredData>
              ) : (
                <></>
              )}
              <Horizontal style={{ width: '532px' }}>
                <Vertical>
                  <ScoringBtn
                    borderRadius={26}
                    backgroundColor="white"
                    p={6}
                    _hover={{ backgroundColor: 'white' }}
                    isLoading={btnLoad}
                    onClick={() => dispatch(getScoringData(inn))}
                  >
                    ??????????????????
                  </ScoringBtn>
                </Vertical>
              </Horizontal>
            </WhiteContainer>
          </MiniFormContainer>

          <PassportBlock />
        </FormContent>
      </FormContainer>
    </>
  );
}
