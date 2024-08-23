import React, { memo } from 'react';
import Icons from 'shared/components/Icons/Icons';

import s from './Messengers.module.scss';

const Messengers = memo(() => {
  return (
    <div>
      <div className={s.messengers}>
        <div className={s.titleBlock}>
          <span>Мессенджеры</span>
          <Icons name="Info" />
        </div>
        <div className={s.messengersAll}>
          <span className={s.messengersAllTime}>890</span>
          <span className={s.messengersAllDescrip}>Тот ещё, говорун!</span>
        </div>
        <div className={s.typesMessengers}>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Первичный ответ</span>
              <Icons name="Info" />
            </div>
            <span className={s.meaning}>2</span>
          </div>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Вторичный ответ</span>
              <Icons name="Info" />
            </div>
            <span className={s.meaning}>197</span>
          </div>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Без ответа</span>
              <Icons name="Info" />
            </div>
            <span className={s.meaning}>46</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Messengers;
