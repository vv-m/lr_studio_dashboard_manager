import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, memo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './WrapperModal.module.scss';

interface IWrapperModal {
  children: JSX.Element;
  header?: string;
  onClose: () => void;
}

const MODAL_ROOT = document.getElementById('modals') || document.body;

const WrapperModal: FC<IWrapperModal> = memo(({ children, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        transition={{ duration: 0.2, delay: 0.1, ease: 'easeInOut' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{
          opacity: 0,
          scale: 0.8,
          transition: {
            duration: 0.2,
          },
        }}
        className={s.main}
      >
        {children}
      </motion.div>
    </AnimatePresence>,
    MODAL_ROOT,
  );
});

export default WrapperModal;
