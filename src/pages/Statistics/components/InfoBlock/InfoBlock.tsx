import React, { FC, memo, useMemo } from 'react';
import Icons from 'shared/components/Icons/Icons';
import cn from 'classnames';
import s from './InfoBlock.module.scss';
import car from 'static/images/car.png';
import Tooltip from 'shared/components/Tooltip/Tooltip';

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
  textTooltip: string;
  placement: 'top' | 'right' | 'bottom' | 'left';
  isBackGrey: boolean;
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
    textTooltip,
    placement,
    isBackGrey,
  }) => {
    const progress = useMemo(() => (done / goal) * 100, [done, goal]);

    const progressBarRef = React.useRef<HTMLDivElement>(null);

    return (
      <div className={s.blockWrapper}>
        <div className={s.upperBlock}>
          <div className={s.name}>
            <span>{title}</span>
            {bonusLevel && <span>{bonusLevel}</span>}
            {levelNext && <span className={s.totalLevel}> / {levelNext}</span>}
            <Tooltip
              isShown
              text={textTooltip}
              placement={placement}
              isBackGrey={isBackGrey}
            ></Tooltip>
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
            <>
              <div className={s.progressbar} ref={progressBarRef}>
                <div
                  className={s.progress}
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              {done > goal && (
                <div className={s.doneIcon}>
                  <Icons name="Done" />
                </div>
              )}
            </>
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
                <div
                  className={s.noDone}
                  style={{ width: `${Math.min(100 - progress, 100)}%` }}
                ></div>
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
