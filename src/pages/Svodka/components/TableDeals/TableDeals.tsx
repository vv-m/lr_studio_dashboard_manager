import { TSvodkaDeals } from 'pages/Svodka/Svodka.model';
import React, { FC, memo, useCallback } from 'react';
import tabsDealsWarning from 'shared/constants/TabsDealsWarnig';
import Tabs from 'shared/components/Tabs/Tabs';

import s from './TableDeals.module.scss';

interface ITableDeals {
  dataDeals: TSvodkaDeals | null;
  setTypeFilter: React.Dispatch<React.SetStateAction<'all' | 'not_shipped' | 'not_paid'>>;
  typeFilter: 'all' | 'not_shipped' | 'not_paid';
}

const TableDeals: FC<ITableDeals> = memo(({ dataDeals, setTypeFilter, typeFilter }) => {
  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeFilter(e.target.value as 'all' | 'not_shipped' | 'not_paid');
  }, []);

  return (
    <div className={s.table}>
      <div>
        <Tabs
          typeTabs={tabsDealsWarning}
          onChange={handleFilterChange}
          isCheckedTab={typeFilter}
        ></Tabs>
        <div>
          <span>Сумма</span>
        </div>
      </div>
    </div>
  );
});

export default TableDeals;
