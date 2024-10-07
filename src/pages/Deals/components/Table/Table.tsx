import React, {
  Dispatch,
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import tabsDealsWarning from 'shared/constants/TabsDealsWarnig';
import Tabs from 'shared/components/Tabs/Tabs';
import Icons from 'shared/components/Icons/Icons';
import cn from 'classnames';
import { IRowsDeal } from 'pages/Statistics/Statistics.model';

import s from './Table.module.scss';

interface ITable {
  dataDeals: IRowsDeal[];
  setTypeFilter: React.Dispatch<React.SetStateAction<'all' | 'not_shipped' | 'not_paid'>>;
  typeFilter: 'all' | 'not_shipped' | 'not_paid';
  setNumberPage: React.Dispatch<React.SetStateAction<number>>;
  numberPage: number;
  totalPage: number;
  allTotalDeals: number;
}

const Table: FC<ITable> = memo(
  ({
    dataDeals,
    setTypeFilter,
    typeFilter,
    setNumberPage,
    totalPage,
    numberPage,
    allTotalDeals,
  }) => {
    const [typeSort, setTypeSort] = useState<boolean>(true);
    const listRef = useRef<HTMLDivElement | null>(null);

    const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setTypeFilter(e.target.value as 'all' | 'not_shipped' | 'not_paid');
    }, []);

    const hadlerTypeSort = useCallback(() => {
      setTypeSort((prev) => !prev);
    }, []);

    const handleScroll = useCallback(() => {
      if (listRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
          if (numberPage < totalPage) {
            setNumberPage((prevPage) => prevPage + 1);
          }
        }
      }
    }, [setNumberPage, numberPage]);

    useEffect(() => {
      const listElement = listRef.current;
      if (listElement) {
        listElement.addEventListener('scroll', handleScroll);
      }
      return () => {
        if (listElement) {
          listElement.removeEventListener('scroll', handleScroll);
        }
      };
    }, [handleScroll]);

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
        <div className={s.list} ref={listRef}>
          {dataDeals
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
          <div className={s.counter}>
            Показано <span className={s.counterValue}>{dataDeals.length}</span> из{' '}
            <span className={s.counterValue}>{allTotalDeals}</span>
          </div>
          <div className={s.total}>
            <span>Общая сумма сделок:</span>
            <span className={s.totalSum}>
              {dataDeals?.reduce((acc, el) => acc + el.sum, 0).toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>
      </div>
    );
  },
);

export default Table;
