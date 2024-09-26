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

export const getMonthInGenitive = (month: string) => {
  const monthsMap: { [key: string]: string } = {
    Январь: 'Января',
    Февраль: 'Февраля',
    Март: 'Марта',
    Апрель: 'Апреля',
    Май: 'Мая',
    Июнь: 'Июня',
    Июль: 'Июля',
    Август: 'Августа',
    Сентябрь: 'Сентября',
    Октябрь: 'Октября',
    Ноябрь: 'Ноября',
    Декабрь: 'Декабря',
  };

  return monthsMap[month] || month;
};

export const getShortMonthName = (month: string) => {
  const monthMap: { [key: string]: string } = {
    Январь: 'Янв',
    Февраль: 'Фев',
    Март: 'Мар',
    Апрель: 'Апр',
    Май: 'Май',
    Июнь: 'Июн',
    Июль: 'Июл',
    Август: 'Авг',
    Сентябрь: 'Сен',
    Октябрь: 'Окт',
    Ноябрь: 'Ноя',
    Декабрь: 'Дек',
  };

  return monthMap[month] || month;
};

export default getCurrentYearAndMonth;
