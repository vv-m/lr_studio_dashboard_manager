import { AnimatePresence, motion } from 'framer-motion';
import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import s from './PageAlerts.module.scss';
import Alert from './components/Alert';

const PageAlerts: FC = memo(() => {
  const { pageAlerts } = useSelector((state: RootState) => state.alerts);

  if (!pageAlerts.length) return null;

  return (
    <div className={s.alerts}>
      {pageAlerts.map((pageAlert) => (
        <AnimatePresence>
          <motion.div
            key={pageAlert.id}
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 100,
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Alert id={pageAlert.id} text={pageAlert.text} variant={pageAlert.variant} />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
});

PageAlerts.displayName = 'Page Alerts';

export default PageAlerts;
