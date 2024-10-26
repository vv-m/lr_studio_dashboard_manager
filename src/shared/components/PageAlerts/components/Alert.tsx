import { FC, memo, useCallback, useEffect } from 'react';
import s from './Alert.module.scss';
import Icons from 'shared/components/Icons/Icons';
import { useDispatch } from 'react-redux';
import { removeAlert } from 'store/AlertsSlice/AlertsSlice';

interface IAlert {
  id: number;
  text: string;
  variant: string;
}

const TIME_CLOSE_ALERT = 100;

const Alert: FC<IAlert> = memo(({ id, text, variant }) => {
  const dispatch = useDispatch();

  const handleAlertClose = useCallback(() => {
    const timer = setTimeout(() => {
      dispatch(removeAlert(id));
    }, TIME_CLOSE_ALERT);
    return () => clearTimeout(timer);
  }, [id, dispatch]);

  useEffect(
    () => () => {
      if (handleAlertClose) {
        handleAlertClose();
      }
    },
    [handleAlertClose],
  );

  return (
    <div className={s.main}>
      <div className={s.info}>
        <Icons name={variant === 'success' ? 'StatusOk' : 'StatusFailed'}></Icons>
        {text}
      </div>
      <div className={s.iconWrapper} onClick={handleAlertClose} role="presentation">
        <Icons name="XCross"></Icons>
      </div>
    </div>
  );
});

export default Alert;
