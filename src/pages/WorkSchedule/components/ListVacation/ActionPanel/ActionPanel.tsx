import { FC, memo, useCallback } from 'react';
import s from './ActionPanel.module.scss';
import { useDispatch } from 'react-redux';
import { addAlert } from 'store/AlertsSlice/AlertsSlice';

const ActionPanel: FC = memo(() => {
  const dispatch = useDispatch();
  const handleClickButton = useCallback(() => {
    dispatch(
      addAlert({ id: Date.now(), text: 'Функционал в разработке', variant: 'danger' }),
    );
  }, [dispatch, addAlert]);

  return (
    <div className={s.main}>
      <div onClick={handleClickButton} role="presentation" className={s.button}>
        Обжаловать
      </div>
      <div onClick={handleClickButton} role="presentation" className={s.button}>
        Редактировать
      </div>
    </div>
  );
});

export default ActionPanel;
