import React, { FC, memo, useCallback } from 'react';
import { IResults } from 'pages/Calculation/Calculation.model';
import train from 'static/images/train.png';
import avia from 'static/images/avia.png';
import car from 'static/images/car.png';
import cn from 'classnames';

import s from './Result.module.scss';

interface IResult {
  setFlagCalculation: React.Dispatch<React.SetStateAction<boolean>>;
  result: IResults;
  isDisabled: boolean;
}

const Result: FC<IResult> = memo(({ setFlagCalculation, result, isDisabled }) => {
  const handlerСalculateСost = useCallback(() => {
    setFlagCalculation(true);
  }, []);

  return (
    <div className={s.main}>
      <div className={s.title}>Результат</div>
      <div className={s.results}>
        <div className={s.oneResult}>
          <div className={s.leftBlock}>
            <div className={s.icon}>
              <img src={train} alt="Поезд"></img>
            </div>
            <div className={s.description}>
              <span>ЖД</span>
              <span>40-60 дней</span>
            </div>
          </div>
          <div className={s.value}>{result.train ? `${result.train} ₽` : '-'}</div>
        </div>
        <div className={s.oneResult}>
          <div className={s.leftBlock}>
            <div className={s.icon}>
              <img src={car} alt="Авто"></img>
            </div>
            <div className={s.description}>
              <span>Авто</span>
              <span>20-40 дней</span>
            </div>
          </div>
          <div className={s.value}>{result.avto ? `${result.avto} ₽` : '-'}</div>
        </div>
        <div className={s.oneResult}>
          <div className={s.leftBlock}>
            <div className={s.icon}>
              <img src={avia} alt="Самолет"></img>
            </div>
            <div className={s.description}>
              <span>Авиа</span>
              <span>42-17 дней</span>
            </div>
          </div>
          <div className={s.value}>{result.avia ? `${result.avia} ₽` : '-'}</div>
        </div>
      </div>
      <div>
        <button
          disabled={isDisabled}
          onClick={handlerСalculateСost}
          className={cn(s.button, { [s.disabled]: isDisabled })}
        >
          Рассчитать
        </button>
      </div>
    </div>
  );
});

export default Result;
