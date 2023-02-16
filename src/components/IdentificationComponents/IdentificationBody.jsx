import { useState } from 'react';
import Footer from '../Footer/Footer(e)';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import {
  FormContainer,
  FormContent,
  Horizontal,
} from './IdentificationsElements';
import { Suspense } from 'react';
import SuspenceFallback from '../../utils/SuspenceFallback';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const IdentificationBody = () => {
  // const [steps, setSteps] = useState({
  //   firstStep: true,
  //   secondStep: false,
  //   thirdStep: false,
  //   fourthStep: false,
  //   fifthStepL: false,
  // });
  const [steps, setSteps] = useState(1);
  const navigate = useNavigate();
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
              cursor: 'pointer',
              alignItems: 'center',
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
              onClick={() => navigate(-1)}
            >
              <MdKeyboardArrowLeft color="black" size={30} />
            </Button>
            <h1>Идентификация Х.О</h1>
          </Horizontal>
          <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
            <Button
              style={{
                border: '1px solid #ff6200',
                background: `${steps === 1 ? '#ff6200' : 'none'}`,
                borderRadius: '100%',
              }}
              onClick={() => setSteps(1)}
            ></Button>
            <Button
              style={{
                background: `${steps === 2 ? '#ff6200' : 'none'}`,
                border: '1px solid #ff6200',
                borderRadius: '100%',
              }}
              onClick={() => setSteps(2)}
            ></Button>
            <Button
              style={{
                background: `${steps === 3 ? '#ff6200' : 'none'}`,
                border: '1px solid #ff6200',
                borderRadius: '100%',
              }}
              onClick={() => setSteps(3)}
            ></Button>
            <Button
              style={{
                background: `${steps === 4 ? '#ff6200' : 'none'}`,
                border: '1px solid #ff6200',
                borderRadius: '100%',
              }}
              onClick={() => setSteps(4)}
            ></Button>
            {console.log(steps)}
          </div>
          <Suspense fallback={<SuspenceFallback />}>
            {steps === 1 ? (
              <FirstStep />
            ) : steps === 2 ? (
              <SecondStep />
            ) : steps === 3 ? (
              <ThirdStep />
            ) : steps === 4 ? (
              <FourthStep />
            ) : (
              <FirstStep />
            )}
          </Suspense>
        </FormContent>
      </FormContainer>
      <Footer position="inherit" />
    </>
  );
};

export default IdentificationBody;
