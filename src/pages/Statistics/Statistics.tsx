import { memo, useEffect, useRef } from 'react';
import InfoBlock from './components/InfoBlock/InfoBlock';
import Icons from 'shared/components/Icons/Icons';
import cn from 'classnames';
import money from 'static/images/money.png';
import { SemiCircleProgress } from 'react-semicircle-progressbar';
import Calls from './components/Calls/Calls';
import Messengers from './components/Messengers/Messengers';
import TableDeals from './components/TableDeals/TableDeals';
import { AnimatePresence, motion } from 'framer-motion';

import s from './Statistics.module.scss';
import useStatistics from './hooks/useStatistics';

const Statistics = memo(() => {
  const {
    dataManager,
    dataDepartment,
    dataDeals,
    setTypeFilter,
    typeFilter,
    dataDialogues,
    dataCalls,
  } = useStatistics();

  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dataManager?.conversion_rate) return;
    const radius = 50 - 10 / 2;
    const circumference = 1 * Math.PI * radius;
    const strokeDashoffset =
      circumference - ((dataManager?.conversion_rate - 10) / 100) * circumference;
    if (svgRef.current) {
      const svgElement = svgRef.current.querySelector('svg');
      const textElement = svgRef.current.querySelector('text');
      if (svgElement) {
        svgElement.setAttribute('viewBox', '0 0 100 70');
        textElement?.setAttribute('x', '50');
        textElement?.setAttribute('y', '60');
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const linearGradient = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'linearGradient',
        );
        linearGradient.setAttribute('id', 'gradientStroke');
        linearGradient.setAttribute('x1', '0%');
        linearGradient.setAttribute('y1', '0%');
        linearGradient.setAttribute('x2', '100%');
        linearGradient.setAttribute('y2', '0%');
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#B6FF92');
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#36D000');
        linearGradient.appendChild(stop1);
        linearGradient.appendChild(stop2);
        defs.appendChild(linearGradient);
        svgElement.prepend(defs);
        const pathElements = svgElement.querySelectorAll('path');
        if (pathElements.length > 1) {
          const secondPathElement = pathElements[1];
          secondPathElement.setAttribute(
            'style',
            `transition: stroke-dashoffset 0.35s ease 0s; stroke-linecap: round; stroke-dasharray: 155.509; stroke-dashoffset: ${strokeDashoffset}; stroke-width: 10`,
          );
          secondPathElement.setAttribute('stroke', 'url(#gradientStroke)');
        }
      }
    }
  }, [dataManager]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={s.main}
      >
        <div className={s.infoBlock}>
          <div className={s.title}>Мои успехи</div>
          <div className={s.blocks}>
            {dataManager && (
              <>
                <InfoBlock
                  done={dataManager?.qty_deals}
                  goal={dataManager?.target_qty_deals}
                  growth={dataManager?.compaired_parcent_qty_deals}
                  title="Cделки"
                  description="Кол-во успешных сделок"
                />
                <InfoBlock
                  done={dataManager?.sum_deals}
                  goal={dataManager?.target_sum_deals}
                  growth={dataManager?.compaired_parcent_sum_deals}
                  title="Выручка"
                  description={
                    dataManager?.sum_deals > dataManager?.target_sum_deals
                      ? 'План выполнен'
                      : ''
                  }
                  сurrency
                />
                <div className={s.prize}>
                  <div className={s.upperBlock}>
                    <div className={s.name}>
                      <span>Премия</span>
                      <Icons name="Info" />
                    </div>
                    <div
                      className={cn(
                        s.status,
                        dataManager.compaired_parcent_bonus > 0
                          ? s.statusHeight
                          : s.statusFall,
                      )}
                    >
                      <Icons
                        name={dataManager.compaired_parcent_bonus > 0 ? 'Height' : 'Fall'}
                      />
                      <span>
                        {dataManager.compaired_parcent_bonus > 0 ? '+' : ''}
                        {dataManager.compaired_parcent_bonus}%
                      </span>
                    </div>
                  </div>
                  <div className={s.mediumBlock}>
                    {dataManager.bonus.toLocaleString('ru-RU')} ₽
                  </div>
                  <div className={s.bottomBlock}>
                    +Оклад — {dataManager.salary.toLocaleString('ru-RU')} ₽
                  </div>
                  <img className={s.image} src={money} alt="бабки"></img>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={s.infoBlock}>
          <div className={s.title}>Успехи отдела продаж</div>
          <div className={s.blocks}>
            {dataDepartment && (
              <>
                <InfoBlock
                  done={dataDepartment?.qty_deals}
                  goal={dataDepartment?.target_qty_deals}
                  growth={dataDepartment?.compared_percent_qty_deals}
                  title="Cделки"
                  description="Кол-во успешных сделок"
                />
                <InfoBlock
                  done={dataDepartment?.sum_deals}
                  goal={dataDepartment?.target_sum_deals}
                  growth={dataDepartment?.compared_percent_sum_deals}
                  title="Выручка"
                  description={'Сумма успешных сделок'}
                  сurrency
                />
                <InfoBlock
                  done={dataDepartment?.remainder_for_next_level}
                  goal={dataDepartment?.total_for_next_level}
                  growth={dataDepartment?.compared_percent_sum_deals}
                  title="Уровень"
                  description={'Осталось до следующего уровня'}
                  сurrency
                  levelNext={dataDepartment.bonus_level_total}
                  bonusLevel={dataDepartment.bonus_level}
                  percent={dataDepartment.current_percent_bonus_level}
                  nextPercent={dataDepartment.next_percent_bonus_level}
                />
              </>
            )}
          </div>
        </div>
        <div className={s.dealsBlock}>
          <div className={s.tableDeals}>
            <div className={s.title}>Сделки, которые требуют внимания</div>
            <TableDeals
              dataDeals={dataDeals}
              setTypeFilter={setTypeFilter}
              typeFilter={typeFilter}
            />
          </div>
          <div className={s.effectiveness}>
            <div className={s.title} style={{ marginBottom: '-1.2rem' }}>
              Личная эффективность
            </div>
            <div className={s.conversionRate}>
              <div className={s.titleBlock}>
                <span>Конверсия</span>
                <Icons name="Info" />
              </div>
              <div ref={svgRef} className={s.circleProgress}>
                <SemiCircleProgress
                  percentage={dataManager?.conversion_rate || 0}
                  size={{
                    width: 260,
                    height: 179,
                  }}
                  strokeWidth={10}
                  hasBackground
                  bgStrokeColor="rgba(237, 238, 241, 1)"
                />
              </div>
            </div>
            <Calls dataCalls={dataCalls} />
            <Messengers dataDialogues={dataDialogues} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

export default Statistics;
