import { TStatisticsDeals } from 'pages/Statistics/Statistics.model';
import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import tabsDealsWarning from 'shared/constants/TabsDealsWarnig';
import Tabs from 'shared/components/Tabs/Tabs';
import Icons from 'shared/components/Icons/Icons';
import cn from 'classnames';

import s from './TableDeals.module.scss';

interface ITableDeals {
  dataDeals: TStatisticsDeals | null;
  setTypeFilter: React.Dispatch<React.SetStateAction<'all' | 'not_shipped' | 'not_paid'>>;
  typeFilter: 'all' | 'not_shipped' | 'not_paid';
}

const TableDeals: FC<ITableDeals> = memo(({ dataDeals, setTypeFilter, typeFilter }) => {
  const [typeSort, setTypeSort] = useState<boolean>(true);

  const [isAll, setIsAll] = useState<boolean>(true);

  const newData = useMemo(() => {
    if (isAll) {
      return dataDeals?.rows.slice(0, 16);
    } else {
      return dataDeals?.rows;
    }
  }, [dataDeals, isAll]);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeFilter(e.target.value as 'all' | 'not_shipped' | 'not_paid');
  }, []);

  const hadlerTypeSort = useCallback(() => {
    setTypeSort((prev) => !prev);
  }, []);

  return (
    <div className={s.table}>
      <div className={s.tableSort}>
        <Tabs
          typeTabs={tabsDealsWarning}
          onChange={handleFilterChange}
          isCheckedTab={typeFilter}
        ></Tabs>
        <div
          className={s.tableSortSumma}
          onClick={hadlerTypeSort}
          role="presentation"
          aria-label="Сменить тип сортировки"
        >
          <span>Сумма</span>
          <Icons name={typeSort ? 'SortUp' : 'SortDown'}></Icons>
        </div>
      </div>
      <div className={s.tableHeader}>
        <div className={s.medium}>№ Заказа</div>
        <div className={s.big}>Заказчик</div>
        <div className={s.small}>Не оплачено</div>
        <div className={s.small}>Не отгружено</div>
        <div className={s.small}>Сумма сделки</div>
      </div>
      <div className={s.list}>
        {newData
          ?.sort((a, b) => (typeSort ? a.sum - b.sum : b.sum - a.sum))
          .map((el, index) => (
            <div
              key={el.id}
              className={cn(s.listItem, { [s.grayBackground]: index % 2 === 0 })}
            >
              <div className={cn(s.medium, s.zeroNO)}>{el.id}</div>
              <div className={cn(s.big, s.zero)}>{el.counterparty_name}</div>
              <div className={cn(s.small, el.no_payed_sum === 0 ? s.zero : s.zeroNO)}>
                {el.no_payed_sum} ₽
              </div>
              <div className={cn(s.small, el.no_shipped_sum === 0 ? s.zero : s.zeroNO)}>
                {el.no_shipped_sum} ₽
              </div>
              <div className={cn(s.small, s.summ)}>{el.sum} ₽</div>
            </div>
          ))}
      </div>
      <div className={s.footer}>
        <button
          className={s.button}
          onClick={() => {
            setIsAll(false);
          }}
        >
          Все сделки - {dataDeals?.total}
        </button>
        <div className={s.total}>
          <span>Общая сумма сделок:</span>
          <span className={s.totalSum}>{dataDeals?.total_sum} ₽</span>
        </div>
      </div>
    </div>
  );
});

export default TableDeals;
