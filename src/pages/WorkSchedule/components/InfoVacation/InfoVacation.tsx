import React, { FC, memo } from 'react';
import s from './InfoVacation.module.scss';
import { IVacation } from 'shared/http/useInfoVacationHttpController';
import Tooltip from 'shared/components/Tooltip/Tooltip';
import { formatDateToDayMonth } from 'shared/utils/timeUtils';

interface IInfoVacation {
  latestUsedVacation: IVacation | null;
  nearestApprovedVacation: IVacation | null;
  availableDays: {
    employee_id: number;
    available_days: number;
  } | null;
}

const InfoVacation: FC<IInfoVacation> = memo(
  ({ latestUsedVacation, nearestApprovedVacation, availableDays }) => {
    return (
      <div className={s.main}>
        <div className={s.wrapperBlock}>
          <div className={s.title}>
            <span>Ближайший отпуск</span>
            <Tooltip
              isShown
              isBackGrey
              placement="top"
              text="Информация о ближашем отпуске"
            />
          </div>
          {nearestApprovedVacation && (
            <>
              <div className={s.date}>
                {`${formatDateToDayMonth(nearestApprovedVacation.start_date)}-${formatDateToDayMonth(nearestApprovedVacation.end_date)}`}
              </div>
              <div className={s.duration}>{nearestApprovedVacation.days_count} дней</div>
            </>
          )}
          {!nearestApprovedVacation && (
            <div className={s.duration}>Отпуск не запланирован</div>
          )}
        </div>
        <div className={s.wrapperBlock}>
          <div className={s.title}>
            <span>Предыдущий отпуск</span>
            <Tooltip
              isShown
              isBackGrey
              placement="top"
              text="Информация о предыдущем отпуск"
            />
          </div>
          {latestUsedVacation && (
            <>
              <div className={s.date}>
                {`${formatDateToDayMonth(latestUsedVacation.start_date)}-${formatDateToDayMonth(latestUsedVacation.end_date)}`}
              </div>
              <div className={s.duration}>{latestUsedVacation.days_count} дней</div>
            </>
          )}
          {!latestUsedVacation && <div className={s.duration}>Отпуска не было</div>}
        </div>
        <div className={s.wrapperBlock}>
          <div className={s.title}>
            <span>Доступные отпускные дни</span>
            <Tooltip
              isShown
              isBackGrey
              placement="top"
              text="Информация о доступных отпускных днях"
            />
          </div>
          {availableDays && (
            <>
              <div className={s.date}>{`${availableDays.available_days} дней`}</div>
              <div className={s.duration}>Оплачиваемого отпуска</div>
            </>
          )}
          {!availableDays?.available_days && (
            <div className={s.duration}>Отдыхать еще рано</div>
          )}
        </div>
      </div>
    );
  },
);

export default InfoVacation;
