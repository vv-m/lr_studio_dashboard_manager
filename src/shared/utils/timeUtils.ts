const getCurrentYearAndMonth = () => {
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const date = new Date();
  const year = date.getFullYear();
  const month = months[date.getMonth()];

  return {
    year: year,
    month: month,
  };
};

export default getCurrentYearAndMonth;
