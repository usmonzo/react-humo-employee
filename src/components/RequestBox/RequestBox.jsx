import { useState } from 'react';
import {
  Horizontal,
  MainBodySection,
  RequestContainer,
  RequestContent,
  RequestImage,
  RequestInfoGroup,
} from '../RequestBox/ToProcessing';
import { PrimaryBtn } from '../Buttons/PrimaryButton';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import delay from '../../assets/delay.svg';
import {
  ButtonLink,
  Group,
  ProcessingNavigationContainer,
  ProcessingNavigationContent,
  ProcessingNavigationH1,
} from './ProcessingNavigation';
import { SecondaryBtn } from '../Buttons/SecondaryButton';
import { RiArrowRightSLine } from 'react-icons/ri';
import {
  NavigationContainer,
  NavigationContent,
  NavigationH1,
} from './WebRequestsNavigation';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import WebApplicationsTable from './RequestBoxTable/WebApplicationsTable';
import { InnCheckContent, InnHorizontal } from '../InnCheck/innCheckModal';
import { Link } from 'react-router-dom';
// import refresh from '../../assets/refresh.svg';

export default function RequestBox() {
  const [showWebRequests, setShowWebRequests] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {showWebRequests ? (
        <>
          <ProcessingNavigationContainer>
            <ProcessingNavigationContent>
              <Group>
                <ProcessingNavigationH1>Заявки</ProcessingNavigationH1>
              </Group>
              <Horizontal>
                <ButtonLink>
                  <PrimaryBtn
                    onClick={onOpen}
                    style={{
                      padding: '14px 30px',
                      maxWidth: '250px',
                      width: '100%',
                      borderRadius: '16px',
                    }}
                  >
                    Добавить
                  </PrimaryBtn>
                </ButtonLink>
                <SecondaryBtn
                  onClick={() => setShowWebRequests(false)}
                  style={{
                    maxWidth: '800px',
                    borderRadius: '16px',
                    width: '100%',
                    //   padding: '0 20px 0 20px',
                    // marginLeft: '10px',
                  }}
                >
                  С веб-сайта
                  <span
                    style={{
                      backgroundColor: '#E0E0E0',
                      padding: '4px 5px',
                      borderRadius: '100%',
                      marginLeft: '5px',
                      fontSize: '14px',
                      fontWeight: '400',
                    }}
                  >
                    99
                  </span>
                  <RiArrowRightSLine size={20} color="#000000bc" />
                </SecondaryBtn>
              </Horizontal>
            </ProcessingNavigationContent>
          </ProcessingNavigationContainer>

          <MainBodySection
            style={{
              flexDirection: 'column',
              paddingRight: '10px',
              margin: '0',
              transition: '2s all linear',
            }}
          >
            <RequestContainer>
              <RequestContent>
                <Horizontal>
                  <RequestImage src={delay} />
                  {/* <RequestImage src={refresh} /> */}
                </Horizontal>
                <RequestInfoGroup>
                  <h5>Клиент</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Тип заявки</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Номер телефона</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Сумма</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Дата</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <Button w="55px" h="55px" borderRadius={100}>
                  <div>
                    <BsArrowRightShort color="black" size="28px" />
                  </div>
                </Button>
              </RequestContent>
            </RequestContainer>
            <RequestContainer>
              <RequestContent>
                <Horizontal>
                  <RequestImage src={delay} />
                  {/* <RequestImage src={refresh} /> */}
                </Horizontal>
                <RequestInfoGroup>
                  <h5>Клиент</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Тип заявки</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Номер телефона</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Сумма</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Дата</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <Button w="55px" h="55px" borderRadius={100}>
                  <div>
                    <BsArrowRightShort color="black" size="28px" />
                  </div>
                </Button>
              </RequestContent>
            </RequestContainer>
            <RequestContainer>
              <RequestContent>
                <Horizontal>
                  <RequestImage src={delay} />
                  {/* <RequestImage src={refresh} /> */}
                </Horizontal>
                <RequestInfoGroup>
                  <h5>Клиент</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Тип заявки</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Номер телефона</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Сумма</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Дата</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <Button w="55px" h="55px" borderRadius={100}>
                  <div>
                    <BsArrowRightShort color="black" size="28px" />
                  </div>
                </Button>
              </RequestContent>
            </RequestContainer>
            <RequestContainer>
              <RequestContent>
                <Horizontal>
                  <RequestImage src={delay} />
                  {/* <RequestImage src={refresh} /> */}
                </Horizontal>
                <RequestInfoGroup>
                  <h5>Клиент</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Тип заявки</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Номер телефона</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Сумма</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Дата</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <Button w="55px" h="55px" borderRadius={100}>
                  <div>
                    <BsArrowRightShort color="black" size="28px" />
                  </div>
                </Button>
              </RequestContent>
            </RequestContainer>
            <RequestContainer>
              <RequestContent>
                <Horizontal>
                  <RequestImage src={delay} />
                  {/* <RequestImage src={refresh} /> */}
                </Horizontal>
                <RequestInfoGroup>
                  <h5>Клиент</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Тип заявки</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Номер телефона</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Сумма</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Дата</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <Button w="55px" h="55px" borderRadius={100}>
                  <div>
                    <BsArrowRightShort color="black" size="28px" />
                  </div>
                </Button>
              </RequestContent>
            </RequestContainer>
            <RequestContainer>
              <RequestContent>
                <Horizontal>
                  <RequestImage src={delay} />
                  {/* <RequestImage src={refresh} /> */}
                </Horizontal>
                <RequestInfoGroup>
                  <h5>Клиент</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Тип заявки</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Номер телефона</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Сумма</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Дата</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <Button w="55px" h="55px" borderRadius={100}>
                  <div>
                    <BsArrowRightShort color="black" size="28px" />
                  </div>
                </Button>
              </RequestContent>
            </RequestContainer>
            <RequestContainer>
              <RequestContent>
                <Horizontal>
                  <RequestImage src={delay} />
                  {/* <RequestImage src={refresh} /> */}
                </Horizontal>
                <RequestInfoGroup>
                  <h5>Клиент</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Тип заявки</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Номер телефона</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Сумма</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Дата</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <Button w="55px" h="55px" borderRadius={100}>
                  <div>
                    <BsArrowRightShort color="black" size="28px" />
                  </div>
                </Button>
              </RequestContent>
            </RequestContainer>
            <RequestContainer>
              <RequestContent>
                <Horizontal>
                  <RequestImage src={delay} />
                  {/* <RequestImage src={refresh} /> */}
                </Horizontal>
                <RequestInfoGroup>
                  <h5>Клиент</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Тип заявки</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Номер телефона</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Сумма</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Дата</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <Button w="55px" h="55px" borderRadius={100}>
                  <div>
                    <BsArrowRightShort color="black" size="28px" />
                  </div>
                </Button>
              </RequestContent>
            </RequestContainer>
            <RequestContainer>
              <RequestContent>
                <Horizontal>
                  <RequestImage src={delay} />
                  {/* <RequestImage src={refresh} /> */}
                </Horizontal>
                <RequestInfoGroup>
                  <h5>Клиент</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Тип заявки</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Номер телефона</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Сумма</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <RequestInfoGroup>
                  <h5>Дата</h5>
                  <h3>.....</h3>
                </RequestInfoGroup>
                <Button w="55px" h="55px" borderRadius={100}>
                  <div>
                    <BsArrowRightShort color="black" size="28px" />
                  </div>
                </Button>
              </RequestContent>
            </RequestContainer>
          </MainBodySection>
        </>
      ) : (
        <>
          <>
            <NavigationContainer>
              <NavigationContent>
                <Group>
                  <NavigationH1>Заявки с Веб-сайта</NavigationH1>
                </Group>
                <Horizontal style={{ gap: '20px', justifyContent: 'end' }}>
                  <SecondaryBtn
                    onClick={() => setShowWebRequests(true)}
                    style={{
                      display: 'flex',
                      maxWidth: '220px',
                      borderRadius: '16px',
                      width: '100%',
                      padding: '0',
                    }}
                  >
                    Все заявки
                    <span
                      style={{
                        backgroundColor: '#E0E0E0',
                        padding: '4px 5px',
                        borderRadius: '100%',
                        marginLeft: '5px',
                        fontSize: '14px',
                        fontWeight: '400',
                      }}
                    >
                      99
                    </span>
                    <RiArrowRightSLine size={20} color="#000000bc" />
                  </SecondaryBtn>
                </Horizontal>
              </NavigationContent>
            </NavigationContainer>
          </>
          <>
            <WebApplicationsTable />
          </>
        </>
      )}
      <>
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
          <ModalOverlay />
          <ModalContent bgColor="transparent">
            <InnCheckContent>
              <ModalBody>
                <InnHorizontal>
                  {/* <Button
                    w="55px"
                    h="55px"
                    borderRadius={100}
                    justifySelf="flex-start"
                    backgroundColor="#FAFAFA"
                    _hover={{ backgroundColor: '#eaeaea' }}
                  >
                    <div>
                      <BsArrowLeftShort color="black" size="28px" />
                    </div>
                  </Button> */}
                  <h1>Проверка клиента</h1>
                </InnHorizontal>
                <p>Введите ИНН для проверки клиента на наличие данных</p>
                <label style={{ alignSelf: 'flex-start' }}>ИНН</label>
                <Input />
              </ModalBody>
              <PrimaryBtn as={Link} to="/client_check">
                Продолжить
              </PrimaryBtn>
            </InnCheckContent>
            <ModalCloseButton w={10} h={10} size={5} />
          </ModalContent>
        </Modal>
      </>
    </>
  );
}
