import { FC, memo } from 'react';
import s from './TableCalls.module.scss';
import cn from 'classnames';
import Icons from 'shared/components/Icons/Icons';

interface ITableCalls {
  periods?: {
    incoming: number;
    missed: number;
    month: string;
    outgoing: number;
    total: number;
    year: number;
  }[];
}

const TableCalls: FC<ITableCalls> = memo(({ periods }) => {
  return (
    <div className={s.table}>
      <div className={s.header}>
        <div className={s.period}>Период</div>
        <div className={s.type}>Всего звонков</div>
        <div className={s.type}>
          <Icons name="Inbox" />
          <span>Входящие</span>
        </div>
        <div className={s.type}>
          <Icons name="RedCross" />
          <span>Пропущенные</span>
        </div>
        <div className={s.type}>
          <Icons name="Outbox" />
          <span>Исходящие</span>
        </div>
      </div>
      <div className={s.result}>
        <div className={s.period}>За весь период</div>
        <div className={s.type}>{periods?.reduce((acc, el) => acc + el.total, 0)}</div>
        <div className={s.type}>
          <span>{periods?.reduce((acc, el) => acc + el.incoming, 0)}</span>
        </div>
        <div className={cn(s.type, s.missed)}>
          <span>{periods?.reduce((acc, el) => acc + el.missed, 0)}</span>
        </div>
        <div className={s.type}>
          <span>{periods?.reduce((acc, el) => acc + el.outgoing, 0)}</span>
        </div>
      </div>
      <div className={s.list}>
        {periods?.map((onePeriod, index) => (
          <div
            key={onePeriod.total + onePeriod.missed}
            className={cn(s.onePeriod, { [s.whiteBack]: index % 2 !== 1 })}
          >
            <div className={s.period}>{`${onePeriod.month}, ${onePeriod.year}`}</div>
            <div className={s.type}>{onePeriod.total}</div>
            <div className={s.type}>{onePeriod.incoming}</div>
            <div className={cn(s.type, s.missed)}>{onePeriod.missed}</div>
            <div className={s.type}>{onePeriod.outgoing}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TableCalls;
