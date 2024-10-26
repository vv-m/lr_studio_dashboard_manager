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

const getTextForStatus = (status: string) => {
  switch (status) {
    case 'Working':
      return 'Раб';
    case 'Weekend':
      return 'Вых';
    case 'Vacation':
      return 'Отп';
    default:
      return '';
  }
};

const getIconForStatus = (status: string) => {
  switch (status) {
    case 'Vacation':
      return <Icons name="PalmTree" />;
    case 'Weekend':
      return <Icons name="SmileyFace" />;
    default:
      return null;
  }
};

const Schedule = memo(() => {
  const { handlePrevMonth, month, year, handleNextMonth, schedule } = useSchedule();
  console.log(schedule);

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
            График не составлен или нет данных.Обратись к старшему менеджеру.
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
                  {employee.schedule.map((day, dayIndex) => {
                    return (
                      <div
                        key={day.date}
                        className={cn(s.cellDay, getClassForStatus(day.status), {
                          [s.weekendDay]: day.day_name === 'вс' || day.day_name === 'сб',
                          [s.lastRow]: employeeIndex === schedule.length - 1,
                          [s.lastCell]:
                            employeeIndex === schedule.length - 1 &&
                            dayIndex === employee.schedule.length - 1,
                        })}
                      ></div>
                    );
                  })}
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
