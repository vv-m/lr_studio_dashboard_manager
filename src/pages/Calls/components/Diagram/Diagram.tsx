import React, { FC, memo, useMemo } from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import s from './Diagram.module.scss';

interface IDiagram {
  dataCalls: IDataCalls | null;
}

const GRADIENTS = [
  // 1 цвет для входящих
  { id: 'gradient2', startColor: '#36D000', endColor: '#B6FF92' },
  // 2 цвет для исходящих
  { id: 'gradient1', startColor: '#BBEEFF', endColor: '#2FB8FF' },
  // 3 цвет для пропущенных
  { id: 'gradient3', startColor: '#FF5821', endColor: '#FFC9A8' },
];

const Diagram: FC<IDiagram> = memo(({ dataCalls }) => {
  const dataForDiagramm = useMemo(() => {
    return [
      { value: dataCalls?.periods?.reduce((acc, el) => acc + el.outgoing, 0) },
      {
        value: dataCalls?.periods?.reduce((acc, el) => acc + el.incoming, 0),
      },
      { value: dataCalls?.periods?.reduce((acc, el) => acc + el.missed, 0) },
    ];
  }, [dataCalls]);

  const fullSumm = useMemo(() => {
    return dataForDiagramm.reduce((acc, el) => acc + (el?.value || 0), 0);
  }, [dataCalls]);

  const outgoingPersent = useMemo(() => {
    const onePercent = fullSumm / 100;
    return Number(dataForDiagramm[0].value) / onePercent;
  }, [dataForDiagramm]);

  return (
    <div className={s.main}>
      <div className={s.diagram}>
        <PieChart width={290} height={290}>
          <defs>
            {GRADIENTS.map((gradient) => (
              <linearGradient
                id={gradient.id}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                key={gradient.id}
              >
                <stop offset="0%" stopColor={gradient.startColor} />
                <stop offset="100%" stopColor={gradient.endColor} />
              </linearGradient>
            ))}
          </defs>

          <Pie
            data={dataForDiagramm}
            innerRadius={100}
            outerRadius={140}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
          >
            {dataForDiagramm.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#${GRADIENTS[index % GRADIENTS.length].id})`}
              />
            ))}
          </Pie>
        </PieChart>
        <div className={s.allTell}>
          <span className={s.allTellValue}>{fullSumm}</span>
          <span className={s.allTellText}>Всего звонков</span>
        </div>
      </div>
      <div className={s.infoOutgoing}>
        <div className={s.infoOutgoingGreenLine} />
        <span> Исходящие {Math.floor(outgoingPersent)}%</span>
      </div>
    </div>
  );
});

export default Diagram;
