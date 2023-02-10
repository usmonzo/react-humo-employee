import styled from 'styled-components';
import navbarLogo from '../../assets/NavbarLogo.svg';
import bell from '../../assets/notification.svg';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  // sds
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Portal,
  MenuDivider,
  IconButton,
  MenuGroup,
} from '@chakra-ui/react';
import {
  ModalContainer,
  Horizontal,
  ModalLogo,
  ModalHeadline,
} from '../Modals/ExitModal.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { BiExit } from 'react-icons/bi';
import { SecondaryBtn } from '../Buttons/SecondaryButton.js';
import { PrimaryBtn } from '../Buttons/PrimaryButton.js';
import {
  GrayH4,
  Ncontainer,
  NewNotification,
  NHeader,
  OrangeP,
  NHorizontal,
  NVertical,
  NScrollContainer,
  NHeadline,
  OldNotification,
} from '../Notification/NotificationElements';
import { logout } from '../../utils/axios';

const NavbarContainer = styled.div`
  /* position: fixed; */
  z-index: 10;
  position: ${(props) => props.position || 'relative'};
  right: 0;
  left: 0;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  /* box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04); */
  outline: none;
  border-bottom: 1px solid #e7e8ec;
  @media screen and (max-width: 490px) {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
  }
`;

const NavbarContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  /* gap: 235px; */
  /* margin: 0 80px; */
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLogoGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;
const NavbarLogo = styled.img`
  width: 32px;
  height: 32px;
`;
const NavbarLogoText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 23.0556px;
  line-height: 28px;
  letter-spacing: 0.415px;
  color: #ff6200;
`;

const NavbarLinks = styled.ul`
  display: ${(props) => props.links || 'flex'};
  flex-direction: row;
  gap: 40px;
  @media screen and (max-width: 920px) {
    display: none;
  }
`;
const NavbarLink = styled.li`
  list-style: none;
  cursor: pointer;
  margin: 1px;

  > a {
    text-decoration: none;
  }
`;

const NavbarUserGroup = styled.div`
  /* display: ${(props) => props.dsdsds && 'flex'}; */
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    cursor: pointer;
    margin-right: 10px;
  }
  /* @media screen and (max-width: 490px) {
    gap: 20px;
  } */
`;
const MenuNavigation = styled.div`
  margin: 0;
  padding: 0;
  @media screen and (min-width: 920px) {
    display: none;
  }
`;
const BurgerMenu = styled.div`
  @media screen and (min-width: 490px) {
    display: none;
  }
`;
const HideButton = styled.div`
  @media screen and (max-width: 490px) {
    display: none;
  }
`;

export default function Navbar({ dsdsds, position, links }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent borderRadius={13}>
            <ModalContainer>
              <div>
                <ModalLogo />
                <ModalHeadline>
                  Вы уверены, что хотите выйти из платформы?
                </ModalHeadline>
                <Horizontal>
                  <SecondaryBtn onClick={onClose}>Отмена</SecondaryBtn>
                  <div onClick={() => logout(navigate)}>
                    <PrimaryBtn>Выйти</PrimaryBtn>
                  </div>
                </Horizontal>
              </div>
            </ModalContainer>
          </ModalContent>
        </Modal>
      </>
      <NavbarContainer position={position}>
        <NavbarContent>
          <NavbarLogoGroup>
            <NavbarLogo src={navbarLogo} />
            <NavbarLogoText>Employee</NavbarLogoText>
          </NavbarLogoGroup>

          {/* <NavbarLinks links={links}>
            <NavbarLink>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        fontWeight: '450',
                        color: '#FF6200',
                        paddingBottom: '21px',
                        borderBottom: '2px solid #FF6200',
                      }
                    : {
                        paddingBottom: '21px',
                        borderBottom: '2px  transparent',
                        color: 'rgba(0, 0, 0, 0.6)',
                      }
                }
                to="/main"
              >
                Необработанные
              </NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        fontWeight: '450',
                        color: '#FF6200',
                        paddingBottom: '21px',
                        borderBottom: '2px solid #FF6200',
                      }
                    : {
                        paddingBottom: '21px',
                        borderBottom: '2px  transparent',
                        color: 'rgba(0, 0, 0, 0.6)',
                      }
                }
                to="/my_requests"
              >
                Мои заявки
              </NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        fontWeight: '450',
                        color: '#FF6200',
                        paddingBottom: '21px',
                        borderBottom: '2px solid #FF6200',
                      }
                    : {
                        paddingBottom: '21px',
                        borderBottom: '2px  transparent',
                        color: 'rgba(0, 0, 0, 0.6)',
                      }
                }
                to="/my_statistics"
              >
                Моя статистика
              </NavLink>
            </NavbarLink>
          </NavbarLinks> */}

          <NavbarUserGroup dsdsds={dsdsds}>
            <Popover
              isLazy
              placement="bottom-end"
              gutter={15}
              lazyBehavior="keepMounted"
              orientation="horizontal"
              arrowSize={-1}
            >
              <PopoverTrigger>
                <Button
                  padding="1"
                  marginInline="auto"
                  background="none"
                  _active={{ backgroundColor: 'none' }}
                >
                  <img src={bell} alt="notifications" style={{ margin: '0' }} />
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  borderRadius="15px"
                  border="InactiveBorder"
                  outline="none"
                  _focus={{ outline: 'none', border: 'none' }}
                >
                  <Ncontainer>
                    <PopoverHeader>
                      <NHorizontal>
                        <NHeader>Уведомления</NHeader>
                        <OrangeP>Пометить все как прочитанное</OrangeP>
                      </NHorizontal>
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverBody
                      padding="0 20px"
                      backgroundColor="#edeef090"
                      borderBottomRadius="12px"
                    >
                      <NScrollContainer>
                        <NVertical>
                          <GrayH4>Новое</GrayH4>
                          <NewNotification>
                            <NHeadline>Заголовок</NHeadline>
                            <p>
                              А также ключевые особенности структуры проекта
                              освещают чрезвычайно интересные особенности
                              картины в целом, однако конкретные выводы,
                              разумеется, разоблачены.
                            </p>
                            <h5>08.11.2022</h5>
                          </NewNotification>
                          <NewNotification>
                            <NHeadline>Заголовок</NHeadline>
                            <p>
                              А также ключевые особенности структуры проекта
                              освещают чрезвычайно интересные особенности
                              картины в целом, однако конкретные выводы,
                              разумеется, разоблачены.
                            </p>
                            <h5>08.11.2022</h5>
                          </NewNotification>
                        </NVertical>
                        <NVertical>
                          <GrayH4 style={{ marginTop: '20px' }}>
                            Прочитанное
                          </GrayH4>
                          <OldNotification>
                            <NHeadline>Заголовок</NHeadline>
                            <p>
                              А также ключевые особенности структуры проекта
                              освещают чрезвычайно интересные особенности
                              картины в целом, однако конкретные выводы,
                              разумеется, разоблачены.
                            </p>
                            <h5>08.11.2022</h5>
                          </OldNotification>
                          <OldNotification>
                            <NHeadline>Заголовок</NHeadline>
                            <p>
                              А также ключевые особенности структуры проекта
                              освещают чрезвычайно интересные особенности
                              картины в целом, однако конкретные выводы,
                              разумеется, разоблачены.
                            </p>
                            <h5>08.11.2022</h5>
                          </OldNotification>
                        </NVertical>
                      </NScrollContainer>
                    </PopoverBody>
                    {/* <PopoverFooter>This is the footer</PopoverFooter> */}
                  </Ncontainer>
                </PopoverContent>
              </Portal>
            </Popover>
            <HideButton>
              <Menu isLazy>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    fontSize: '14px',
                    backgroundColor: '#ffffff',
                  }}
                  _hover={{
                    color: '#ff6200',
                  }}
                >
                  ФИО Сотрудника
                </MenuButton>

                <MenuList borderRadius="12px" h="53px" boxSize="-10px">
                  <MenuNavigation>
                    <NavLink
                      to="/main"
                      style={({ isActive }) =>
                        isActive
                          ? {
                              fontWeight: '450',
                              color: '#FF6200',
                            }
                          : {
                              color: 'rgba(0, 0, 0, 0.6)',
                            }
                      }
                    >
                      <MenuItem gap={2} position="right">
                        Необработанные
                      </MenuItem>
                    </NavLink>
                    <NavLink
                      to="/my_requests"
                      style={({ isActive }) =>
                        isActive
                          ? {
                              fontWeight: '450',
                              color: '#FF6200',
                            }
                          : {
                              color: 'rgba(0, 0, 0, 0.6)',
                            }
                      }
                    >
                      <MenuItem gap={2} position="right">
                        Мои заявки
                      </MenuItem>
                    </NavLink>
                    <NavLink
                      to="/my_statistics"
                      style={({ isActive }) =>
                        isActive
                          ? {
                              fontWeight: '450',
                              color: '#FF6200',
                            }
                          : {
                              color: 'rgba(0, 0, 0, 0.6)',
                            }
                      }
                    >
                      <MenuItem gap={2} position="right">
                        Моя статистика
                      </MenuItem>
                    </NavLink>
                    <MenuDivider />
                  </MenuNavigation>
                  <MenuItem gap={2} onClick={onOpen} position="right">
                    <BiExit size="20px" />
                    Выйти
                  </MenuItem>
                </MenuList>
              </Menu>
            </HideButton>
            <Menu isLazy>
              <BurgerMenu>
                <MenuButton as={IconButton} aria-label="Options" variant="none">
                  <HamburgerIcon w={7} h={7} />
                </MenuButton>
              </BurgerMenu>
              <MenuList borderRadius="12px" h="53px" boxSize="-10px">
                <MenuNavigation></MenuNavigation>
                {/* <MenuDivider /> */}
                <MenuItem gap={2} onClick={onOpen} position="right">
                  <BiExit size="20px" />
                  Выйти
                </MenuItem>
              </MenuList>
            </Menu>
          </NavbarUserGroup>
        </NavbarContent>
      </NavbarContainer>
    </>
  );
}
