import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import { IInfoVacation } from 'store/VacationSlice/VacationSlice.model';
import cn from 'classnames';
import s from './OneVacation.module.scss';
import Tooltip from 'shared/components/Tooltip/Tooltip';
import Icons from 'shared/components/Icons/Icons';
import { formatDateToDayMonth } from 'shared/utils/timeUtils';
import ActionPanel from '../ActionPanel/ActionPanel';

interface IOneVacation {
  vacation: IInfoVacation;
  index: number;
}

const OneVacation: FC<IOneVacation> = memo(({ vacation, index }) => {
  const [isViewActionPanel, setIsViewActionPanel] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsViewActionPanel(false);
    }
  };

  useEffect(() => {
    if (isViewActionPanel) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isViewActionPanel]);

  const status = useMemo(() => {
    if (vacation.status === 'pending') {
      return {
        text: 'На рассмотрении',
      };
    } else if (vacation.status === 'rejected') {
      return {
        text: 'Отказ',
        color: '',
      };
    } else if (vacation.status === 'approved') {
      return {
        text: 'Согласован',
      };
    } else if (vacation.status === 'used') {
      return {
        text: 'Использован',
      };
    }
  }, [vacation]);

  return (
    <div className={cn(s.main, { [s.mainGray]: index % 2 === 0 })}>
      <div className={s.type}>
        {vacation.type === 'paid' ? 'Оплачиваемый отпуск' : 'Неоплачиваемый отпуск'}
      </div>
      <div className={s.dateApplication}>
        {formatDateToDayMonth(vacation.request_date, true)}
      </div>
      <div className={s.date}>
        {formatDateToDayMonth(vacation.start_date, true)}{' '}
        {vacation.end_date ? `- ${formatDateToDayMonth(vacation.end_date, true)}` : ''}
      </div>
      <div className={s.period}>{vacation.days_count}</div>
      <div className={cn(s.status, s[vacation.status])}>
        {status?.text}
        <Tooltip
          isShown
          placement="top"
          text="Какой то текст для каждого отпуска"
        ></Tooltip>
      </div>
      <div
        className={s.active}
        onClick={() => {
          setIsViewActionPanel((prev) => !prev);
        }}
      >
        <div className={cn(s.wrapperIcon, { [s.open]: isViewActionPanel })}>
          <Icons name="ThreeDots" />
        </div>

        {isViewActionPanel && (
          <div ref={wrapperRef} className={s.activePanel}>
            <ActionPanel />
          </div>
        )}
      </div>
    </div>
  );
});

export default OneVacation;
