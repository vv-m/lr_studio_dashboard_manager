import { memo } from 'react';
import InfoBlock from './components/InfoBlock/InfoBlock';
import Icons from 'shared/components/Icons/Icons';
import cn from 'classnames';
import money from 'static/images/money.png';
import { AnimatePresence, motion } from 'framer-motion';
import Calls from './components/Calls/Calls';
import Messengers from './components/Messengers/Messengers';
import TableDeals from './components/TableDeals/TableDeals';

import s from './Statistics.module.scss';
import useStatistics from './hooks/useStatistics';
import Conversion from 'shared/components/Conversion/Conversion';

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
            <Conversion dataManager={dataManager} />
            <Calls dataCalls={dataCalls} />
            <Messengers dataDialogues={dataDialogues} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

export default Statistics;
