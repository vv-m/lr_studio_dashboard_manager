import React, { FC, memo } from 'react';
import Icons from 'shared/components/Icons/Icons';
import { IDialogues } from 'pages/Statistics/Statistics.model';

import s from './Messengers.module.scss';
import Tooltip from 'shared/components/Tooltip/Tooltip';

interface IMessengers {
  dataDialogues: IDialogues | null;
}

const Messengers: FC<IMessengers> = memo(({ dataDialogues }) => {
  return (
    <div>
      <div className={s.messengers}>
        <div className={s.titleBlock}>
          <span>Мессенджеры</span>
        </div>
        <div className={s.messengersAll}>
          <span className={s.messengersAllTime}>{dataDialogues?.total}</span>
          <span className={s.messengersAllDescrip}>Тот ещё, говорун!</span>
        </div>
        <div className={s.typesMessengers}>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Первичный ответ</span>
              <Tooltip isShown isBackGrey placement="left" text="Информация о фывфы" />
            </div>
            <span className={s.meaning}>{dataDialogues?.missed_first_responses}</span>
          </div>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Вторичный ответ</span>
              <Tooltip isShown isBackGrey placement="top" text="Информация о премии" />
            </div>
            <span className={s.meaning}>{dataDialogues?.missed_follow_up_responses}</span>
          </div>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Без ответа</span>
              <Tooltip isShown isBackGrey placement="right" text="Информация о премии" />
            </div>
            <span className={s.meaning}>{dataDialogues?.unanswered}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Messengers;
