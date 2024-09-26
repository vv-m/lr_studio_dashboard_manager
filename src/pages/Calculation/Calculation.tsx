import React, { memo, useState } from 'react';
import Calculator from './components/Calculator/Calculator';
import Result from './components/Result/Result';
import DEFAULT_RESULT, { IResults } from './Calculation.model';
import { AnimatePresence, motion } from 'framer-motion';

import s from './Calculation.module.scss';

const Calculation = memo(() => {
  const [flagCalculation, setFlagCalculation] = useState<boolean>(false);

  const [result, setResult] = useState<IResults>(DEFAULT_RESULT);

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  return (
    <AnimatePresence>
      <div className={s.main}>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={s.calculator}
        >
          <Calculator
            flagCalculation={flagCalculation}
            setFlagCalculation={setFlagCalculation}
            setResult={setResult}
            setIsDisabled={setIsDisabled}
          />
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={s.result}
        >
          <Result
            setFlagCalculation={setFlagCalculation}
            result={result}
            isDisabled={isDisabled}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
});

export default Calculation;
