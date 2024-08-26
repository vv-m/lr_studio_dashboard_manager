import React, { FC, memo, useMemo, useEffect, useState } from 'react';
import Icons from 'shared/components/Icons/Icons';
import cn from 'classnames';
import ReactDOM from 'react-dom';
import s from './InfoBlock.module.scss';
import car from 'static/images/car.png';

interface IInfoBlock {
  done: number;
  goal: number;
  growth: number;
  title: string;
  description: string;
  сurrency?: boolean;
  levelNext?: number;
  bonusLevel?: number;
  percent?: number;
  nextPercent?: number;
}

const InfoBlock: FC<IInfoBlock> = memo(
  ({
    done,
    goal,
    growth,
    title,
    description,
    сurrency,
    levelNext,
    bonusLevel,
    percent,
    nextPercent,
  }) => {
    const progress = useMemo(() => (done / goal) * 100, [done, goal]);
    const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });

    const progressBarRef = React.useRef<HTMLDivElement>(null);

    const a = 100 - progress;

    useEffect(() => {
      if (done > goal && progressBarRef.current) {
        const progressBarRect = progressBarRef.current.getBoundingClientRect();
        setIconPosition({
          top: progressBarRect.top + window.scrollY,
          left: progressBarRect.left + window.scrollX + progressBarRect.width,
        });
      }
    }, [done, goal]);

    return (
      <div className={s.blockWrapper}>
        <div className={s.upperBlock}>
          <div className={s.name}>
            <span>{title}</span>
            {bonusLevel && <span>{bonusLevel}</span>}
            {levelNext && <span className={s.totalLevel}> / {levelNext}</span>}
            <Icons name="Info" />
          </div>
          {!levelNext && (
            <div className={cn(s.status, growth > 0 ? s.statusHeight : s.statusFall)}>
              <Icons name={growth > 0 ? 'Height' : 'Fall'} />
              <span>
                {growth > 0 ? '+' : ''}
                {growth}%
              </span>
            </div>
          )}
        </div>
        <div className={s.bottomBlock}>
          <div className={s.result}>
            <span className={s.resultDone}>
              {done.toLocaleString('ru-RU')}
              {сurrency ? ' ₽' : ''}
            </span>
            <span className={s.resultDoneNo}>
              / {goal > 1000000 ? `${goal / 1000000} млн` : goal.toLocaleString('ru-RU')}
            </span>
          </div>
          <div className={cn(s.resultDescrip, { [s.resultDescripLevel]: levelNext })}>
            {description}
          </div>
          {!levelNext && (
            <div className={s.progressbar} ref={progressBarRef}>
              <div
                className={s.progress}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
              {done > goal &&
                ReactDOM.createPortal(
                  <div
                    className={s.doneIcon}
                    style={{
                      position: 'absolute',
                      top: `${iconPosition.top + 2.5}px`,
                      left: `${iconPosition.left}px`,
                      transform: 'translate(-50%, -50%)',
                      background: '#FFFFFF',
                      borderRadius: '100px',
                    }}
                  >
                    <Icons name="Done" />
                  </div>,
                  document.body,
                )}
            </div>
          )}
          {levelNext && (
            <div className={s.progressbarLevel}>
              <div className={s.percent}>{percent}%</div>
              <div className={s.progressLevel}>
                <div
                  className={s.done}
                  style={{ width: `${Math.min(progress, 100)}%` }}
                ></div>
                <img className={s.car} src={car}></img>
                <div className={s.noDone} style={{ width: `${Math.min(a, 100)}%` }}></div>
              </div>
              <div className={cn(s.percent, s.percentGray)}>{nextPercent}%</div>
            </div>
          )}
        </div>
      </div>
    );
  },
);

export default InfoBlock;
