import React, { FC, memo } from 'react';
import Icons from 'shared/components/Icons/Icons';
import { IDialogues } from 'pages/Svodka/Svodka.model';

import s from './Messengers.module.scss';

interface IMessengers {
  dataDialogues: IDialogues | null;
}

const Messengers: FC<IMessengers> = memo(({ dataDialogues }) => {
  return (
    <div>
      <div className={s.messengers}>
        <div className={s.titleBlock}>
          <span>Мессенджеры</span>
          <Icons name="Info" />
        </div>
        <div className={s.messengersAll}>
          <span className={s.messengersAllTime}>{dataDialogues?.total}</span>
          <span className={s.messengersAllDescrip}>Тот ещё, говорун!</span>
        </div>
        <div className={s.typesMessengers}>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Первичный ответ</span>
              <Icons name="Info" />
            </div>
            <span className={s.meaning}>{dataDialogues?.missed_first_responses}</span>
          </div>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Вторичный ответ</span>
              <Icons name="Info" />
            </div>
            <span className={s.meaning}>{dataDialogues?.missed_follow_up_responses}</span>
          </div>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Без ответа</span>
              <Icons name="Info" />
            </div>
            <span className={s.meaning}>{dataDialogues?.unanswered}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Messengers;
