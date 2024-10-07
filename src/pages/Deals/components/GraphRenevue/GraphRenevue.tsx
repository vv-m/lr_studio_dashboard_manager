import { FC, memo } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { getShortMonthName } from 'shared/utils/timeUtils';
import cn from 'classnames';
import IRenevue from 'pages/Deals/Deals.model';

import s from './GraphRenevue.module.scss';

const lineNames = {
  revenue: 'Выручка',
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { month, year } = payload[0].payload;

    return (
      <div className={s.customTooltip}>
        <p className={s.label}>{`${month} ${year}`}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className={s.tooltipItem}>
            <div
              className={s.tooltipItemName}
            >{`${lineNames[entry.dataKey as 'revenue'] || entry.dataKey}`}</div>
            <div className={cn(s.tooltipItemValue)}>
              {entry.value.toLocaleString('ru-RU')} руб
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

interface IGraphRenevue {
  dataRevenue: IRenevue[] | null;
}

const GraphRenevue: FC<IGraphRenevue> = memo(({ dataRevenue }) => {
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
        <tspan x={x} dy="0.4rem" dx={'-3rem'}>
          {value / 1000000} млн
        </tspan>
      </text>
    );
  };

  return (
    <>
      {dataRevenue && (
        <div style={{ width: '100%', height: '207px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={dataRevenue}
              margin={{
                top: 10,
                right: 60,
                left: 10,
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
                type="linear"
                dataKey="revenue"
                stroke="#8CE5FF"
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
});

export default GraphRenevue;
