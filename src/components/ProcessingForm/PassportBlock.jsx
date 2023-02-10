import styled from 'styled-components';
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { PassportBtn } from '../Buttons/PassportBtn';
import { Vertical } from './ProcessingFormElements';
import rotateLeft from '../../assets/crop-alt-rotate-left.svg';
import rotateRight from '../../assets/crop-alt-rotate-right.svg';
import plus from '../../assets/search-plus.svg';
import minus from '../../assets/search-minus.svg';
import passport from '../../assets/passport.png';
import { SecondaryBtn } from '../Buttons/SecondaryButton.js';
import {
  ModalContainer,
  DHorizontal,
  ModalHeadline,
  ModalText,
  WhiteBox,
  ModalLabel,
  Bold,
  Slim,
  GrayText,
} from '../Modals/NumbersModal.js';
import creditCard from '../../assets/credit-card.png';
import call from '../../assets/call.png';
import history from '../../assets/history.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkedNumbers,
  getCheckedNumbers,
} from '../../store/slices/checkPhoneNumbersSlice';
import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import {
  fileData,
  fillTheFiles,
  fillTheFilesID,
  getFilesById,
  setFilesID,
} from '../../store/slices/getApplicationByIdSlice';

const PassportBlockContainer = styled.div`
  position: sticky;
  align-self: flex-start;
  top: 172px;
  z-index: 1;
  margin-bottom: 324px;
  /* margin-top: 10px; */
`;
const PassportBlockContent = styled.div`
  /* position: sticky; */
  display: flex;
  flex-direction: column;
`;
const PassportBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 24px 24px;
  gap: 24px;
  background: #ffffff;
  border-radius: 12px;
  width: 600px;
`;
const Horizontal = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const FormSelect = styled(Select)`
  gap: 12px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
`;
export const PassportLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.38);
`;
const SlBtn = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #edeef0;
  border-radius: 100%;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;
const DocumentImg = styled.div`
  width: 500px;
  height: 400px;
  overflow: scroll;
  border-radius: 12px;

  img {
    width: 100%;
  }
`;

const PassportBlock = () => {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const dispatch = useDispatch();
  const numbersInfo = useSelector(checkedNumbers);
  const staticDataFiles = useSelector(fillTheFiles);
  // console.log('Files Data', staticDataFiles);
  const fileId = useSelector(fillTheFilesID);
  // console.log('File ID', fileId);
  const fileImage = useSelector(fileData);
  // console.log('file imageeeeee', fileImage);
  useEffect(() => {
    dispatch(getCheckedNumbers(id));
  }, []);

  const ModalHandler = () => {
    // console.log('nnnnnnn', numbersInfo[0]);
    onOpen();
  };

  useEffect(() => {
    if (fileId) {
      dispatch(getFilesById(fileId));
    }
  }, [fileId]);

  return (
    <>
      <>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" key={1}>
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent borderRadius={16}>
            <ModalContainer>
              <ModalHeadline>Совпадение номеров</ModalHeadline>
              {numbersInfo?.length === null ? (
                <WhiteBox>
                  <ModalHeadline>Нет совпадений</ModalHeadline>
                </WhiteBox>
              ) : (
                <>
                  {numbersInfo &&
                    numbersInfo?.map((info) => (
                      <Fragment key={nanoid}>
                        <ModalText>{info[0].phone}</ModalText>
                        {info[0].overlaps?.map((overlapsInfo, idx) => (
                          <WhiteBox key={idx}>
                            <DHorizontal>
                              <ModalLabel>В заявке:</ModalLabel>
                              <Bold>{overlapsInfo?.application_id}</Bold>
                              <Slim>{overlapsInfo?.number_owner}</Slim>
                            </DHorizontal>
                            <DHorizontal>
                              <ModalLabel>Чьи номера:</ModalLabel>
                              <GrayText>Денис Андреев</GrayText>
                              <GrayText>Денис Андреев</GrayText>
                            </DHorizontal>
                          </WhiteBox>
                        ))}
                      </Fragment>
                    ))}
                  {numbersInfo?.length &&
                    numbersInfo?.map((info) => (
                      <Fragment key={nanoid}>
                        <ModalText>{info[1]?.phone}</ModalText>

                        {info[1]?.overlaps ? (
                          info[1]?.overlaps?.map((overlapsInfo) => (
                            <WhiteBox key={nanoid}>
                              <DHorizontal>
                                <ModalLabel>В заявке:</ModalLabel>
                                <Bold>{overlapsInfo?.application_id}</Bold>
                                <Slim>{overlapsInfo?.number_owner}</Slim>
                              </DHorizontal>
                              <DHorizontal>
                                <ModalLabel>Чьи номера:</ModalLabel>
                                <GrayText>Денис Андреев</GrayText>
                                <GrayText>Денис Андреев</GrayText>
                              </DHorizontal>
                            </WhiteBox>
                          ))
                        ) : (
                          <WhiteBox style={{ alignItems: 'center' }}>
                            <ModalHeadline>Нет совпадений</ModalHeadline>
                          </WhiteBox>
                        )}
                      </Fragment>
                    ))}
                </>
              )}

              <SecondaryBtn onClick={onClose} style={{ marginTop: '18px' }}>
                Закрыть
              </SecondaryBtn>
            </ModalContainer>
          </ModalContent>
        </Modal>
      </>
      <PassportBlockContainer>
        <PassportBlockContent>
          <Horizontal>
            <PassportBtn>
              <img src={creditCard} alt="card" />
              Открыть КИБТ
            </PassportBtn>
            <PassportBtn>
              <img src={history} alt="history" />
              Кредитная история в Хумо
            </PassportBtn>
            <PassportBtn onClick={ModalHandler}>
              <img src={call} alt="phone" />
              Совпадение номеров
            </PassportBtn>
          </Horizontal>
          <PassportBox>
            <Horizontal>
              <Vertical>
                <PassportLabel>Документ</PassportLabel>
                <Horizontal>
                  <FormSelect>
                    {staticDataFiles &&
                      staticDataFiles?.map((documents) => (
                        <option
                          key={documents.id}
                          onClick={() => {
                            dispatch(setFilesID(documents.id));
                          }}
                        >
                          {documents.name}
                        </option>
                      ))}
                    {/* {console.log('recentFileId', fileId)} */}
                  </FormSelect>
                  <SlBtn
                    borderRadius="100%"
                    onClick={() => setRotate(rotate - 90)}
                  >
                    <img src={rotateLeft} alt="icon" />
                  </SlBtn>
                  <SlBtn
                    borderRadius="100%"
                    onClick={() => setRotate(rotate + 90)}
                  >
                    <img src={rotateRight} alt="icon" />
                  </SlBtn>
                  <SlBtn
                    borderRadius="100"
                    onClick={() => setScale(scale + 0.5)}
                  >
                    <img src={plus} alt="icon" />
                  </SlBtn>
                  <SlBtn
                    borderRadius="100"
                    onClick={() => setScale(scale - 0.5)}
                    isDisabled={scale < 1.01 ? true : false}
                  >
                    <img src={minus} alt="icon" />
                  </SlBtn>
                </Horizontal>
              </Vertical>
            </Horizontal>
            <DocumentImg>
              <img
                src={`data:image/jpeg;base64,${fileImage}`}
                alt="passport"
                style={{
                  transform: `rotate(${rotate}deg) scale(${scale})`,
                  overflowX: 'hiden',
                }}
              />
            </DocumentImg>
          </PassportBox>
          <PassportBox>
            <Vertical>
              <PassportLabel>Коментарий</PassportLabel>
              <Textarea></Textarea>
            </Vertical>
          </PassportBox>
        </PassportBlockContent>
      </PassportBlockContainer>
    </>
  );
};

export default PassportBlock;
