import {
  AdminTableContainer,
  AdminTableContent,
  AdminTableTable,
  Container,
} from './AdminTableElements';
import wait from '../../../assets/wait.svg';

const AdminTable = () => {
  return (
    <AdminTableContent>
      <AdminTableTable>
        <thead>
          <tr>
            <th>Статус</th>
            <th>Филиал</th>
            <th>Тип заявки</th>
            <th>Андеррайтер</th>
            <th>Клиент</th>
            <th>Сумма заявки</th>
            <th>Время</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img src={wait} alt={wait} />В ожидании
              </div>
            </td>
            <td>Таджикский</td>
            <td>Подключение Х О</td>
            <td>Андеррайтер 14</td>
            <td>Милена Макарова</td>
            <td>60 241,42 сом</td>
            <td>8:30, 13/12</td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img src={wait} alt={wait} />В ожидании
              </div>
            </td>
            <td>Таджикский</td>
            <td>Подключение Х О</td>
            <td>Андеррайтер 14</td>
            <td>Полина Петрова</td>
            <td>60 241,42 сом</td>
            <td>8:30, 13/12</td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img src={wait} alt={wait} />В ожидании
              </div>
            </td>
            <td>Таджикский</td>
            <td>Подключение Х О</td>
            <td>Андеррайтер 14</td>
            <td>Захар Романов</td>
            <td>60 241,42 сом</td>
            <td>8:30, 13/12</td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img src={wait} alt={wait} />В ожидании
              </div>
            </td>
            <td>Таджикский</td>
            <td>Подключение Х О</td>
            <td>Андеррайтер 14</td>
            <td>Екатерина Семёнова</td>
            <td>60 241,42 сом</td>
            <td>8:30, 13/12</td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img src={wait} alt={wait} />В ожидании
              </div>
            </td>
            <td>Таджикский</td>
            <td>Подключение Х О</td>
            <td>Андеррайтер 14</td>
            <td>Арина Соколова</td>
            <td>60 241,42 сом</td>
            <td>8:30, 13/12</td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img src={wait} alt={wait} />В ожидании
              </div>
            </td>
            <td>Таджикский</td>
            <td>Подключение Х О</td>
            <td>Андеррайтер 14</td>
            <td>Арина Соколова</td>
            <td>60 241,42 сом</td>
            <td>8:30, 13/12</td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img src={wait} alt={wait} />В ожидании
              </div>
            </td>
            <td>Таджикский</td>
            <td>Подключение Х О</td>
            <td>Андеррайтер 14</td>
            <td>Арина Соколова</td>
            <td>60 241,42 сом</td>
            <td>8:30, 13/12</td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img src={wait} alt={wait} />В ожидании
              </div>
            </td>
            <td>Таджикский</td>
            <td>Подключение Х О</td>
            <td>Андеррайтер 14</td>
            <td>Арина Соколова</td>
            <td>60 241,42 сом</td>
            <td>8:30, 13/12</td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img src={wait} alt={wait} />В ожидании
              </div>
            </td>
            <td>Таджикский</td>
            <td>Подключение Х О</td>
            <td>Андеррайтер 14</td>
            <td>Арина Соколова</td>
            <td>60 241,42 сом</td>
            <td>8:30, 13/12</td>
          </tr>
        </tbody>
      </AdminTableTable>
    </AdminTableContent>
  );
};

export default AdminTable;
