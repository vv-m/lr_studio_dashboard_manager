import React, { Dispatch, FC, memo, useCallback } from 'react';
import Tabs from 'shared/components/Tabs/Tabs';
import tabsTableCalls from 'shared/constants/TabsTableCalls';

import s from './Graphs.module.scss';
import IRenevue, { IDeal } from 'pages/Deals/Deals.model';
import { getMonthInGenitive } from 'shared/utils/timeUtils';
import GraphRenevue from '../GraphRenevue/GraphRenevue';
import GraphDeals from '../GraphDeals/GraphDeals';

interface IGraphs {
  setFilterGraphsCalls: Dispatch<React.SetStateAction<'3' | '6' | '9'>>;
  filterGraphsCalls: '3' | '6' | '9';
  dataRevenue: IRenevue[] | null;
  dataDeals: IDeal[] | null;
}

const Graphs: FC<IGraphs> = memo(
  ({ setFilterGraphsCalls, filterGraphsCalls, dataRevenue, dataDeals }) => {
    const hadleChosePeriod = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterGraphsCalls(e.target.value as '3' | '6' | '9');
      },
      [setFilterGraphsCalls],
    );

    return (
      <div className={s.main}>
        <div className={s.line}>
          <Tabs
            typeTabs={tabsTableCalls}
            isCheckedTab={filterGraphsCalls}
            onChange={hadleChosePeriod}
          />
          {dataRevenue && (
            <div className={s.period}>
              <span
                className={s.periodMonth}
              >{`1 ${getMonthInGenitive(dataRevenue[0].month || '')}`}</span>
              <span>{`${dataRevenue[0].year}`}</span>
              <span
                className={s.periodMonth}
              >{`- 1 ${getMonthInGenitive(dataRevenue?.at(-1)?.month || '')}`}</span>
              <span>{`${dataRevenue?.at(-1)?.year}`}</span>
            </div>
          )}
        </div>
        <div className={s.title}>Выручка</div>
        <GraphRenevue dataRevenue={dataRevenue} />
        <div className={s.lineSeparator} />
        <div className={s.title}>Заказы</div>
        <GraphDeals dataDeals={dataDeals} />
      </div>
    );
  },
);

export default Graphs;
