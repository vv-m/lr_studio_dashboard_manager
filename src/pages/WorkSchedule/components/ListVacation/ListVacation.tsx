import { FC, memo } from 'react';
import s from './ListVacation.module.scss';
import useListVacation from './useListVacation';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import OneVacation from './OneVacation/OneVacation';

const ListVacation: FC = memo(() => {
  useListVacation();

  const { vacation } = useSelector((state: RootState) => state.vacation);

  return (
    <div className={s.main}>
      <div className={s.header}>Мои заявки на отпуск</div>
      {vacation?.length && (
        <div className={s.headerTable}>
          <div className={s.type}>Тип</div>
          <div className={s.dateApplication}>Дата заявки</div>
          <div className={s.date}>Период отпуска</div>
          <div className={s.period}>Кол-во дней</div>
          <div className={s.status}>Статус</div>
          <div className={s.active}>Действия</div>
        </div>
      )}
      {!vacation?.length && <div className={s.noVacation}>Нет заявок на отпуск</div>}
      {vacation?.length && (
        <div>
          {vacation?.map((el, index) => (
            <OneVacation
              key={`${el.start_date}${el.status}`}
              index={index}
              vacation={el}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default ListVacation;
