import { FC, memo, useEffect, useRef } from 'react';
import Icons from '../Icons/Icons';
import { SemiCircleProgress } from 'react-semicircle-progressbar';
import TStatisticsManager from 'pages/Statistics/Statistics.model';

import s from './Conversion.module.scss';
import Tooltip from '../Tooltip/Tooltip';

interface IConversion {
  dataManager: TStatisticsManager | null;
  isDeals?: boolean;
}

const Conversion: FC<IConversion> = memo(({ dataManager, isDeals }) => {
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
    <div className={s.conversionRate}>
      <div className={s.titleBlock}>
        <span>{isDeals ? 'Что такое конверсия?' : 'Конверсия'}</span>
        <Tooltip isBackGrey isShown text="Информация о конверсии бла-бла-бла-бла" />
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
  );
});

export default Conversion;
