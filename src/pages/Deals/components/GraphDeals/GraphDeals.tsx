import { IDeal } from 'pages/Deals/Deals.model';
import React, { FC, memo } from 'react';
import s from './GraphDeals.module.scss';
import cn from 'classnames';
import { getShortMonthName } from 'shared/utils/timeUtils';
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

const lineNames = {
    successful_deals: 'Успешные сделки',
    total_deals: 'Сделки с изменениями',
    conversion: 'Коонверсия',
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
            >{`${lineNames[entry.dataKey as 'conversion' | 'successful_deals' | 'total_deals'] || entry.dataKey}`}</div>
            <div className={cn(s.tooltipItemValue, s[entry.dataKey])}>
              {entry.value}
              {entry.dataKey === 'conversion' && '%'}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

interface IGraphDeals {
  dataDeals: IDeal[] | null;
}

const GraphDeals: FC<IGraphDeals> = memo(({ dataDeals }) => {
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

  const CustomYAxisTickRight = (props: any) => {
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
        <tspan x={x} dy="0.4rem" dx={'2rem'}>
          {value} %
        </tspan>
      </text>
    );
  };

  return (
    <>
      {dataDeals && (
        <div style={{ width: '100%', height: '207px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={dataDeals}
              margin={{
                top: 10,
                right: 0,
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
              <YAxis
                tick={<CustomYAxisTickRight />}
                orientation="right"
                yAxisId="right"
              />
              <Tooltip content={<CustomTooltip />} />

              <Line
                type="linear"
                dataKey="conversion"
                stroke="#FF5821"
                activeDot={{ r: 6 }}
                yAxisId="right"
              />
              <Line
                type="linear"
                dataKey="successful_deals"
                stroke="#36D000"
                activeDot={{ r: 6 }}
              />
              <Line
                type="linear"
                dataKey="total_deals"
                stroke="#2FB8FF"
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className={s.legend}>
        <div>
          <Icons name="BlueCheck" />
          Сделки с изменениями
        </div>
        <div>
          <Icons name="RedCheck" />
          Конверсия
        </div>
        <div>
          <Icons name="GreenCheck" />
          Успешные сделки
        </div>
      </div>
    </>
  );
});

export default GraphDeals;
