import { memo } from 'react';
import s from './Schedule.module.scss';
import Icons from 'shared/components/Icons/Icons';
import useSchedule from './useSchedule';
import cn from 'classnames';

const getClassForStatus = (status: string) => {
  switch (status) {
    case 'Working':
      return s.working;
    case 'Weekend':
      return s.weekend;
    case 'Vacation':
      return s.vacation;
    default:
      return '';
  }
};

const getTextForStatus = (status: string, currentStreak: number) => {
  if (currentStreak >= 3) {
    switch (status) {
      case 'Working':
        return <span className={s.workingText}>Рабочий</span>;
      case 'Weekend':
        return <span className={s.weekendText}>Выходной</span>;
      case 'Vacation':
        return (
          <span className={s.vacationText}>
            Отпуск <span className={s.emoji}>🌴</span>
          </span>
        );
      default:
        return '';
    }
  } else if (currentStreak === 1) {
    switch (status) {
      case 'Working':
        return '';
      case 'Weekend':
        return <span className={s.emoji}>😴</span>;
      case 'Vacation':
        return <span className={s.emoji}>🌴</span>;
      default:
        return '';
    }
  } else {
    switch (status) {
      case 'Working':
        return <span className={s.workingText}>Раб...</span>;
      case 'Weekend':
        return <span className={s.weekendText}>Выхо...</span>;
      case 'Vacation':
        return (
          <span className={s.vacationText}>
            Отпуск <span>🌴</span>
          </span>
        );
      default:
        return <span>Отп...</span>;
    }
  }
};

const Schedule = memo(() => {
  const { handlePrevMonth, month, year, handleNextMonth, schedule } = useSchedule();
  return (
    <div className={s.main}>
      <div className={s.header}>
        <div className={s.headerDate}>
          <div className={s.iconWrapper} onClick={handlePrevMonth}>
            <Icons name="LeftLine" />
          </div>
          <div>
            <span>{month}</span> <span className={s.year}>{year}</span>
          </div>
          <div className={s.iconWrapper} onClick={handleNextMonth}>
            <Icons name="RightLine" />
          </div>
        </div>
      </div>
      <div className={s.wrapperSchedule}>
        {!schedule && (
          <div className={s.notification}>
            График не составлен или нет данных. Обратись к старшему менеджеру.
          </div>
        )}
        {schedule && (
          <>
            <div
              className={cn({
                [s.scheduleGrid31]: schedule[0].schedule.length === 31,
                [s.scheduleGrid30]: schedule[0].schedule.length === 30,
                [s.scheduleGrid28]: schedule[0].schedule.length === 28,
              })}
            >
              <div className={s.gridHeader}>
                <div className={s.titleCoworker}>Сотрудник</div>
                {schedule[0].schedule.map((day) => (
                  <div
                    className={cn(s.day, {
                      [s.weekendDay]: day.day_name === 'вс' || day.day_name === 'сб',
                    })}
                    key={day.date}
                  >
                    <div>{day.date.split('-')[2]}</div>
                    <div>{day.day_name}</div>
                  </div>
                ))}
              </div>
              {schedule.map((employee, employeeIndex) => (
                <div className={s.gridRow} key={employee.name}>
                  <div
                    className={cn(s.nameCoworker, {
                      [s.lastRow]: employeeIndex === schedule.length - 1,
                    })}
                  >
                    {employee.name}
                  </div>
                  {(() => {
                    const combinedCells = [];
                    let currentStreak = 1;
                    for (
                      let dayIndex = 0;
                      dayIndex < employee.schedule.length;
                      dayIndex++
                    ) {
                      const currentDay = employee.schedule[dayIndex];
                      const nextDay = employee.schedule[dayIndex + 1];
                      if (nextDay && currentDay.status === nextDay.status) {
                        currentStreak++;
                      } else {
                        combinedCells.push(
                          <div
                            key={currentDay.date}
                            className={cn(s.cellDay, {
                              [s.lastRow]: employeeIndex === schedule.length - 1,
                              [s.lastCell]:
                                employeeIndex === schedule.length - 1 &&
                                dayIndex === employee.schedule.length - 1,
                              [s.lastCellBorder]:
                                dayIndex === employee.schedule.length - 1,
                            })}
                            style={{ gridColumn: `span ${currentStreak}` }}
                          >
                            <div
                              className={cn(
                                s.innerCell,
                                getClassForStatus(currentDay.status),
                              )}
                            >
                              <span className="textOverlay">
                                {getTextForStatus(currentDay.status, currentStreak)}
                              </span>
                            </div>
                          </div>,
                        );
                        currentStreak = 1;
                      }
                    }
                    return combinedCells;
                  })()}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
});

export default Schedule;
