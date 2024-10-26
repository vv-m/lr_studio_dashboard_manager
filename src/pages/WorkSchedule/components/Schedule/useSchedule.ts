import { useEffect, useState } from 'react';
import useInfoVacationHttpController, {
  IScheduleManager,
} from 'shared/http/useInfoVacationHttpController';
import { formatDateToMMDDYYYY } from 'shared/utils/timeUtils';

const monthShortNames = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек',
];

const useSchedule = () => {
  const { getEmployees } = useInfoVacationHttpController();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [schedule, setSchedule] = useState<null | IScheduleManager[]>(null);

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const formatDate = (date: Date) => {
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const month = monthShortNames[monthIndex];
    return { month, year };
  };

  const { month, year } = formatDate(currentDate);

  useEffect(() => {
    (async () => {
      const data = await getEmployees(formatDateToMMDDYYYY(currentDate));
      if (data) {
        setSchedule(data.employees);
      } else {
        setSchedule(null);
      }
    })();
  }, [currentDate]);

  return { handlePrevMonth, month, year, schedule, handleNextMonth };
};

export default useSchedule;
