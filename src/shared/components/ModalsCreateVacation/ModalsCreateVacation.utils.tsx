import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import s from './ModalsCreateVacation.module.scss';

// INFO: Функция для работы с датами
const adjustDate = (inputDate: string, adjustment: -1 | 1) => {
  const dateRegex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
  const match = inputDate.match(dateRegex);
  if (!match) {
    return <div style={{ color: 'red' }}></div>;
  }
  const reformattedDate = `${match[2]}.${match[1]}.${match[3]}`;
  const date = dayjs(reformattedDate, 'MM.DD.YYYY').locale('ru');
  if (!date.isValid()) {
    return <div style={{ color: 'red' }}>Неверный формат даты</div>;
  }
  const newDate = date.add(adjustment, 'day');
  return (
    <div>
      {adjustment === 1 ? 'Выход на работу' : 'Последний рабочий день'}
      <span
        style={{
          color: adjustment === 1 ? 'rgba(255, 88, 33, 1)' : 'rgba(54, 208, 0, 1)',
        }}
      >
        {' '}
        {newDate.format('DD MMM').replace('.', '')}
      </span>
    </div>
  );
};

export const formatDateToISO = (startDate: string): string => {
  const [day, month, year] = startDate.split('.');
  return `${year}-${month}-${day}`;
};

export default adjustDate;
