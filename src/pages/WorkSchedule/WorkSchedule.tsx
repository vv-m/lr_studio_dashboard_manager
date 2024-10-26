import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, memo } from 'react';

import s from './WorkSchedule.module.scss';
import Schedule from './components/Schedule/Schedule';
import InfoVacation from './components/InfoVacation/InfoVacation';
import useInfoVacation from './components/InfoVacation/useInfoVacation';
import CreatingApplication from './components/CreatingApplication/CreatingApplication';
import ListVacation from './components/ListVacation/ListVacation';

const WorkSchedule: FC = memo(() => {
  const { latestUsedVacation, nearestApprovedVacation, availableDays } =
    useInfoVacation();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={s.main}
      >
        <Schedule />
        <InfoVacation
          latestUsedVacation={latestUsedVacation}
          nearestApprovedVacation={nearestApprovedVacation}
          availableDays={availableDays}
        />
        <CreatingApplication />
        <ListVacation />
      </motion.div>
    </AnimatePresence>
  );
});

export default WorkSchedule;
