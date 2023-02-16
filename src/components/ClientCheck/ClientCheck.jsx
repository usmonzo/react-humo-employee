import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { PrimaryBtn } from '../Buttons/PrimaryButton';
import {
  BorderedContainer,
  ClientCheckContainer,
  ClientCheckContent,
  GrayText,
  Horizontal,
  PrimaryText,
  RadioChecker,
  RadioContainer,
  RadioContainer2,
  SecondaryText,
  TextHorizontal,
  Vertical,
  WhiteBox,
  WhiteBoxHeadline,
} from './ClientCheckElements';
import { Button, Radio } from 'antd';

const ClientCheck = () => {
  const [radioValue, setRadioValue] = useState(1);
  const navigate = useNavigate();
  console.log(radioValue);
  return (
    <ClientCheckContainer>
      <ClientCheckContent>
        <Horizontal
          style={{
            justifySelf: 'center',
            justifyContent: 'flex-start',
            gap: '30px',
            marginBottom: '26px',
            cursor: 'pointer',
          }}
          onClick={() => navigate(-1)}
        >
          <Button
            style={{
              borderRadius: '50%',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <MdKeyboardArrowLeft color="black" size={30} />
          </Button>
          <h1>Проверка клиента</h1>
        </Horizontal>
        <Vertical>
          <WhiteBox>
            <WhiteBoxHeadline>Информация о клиенте:</WhiteBoxHeadline>
            <TextHorizontal>
              <SecondaryText>ФИО</SecondaryText>
              <PrimaryText>Саидов Саидмурод</PrimaryText>
            </TextHorizontal>
            <hr />
            <TextHorizontal>
              <SecondaryText>Телефон</SecondaryText>
              <PrimaryText>854 21 3598</PrimaryText>
            </TextHorizontal>
            <hr />
            <TextHorizontal>
              <SecondaryText>Сумма задолжности</SecondaryText>
              <PrimaryText>- 27 946 с</PrimaryText>
            </TextHorizontal>
            <hr />
            <TextHorizontal>
              <SecondaryText>ФИО КЭ</SecondaryText>
              <PrimaryText>Саидов Саидмурод</PrimaryText>
            </TextHorizontal>
            <hr />
            <TextHorizontal>
              <SecondaryText>Телефон КЭ</SecondaryText>
              <PrimaryText>854 21 3598</PrimaryText>
            </TextHorizontal>
            <hr />
          </WhiteBox>
          <WhiteBox>
            <WhiteBoxHeadline>Подключенные услуги:</WhiteBoxHeadline>
            <BorderedContainer>
              <Horizontal>
                <PrimaryText>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0022 32C7.09463 32 -0.00295902 24.8195 9.25465e-07 15.8138C0.00296087 7.13501 7.25409 -0.00296012 16.0644 9.20916e-07C24.8099 0.00296196 32.0033 7.22791 32 16.0033C31.9967 24.8128 24.8095 32 16.0022 32ZM11.6615 25.8284C11.9441 25.7996 12.0851 25.8011 12.2164 25.7692C13.8785 25.371 15.415 24.6729 16.622 23.4648C17.4456 22.6405 18.2314 21.9721 19.4798 22.1915C19.6611 22.2237 19.8601 22.1545 20.0511 22.1301C23.9116 21.6326 27.0048 19.8237 29.3309 16.7032C29.4383 16.567 29.4976 16.3989 29.4996 16.2254C29.5234 15.4727 29.4726 14.7195 29.3479 13.9769C28.0773 6.66531 21.8181 1.78329 14.4679 2.59684C9.06928 3.19349 5.37083 6.2367 3.27518 11.2357C3.20118 11.4093 3.13903 11.5858 3.16788 11.7927C3.65332 15.2449 5.29794 17.9221 8.37813 19.6584C8.68116 19.8294 8.88761 19.8186 9.17214 19.6125C11.6259 17.8381 13.4557 15.5641 14.6614 12.7906C14.7176 12.6618 14.8489 12.5282 14.7479 12.3387C13.2794 12.8883 11.899 12.8169 10.7217 11.6761C9.9865 10.9644 9.6276 9.86916 9.83961 9.15925C11.5963 10.5532 12.945 10.7138 14.9825 9.73924C15.6282 9.43093 16.2372 9.04599 16.8828 8.73989C18.4186 8.00925 20.3818 8.50079 21.1052 9.82696C21.3201 10.2215 21.5466 10.3451 21.9776 10.3685C23.0628 10.4247 23.9131 10.9181 24.4277 11.9082C24.481 12.0111 24.5968 12.1225 24.5306 12.245C24.4503 12.3931 24.3112 12.2713 24.2016 12.2661C23.7643 12.2454 23.3277 12.2291 22.8926 12.295C20.2734 12.6907 18.5374 14.2445 17.443 16.5644C16.9457 17.6197 16.5816 18.7382 16.165 19.8312C15.26 22.2089 14.0131 24.335 11.6615 25.8284Z"
                      fill="#FF6200"
                    />
                  </svg>
                  Хумо Онлайн
                </PrimaryText>
              </Horizontal>
            </BorderedContainer>
            <BorderedContainer>
              <Horizontal style={{ justifyContent: 'space-between' }}>
                <PrimaryText>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="16"
                      fill="url(#paint0_linear_2576_49196)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.89334 9.32043H23.1069C23.7352 9.32043 24.3377 9.55145 24.782 9.96267C25.2263 10.3739 25.4759 10.9316 25.4759 11.5132V12.5312H6.52441V11.5132C6.52441 10.9316 6.774 10.3739 7.21826 9.96267C7.66252 9.55145 8.26506 9.32043 8.89334 9.32043ZM7.21826 22.4611C6.774 22.0499 6.52441 21.4921 6.52441 20.9106V14.8806H25.4759V20.9106C25.4759 21.4921 25.2263 22.0499 24.782 22.4611C24.3377 22.8723 23.7352 23.1033 23.1069 23.1033H8.89334C8.26506 23.1033 7.66252 22.8723 7.21826 22.4611ZM9.68807 17.1041C9.45007 17.3244 9.31637 17.6232 9.31637 17.9347V18.7179C9.31637 19.0294 9.45007 19.3282 9.68807 19.5485C9.92607 19.7688 10.2489 19.8925 10.5854 19.8925H12.6159C12.9525 19.8925 13.2753 19.7688 13.5133 19.5485C13.7513 19.3282 13.885 19.0294 13.885 18.7179V17.9347C13.885 17.6232 13.7513 17.3244 13.5133 17.1041C13.2753 16.8838 12.9525 16.7601 12.6159 16.7601H10.5854C10.2489 16.7601 9.92607 16.8838 9.68807 17.1041ZM18.5852 18.7667C18.5847 20.2213 19.7311 21.3811 21.1698 21.3811C22.5924 21.3811 23.7532 20.2202 23.7538 18.7973C23.7543 17.3799 22.5924 16.213 21.1799 16.2125C19.7569 16.212 18.5857 17.3649 18.5852 18.7667ZM20.5104 20.3806C20.4989 20.3815 20.4853 20.3826 20.4687 20.3843C20.8486 20.143 21.05 19.7996 21.1961 19.4156C21.2152 19.3655 21.2336 19.3151 21.252 19.2647C21.2985 19.1374 21.345 19.0101 21.4026 18.888C21.5793 18.5132 21.8597 18.2623 22.2828 18.1984C22.353 18.1877 22.4236 18.1904 22.4942 18.1937C22.4995 18.194 22.5052 18.1959 22.511 18.1978C22.5245 18.2024 22.5382 18.2071 22.5473 18.1903C22.5555 18.1751 22.5464 18.1609 22.5378 18.1477C22.5352 18.1437 22.5327 18.1397 22.5307 18.1359C22.4476 17.976 22.3103 17.8963 22.135 17.8872C22.0654 17.8834 22.0288 17.8635 21.9941 17.7997C21.8772 17.5855 21.5601 17.5061 21.3121 17.6242C21.2593 17.6491 21.2081 17.6774 21.1569 17.7057C21.1068 17.7333 21.0567 17.7609 21.0051 17.7856C20.676 17.943 20.4582 17.917 20.1745 17.6919C20.1402 17.8065 20.1982 17.9834 20.3169 18.0984C20.5071 18.2827 20.7301 18.2942 20.9673 18.2054C20.9801 18.2294 20.9698 18.2479 20.9603 18.2648C20.9578 18.2694 20.9552 18.2739 20.9533 18.2784C20.7585 18.7264 20.463 19.0937 20.0667 19.3803C20.0207 19.4136 19.9874 19.4153 19.9384 19.3877C19.4409 19.1072 19.1753 18.6748 19.0969 18.1172C19.0922 18.0838 19.1023 18.0553 19.1142 18.0273C19.4527 17.2198 20.0501 16.7283 20.922 16.6319C22.1092 16.5005 23.1202 17.2891 23.3254 18.47C23.3456 18.59 23.3538 18.7116 23.3499 18.8332C23.3496 18.8612 23.34 18.8884 23.3227 18.9104C22.947 19.4144 22.4473 19.7066 21.8238 19.7869C21.8144 19.7881 21.8048 19.79 21.7952 19.7919C21.7736 19.7962 21.7519 19.8004 21.7315 19.7968C21.5299 19.7614 21.403 19.8694 21.2699 20.0025C21.075 20.1976 20.8268 20.3104 20.5584 20.3747C20.5449 20.378 20.5307 20.3791 20.5104 20.3806Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2576_49196"
                        x1="15.8447"
                        y1="0"
                        x2="15.8447"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.133058" stopColor="#FC6B2F" />
                        <stop offset="0.454969" stopColor="#FF6200" />
                        <stop offset="1" stopColor="#FF6200" />
                      </linearGradient>
                    </defs>
                  </svg>
                  ОРЗУ
                </PrimaryText>
                <GrayText style={{ maxWidth: '122px', width: '100%' }}>
                  Лимит: 30 000
                </GrayText>
              </Horizontal>
            </BorderedContainer>
          </WhiteBox>
          <WhiteBox>
            <WhiteBoxHeadline>
              Выберите тип заявки для подключения:
            </WhiteBoxHeadline>
            <Radio.Group
              onChange={(e) => setRadioValue(e.target.value)}
              value={radioValue}
            >
              <RadioContainer radioValue={radioValue}>
                <RadioChecker name="orzu" value={1} checked={radioValue === 1}>
                  <SecondaryText
                    style={{
                      fontWeight: '500',
                    }}
                  >
                    Увеличение лимита ОРЗУ
                  </SecondaryText>
                </RadioChecker>
              </RadioContainer>
              <RadioContainer2 radioValue={radioValue}>
                <RadioChecker
                  value={2}
                  checked={radioValue === 2}
                  name="standart"
                  size="large"
                >
                  <SecondaryText
                    style={{
                      maxWidth: '330px',
                      fontWeight: '500',
                    }}
                  >
                    Оформление стандарт/проект кредита
                  </SecondaryText>
                </RadioChecker>
              </RadioContainer2>
            </Radio.Group>
          </WhiteBox>
          <PrimaryBtn as={Link} to="identification">
            Далее
          </PrimaryBtn>
        </Vertical>
      </ClientCheckContent>
    </ClientCheckContainer>
  );
};

export default ClientCheck;
