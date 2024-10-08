import { FC, memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';
import Icons from '../Icons/Icons';
import s from './Tooltip.module.scss';

export interface ITooltipProps {
  text?: string;
  isShown: boolean;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  isBackGrey?: boolean;
}

const Tooltip: FC<ITooltipProps> = memo(
  ({ text, isShown, placement = 'bottom', isBackGrey = false }) => (
    <AnimatePresence>
      {isShown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cn(s.wrapper, s[placement])}
        >
          {!!text && (
            <div className={cn(s.text, { [s.backGrey]: isBackGrey })}>{text}</div>
          )}
          <div>
            <Icons name="Info" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  ),
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
