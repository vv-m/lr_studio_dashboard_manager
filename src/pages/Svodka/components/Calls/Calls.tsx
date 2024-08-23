import React, { FC, memo } from 'react';
import Icons from 'shared/components/Icons/Icons';
import cn from 'classnames';

import s from './Calls.module.scss';

interface ICalls {}

const Calls: FC<ICalls> = memo(() => {
  return (
    <div className={s.calls}>
      <div className={s.titleBlock}>
        <span>Звоники</span>
        <Icons name="Info" />
      </div>
      <div className={s.callsAll}>
        <span className={s.callsAllTime}>245</span>
        <span className={s.callsAllDescrip}>Длительность ≈ 20 часов 40 мин</span>
      </div>
      <div className={s.typesCalls}>
        <div className={s.typeCall}>
          <div className={s.typeCallName}>
            <Icons name="RedCross" />
            <span>Пропущенные</span>
          </div>
          <span className={cn(s.meaning, s.meaningRed)}>2</span>
        </div>
        <div className={s.typeCall}>
          <div className={s.typeCallName}>
            <Icons name="Outbox" />
            <span>Исходящие</span>
          </div>
          <span className={s.meaning}>197</span>
        </div>
        <div className={s.typeCall}>
          <div className={s.typeCallName}>
            <Icons name="Inbox" />
            <span>Входящие</span>
          </div>
          <span className={s.meaning}>46</span>
        </div>
      </div>
    </div>
  );
});

export default Calls;
