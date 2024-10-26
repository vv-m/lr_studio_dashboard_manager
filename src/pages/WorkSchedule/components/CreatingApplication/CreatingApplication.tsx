import React, { memo } from 'react';
import s from './CreatingApplication.module.scss';
import { useDispatch } from 'react-redux';
import { setModals } from 'store/ModalsSlice/ModalsSlice';

const CreatingApplication = memo(() => {
  const dispatch = useDispatch();

  return (
    <div className={s.main}>
      <div className={s.title}>
        <span className={s.titleMain}>Заявка на отпуск</span>
        <span className={s.titleSecondary}>Отдохни, если положено</span>
      </div>
      <button
        type="button"
        onClick={() => dispatch(setModals({ key: 'createApplication', value: true }))}
        className={s.button}
      >
        Создать
      </button>
    </div>
  );
});

export default CreatingApplication;
