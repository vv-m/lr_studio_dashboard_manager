import React, { Dispatch, FC, memo, useCallback } from 'react';
import Tabs from 'shared/components/Tabs/Tabs';
import tabsTableCalls from 'shared/constants/TabsTableCalls';
import s from './Graph.module.scss';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Icons from 'shared/components/Icons/Icons';
import { getMonthInGenitive, getShortMonthName } from 'shared/utils/timeUtils';
import cn from 'classnames';

interface IGraph {
  setFilterGraphCalls: Dispatch<React.SetStateAction<'3' | '6' | '9'>>;
  filterGraphCalls: '3' | '6' | '9';
  dataCalls: IDataCalls | null;
}

const lineNames = {
  outgoing: 'Исходящие',
  incoming: 'Входящие',
  missed: 'Пропущенные',
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const { month, year } = payload[0].payload;

    return (
      <div className={s.customTooltip}>
        <p className={s.label}>{`${month} ${year}`}</p>
        {payload.map((entry: any, index: number) => {
          return (
            <div key={`item-${index}`} className={s.tooltipItem}>
              <div
                className={s.tooltipItemName}
              >{`${lineNames[entry.dataKey as 'outgoing' | 'incoming' | 'missed'] || entry.dataKey}`}</div>
              <div
                className={cn(s.tooltipItemValue, s[entry.dataKey])}
              >{`${entry.value}`}</div>
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};

const Graph: FC<IGraph> = memo(({ filterGraphCalls, setFilterGraphCalls, dataCalls }) => {
  const hadleChosePeriod = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilterGraphCalls(e.target.value as '3' | '6' | '9');
    },
    [setFilterGraphCalls],
  );

  const CustomXAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const { value } = payload;

    return (
      <text
        x={x}
        y={y}
        dy={16}
        textAnchor="middle"
        fill="#8E95A2"
        fontSize={12}
        fontWeight={400}
      >
        <tspan x={x} dy="1.2em">
          {getShortMonthName(value.split(' ')[0])}
        </tspan>
        <tspan x={x} dy="1.2em">
          {value.split(' ')[1]}
        </tspan>
      </text>
    );
  };

  const CustomYAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const { value } = payload;

    return (
      <text
        y={y}
        dy={1}
        textAnchor="middle"
        fill="#8E95A2"
        fontSize={12}
        fontWeight={400}
      >
        <tspan x={x} dy="0.4rem" dx={'-1rem'}>
          {value}
        </tspan>
      </text>
    );
  };

  return (
    <div className={s.main}>
      <div className={s.line}>
        <Tabs
          typeTabs={tabsTableCalls}
          isCheckedTab={filterGraphCalls}
          onChange={hadleChosePeriod}
        />
      </div>
      <div className={s.period}>
        <span
          className={s.periodMonth}
        >{`1 ${getMonthInGenitive(dataCalls?.periods[0].month || '')}`}</span>
        <span>{`${dataCalls?.periods[0].year}`}</span>
        <span
          className={s.periodMonth}
        >{`- 1 ${getMonthInGenitive(dataCalls?.periods.at(-1)?.month || '')}`}</span>
        <span>{`${dataCalls?.periods.at(-1)?.year}`}</span>
      </div>

      {dataCalls?.periods && (
        <div style={{ width: '100%', height: '207px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={dataCalls.periods}
              margin={{
                top: 0,
                right: 30,
                left: -15,
                bottom: 15,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey={(data) => `${data.month} ${data.year}`}
                tick={<CustomXAxisTick />}
              />
              <YAxis tick={<CustomYAxisTick />} />
              <Tooltip content={<CustomTooltip />} />

              <Line
                type="monotone"
                dataKey="outgoing"
                stroke="#36d001"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="incoming"
                stroke="#2FB8FF"
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="missed"
                stroke="#FF5821"
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className={s.legend}>
        <div>
          <Icons name="BlueCheck" />
          Входящие
        </div>
        <div>
          <Icons name="RedCheck" />
          Пропущенные
        </div>
        <div>
          <Icons name="GreenCheck" />
          Исходящие
        </div>
      </div>
    </div>
  );
});

export default Graph;
