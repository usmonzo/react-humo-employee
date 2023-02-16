import {
  // EmptyRow,
  // EmptyRowH1,
  // EmptyRowImg,
  MainTableContainer,
  MainTableContent,
  MainTableTable,
} from './TableElements';
// import wait from '../../assets/wait.svg';
// import emptyFile from '../../assets/file-search-alt.png';
// import { useEffect } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Button } from 'antd';

const WebApplicationsTable = () => {
  // const dispatch = useDispatch();
  return (
    <MainTableContainer>
      <MainTableContent>
        <MainTableTable>
          <>
            <thead>
              <tr>
                <th>Клиент</th>
                <th>Номер телефона</th>
                <th>Дата</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Милена Макарова</td>
                <td>(684) 555-0102</td>
                <td>2020/01/08 13:33</td>
                <td width={1}>
                  <Button w="55px" h="55px" borderRadius={100}>
                    <BsArrowRightShort color="black" size="28px" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Милена Макарова</td>
                <td>(684) 555-0102</td>
                <td>2020/01/08 13:33</td>
                <td width={1}>
                  <Button w="55px" h="55px" borderRadius={100}>
                    <BsArrowRightShort color="black" size="28px" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Милена Макарова</td>
                <td>(684) 555-0102</td>
                <td>2020/01/08 13:33</td>
                <td width={1}>
                  <Button w="55px" h="55px" borderRadius={100}>
                    <BsArrowRightShort color="black" size="28px" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Милена Макарова</td>
                <td>(684) 555-0102</td>
                <td>2020/01/08 13:33</td>
                <td width={1}>
                  <Button w="55px" h="55px" borderRadius={100}>
                    <BsArrowRightShort color="black" size="28px" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Милена Макарова</td>
                <td>(684) 555-0102</td>
                <td>2020/01/08 13:33</td>
                <td width={1}>
                  <Button w="55px" h="55px" borderRadius={100}>
                    <BsArrowRightShort color="black" size="28px" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Милена Макарова</td>
                <td>(684) 555-0102</td>
                <td>2020/01/08 13:33</td>
                <td width={1}>
                  <Button w="55px" h="55px" borderRadius={100}>
                    <BsArrowRightShort color="black" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Милена Макарова</td>
                <td>(684) 555-0102</td>
                <td>2020/01/08 13:33</td>
                <td width={1}>
                  <Button w="55px" h="55px" borderRadius={100}>
                    <BsArrowRightShort color="black" size="28px" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </>
          {/* <EmptyRow>
            <div>
              <EmptyRowImg src={emptyFile} />
              <EmptyRowH1>Заявок на веб-сайте временно нет</EmptyRowH1>
            </div>
          </EmptyRow> */}
        </MainTableTable>
      </MainTableContent>
    </MainTableContainer>
  );
};

export default WebApplicationsTable;
