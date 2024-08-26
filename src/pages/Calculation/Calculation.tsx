import React, { memo, useState } from 'react';
import Calculator from './components/Calculator/Calculator';
import Result from './components/Result/Result';

import s from './Calculation.module.scss';
import DEFAULT_RESULT, { IResults } from './Calculation.model';

const Calculation = memo(() => {
  const [flagCalculation, setFlagCalculation] = useState<boolean>(false);

  const [result, setResult] = useState<IResults>(DEFAULT_RESULT);

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  return (
    <div className={s.main}>
      <div className={s.calculator}>
        <Calculator
          flagCalculation={flagCalculation}
          setFlagCalculation={setFlagCalculation}
          setResult={setResult}
          setIsDisabled={setIsDisabled}
        />
      </div>
      <div className={s.result}>
        <Result
          setFlagCalculation={setFlagCalculation}
          result={result}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
});

export default Calculation;
