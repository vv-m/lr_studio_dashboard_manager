import React, { FC, memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import s from './Calls.module.scss';
import Graph from './components/Graph/Graph';
import TableCalls from './components/TableCalls/TableCalls';
import useCalls from './useCalls';
import Diagram from './components/Diagram/Diagram';

const Calls: FC = memo(() => {
  const { dataCalls, setFilterGraphCalls, filterGraphCalls } = useCalls();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={s.main}
      >
        <div className={s.topContainer}>
          <div className={s.topContainerGraph}>
            <Graph
              setFilterGraphCalls={setFilterGraphCalls}
              filterGraphCalls={filterGraphCalls}
              dataCalls={dataCalls}
            />
          </div>
          <div className={s.topContainerDiagram}>
            <Diagram dataCalls={dataCalls} />
          </div>
        </div>
        <div className={s.bottomContainer}>
          <TableCalls periods={dataCalls?.periods} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

export default Calls;
