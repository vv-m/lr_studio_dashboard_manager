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
              <Tooltip
                isShown
                isBackGrey
                placement="left"
                text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
              />
            </div>
            <span className={s.meaning}>{dataDialogues?.missed_first_responses}</span>
          </div>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Вторичный ответ</span>
              <Tooltip
                isShown
                isBackGrey
                placement="top"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
              />
            </div>
            <span className={s.meaning}>{dataDialogues?.missed_follow_up_responses}</span>
          </div>
          <div className={s.typeMessenger}>
            <div className={s.typeMessengerName}>
              <span>Без ответа</span>
              <Tooltip
                isShown
                isBackGrey
                placement="right"
                text="Информация о сообщения без ответа"
              />
            </div>
            <span className={s.meaning}>{dataDialogues?.unanswered}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Messengers;
