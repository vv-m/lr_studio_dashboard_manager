import React, { FC, memo } from 'react';
import Icons from 'shared/components/Icons/Icons';
import cn from 'classnames';

import s from './Calls.module.scss';
import { ICalls } from 'pages/Statistics/Statistics.model';

interface ICall {
  dataCalls: ICalls | null;
}

const Calls: FC<ICall> = memo(({ dataCalls }) => {
  return (
    <div className={s.calls}>
      <div className={s.titleBlock}>
        <span>Звонки</span>
      </div>
      <div className={s.callsAll}>
        <span className={s.callsAllTime}>{dataCalls?.total}</span>
        <span className={s.callsAllDescrip}>
          Длительность ≈ {dataCalls?.duration.split(':')[0]} часов{' '}
          {dataCalls?.duration.split(':')[1]} мин
        </span>
      </div>
      <div className={s.typesCalls}>
        <div className={s.typeCall}>
          <div className={s.typeCallName}>
            <Icons name="RedCross" />
            <span>Пропущенные</span>
          </div>
          <span className={cn(s.meaning, s.meaningRed)}>{dataCalls?.missed}</span>
        </div>
        <div className={s.typeCall}>
          <div className={s.typeCallName}>
            <Icons name="Outbox" />
            <span>Исходящие</span>
          </div>
          <span className={s.meaning}>{dataCalls?.outgoing}</span>
        </div>
        <div className={s.typeCall}>
          <div className={s.typeCallName}>
            <Icons name="Inbox" />
            <span>Входящие</span>
          </div>
          <span className={s.meaning}>{dataCalls?.incoming}</span>
        </div>
      </div>
    </div>
  );
});

export default Calls;
