import React, { FC, memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useDeals from './useDeals';
import Graphs from './components/Graphs/Graphs';
import Conversion from 'shared/components/Conversion/Conversion';
import InfoBlock from 'pages/Statistics/components/InfoBlock/InfoBlock';
import Table from './components/Table/Table';

import s from './Deals.module.scss';

const Deals: FC = memo(() => {
  const {
    filterGraphsCalls,
    setFilterGraphsCalls,
    dataDeals,
    dataRevenue,
    dataManager,
    typeFilter,
    setTypeFilter,
    listDeal,
    setNumberPage,
    numberPage,
    totalPage,
    allTotalDeals,
  } = useDeals();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={s.main}
      >
        <div className={s.leftContainer}>
          <div className={s.leftContainerGraph}>
            <Graphs
              setFilterGraphsCalls={setFilterGraphsCalls}
              filterGraphsCalls={filterGraphsCalls}
              dataRevenue={dataRevenue}
              dataDeals={dataDeals}
            />
          </div>
          {listDeal && (
            <Table
              dataDeals={listDeal}
              setTypeFilter={setTypeFilter}
              typeFilter={typeFilter}
              setNumberPage={setNumberPage}
              numberPage={numberPage}
              totalPage={totalPage}
              allTotalDeals={allTotalDeals}
            />
          )}
        </div>
        <div className={s.rightContainer}>
          <Conversion dataManager={dataManager} isDeals />
          {dataManager && (
            <>
              <InfoBlock
                done={dataManager?.qty_deals}
                goal={dataManager?.target_qty_deals}
                growth={dataManager?.compaired_parcent_qty_deals}
                title="Cделки"
                description="Кол-во успешных сделок"
                textTooltip="Какой то текст про сделки"
                placement="bottom"
                isBackGrey
              />
              <InfoBlock
                done={dataManager?.sum_deals}
                goal={dataManager?.target_sum_deals}
                growth={dataManager?.compaired_parcent_sum_deals}
                title="Выручка"
                description={
                  dataManager?.sum_deals > dataManager?.target_sum_deals
                    ? 'План выполнен'
                    : ''
                }
                сurrency
                textTooltip="Какой то текст про выручку"
                placement="bottom"
                isBackGrey
              />
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

export default Deals;
