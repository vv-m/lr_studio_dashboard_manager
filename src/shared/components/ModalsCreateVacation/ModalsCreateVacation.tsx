import React, { memo, useCallback, useState } from 'react';
import s from './ModalsCreateVacation.module.scss';
import Icons from '../Icons/Icons';
import { useDispatch } from 'react-redux';
import { setModals } from 'store/ModalsSlice/ModalsSlice';
import Switcher from 'shared/UI/Switcher/Switcher';
import Input from 'shared/UI/Input/Input';
import adjustDate, { formatDateToISO } from './ModalsCreateVacation.utils';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';
import useListVacationHttpController from 'shared/http/useListVacationHttpController';
import { addAlert } from 'store/AlertsSlice/AlertsSlice';
import { addVacation } from 'store/VacationSlice/VacationSlice';

const OPTIONS = ['Оплачиваемый отпуск', 'Отгул'];

const OPTIONS_PROPERTY = ['В счет отпуска', 'За свой счёт'];

const ModalsCreateVacation = memo(() => {
  const dispatch = useDispatch();

  const [dataForm, setDataForm] = useState({
    vacation_type: 'Оплачиваемый отпуск',
    start_date: '',
    type_property: 'В счет отпуска',
    end_date: '',
    comment: '',
  });

  const [errors, setErrors] = useState({
    start_date: false,
    end_date: false,
    comment: false,
  });

  const { postCreateApplicationVacation } = useListVacationHttpController();

  const isFormValid = useCallback(() => {
    if (dataForm.vacation_type === 'Отгул') {
      return dataForm.start_date.trim() !== '';
    } else {
      return dataForm.start_date.trim() !== '' && dataForm.end_date.trim() !== '';
    }
  }, [dataForm]);

  const handleClose = useCallback(() => {
    dispatch(setModals({ key: 'createApplication', value: false }));
  }, [dispatch, setModals]);

  const handleChangeVacation = useCallback((vacation: string) => {
    setDataForm((prev) => ({ ...prev, vacation_type: vacation }));
  }, []);

  const handleChangeProperty = useCallback((property: string) => {
    setDataForm((prev) => ({ ...prev, type_property: property }));
  }, []);

  const handlerChangeFromDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDataForm((prev) => ({ ...prev, start_date: e.target.value }));
      setErrors((prev) => ({ ...prev, start_date: e.target.value.trim() === '' }));
    },
    [setDataForm],
  );

  const handlerChangeToDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDataForm((prev) => ({ ...prev, end_date: e.target.value }));
      setErrors((prev) => ({ ...prev, end_date: e.target.value.trim() === '' }));
    },
    [setDataForm],
  );

  const handlerChangeComment = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDataForm((prev) => ({ ...prev, comment: e.target.value }));
      setErrors((prev) => ({ ...prev, comment: e.target.value.trim() === '' }));
    },
    [setDataForm],
  );

  const createVacationApplication = useCallback(async () => {
    const updateData = {
      comment: dataForm.comment,
      end_date: dataForm.end_date ? formatDateToISO(dataForm.end_date) : '',
      start_date: formatDateToISO(dataForm.start_date),
      vacation_type: dataForm.end_date ? 'paid' : 'unpaid',
    };
    const data = await postCreateApplicationVacation(updateData);
    if (data) {
      dispatch(addVacation(data));
    }
    handleClose();
    dispatch(
      addAlert({
        id: Date.now(),
        variant: data ? 'success' : 'danger',
        text: data ? 'Заявка создана' : 'Ошибка, попробуйте снова',
      }),
    );
  }, [dataForm, dispatch, handleClose, addAlert]);

  return (
    <div className={s.main}>
      <div className={s.header}>
        <div>🌴 Новая заявка на отпуск</div>
        <div className={s.icon} onClick={handleClose} role="presentation">
          <Icons name="XCross" />
        </div>
      </div>
      <div className={s.form}>
        <div className={s.switcher}>
          <Switcher
            options={OPTIONS}
            onChange={handleChangeVacation}
            label="Тип отпуска"
            selectedOption={dataForm.vacation_type}
          />
        </div>
        {dataForm.vacation_type === 'Отгул' && (
          <AnimatePresence>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={s.switcher}
            >
              <Switcher
                options={OPTIONS_PROPERTY}
                onChange={handleChangeProperty}
                label="Свойство"
                selectedOption={dataForm.type_property}
              />
            </motion.div>
          </AnimatePresence>
        )}
        <div className={s.inputs}>
          <div className={s.wrapperInput}>
            <Input
              onChange={handlerChangeFromDate}
              value={dataForm.start_date}
              label={dataForm.vacation_type === 'Отгул' ? 'Дата' : 'Дата начала'}
              idInput="Дата начала"
              mask="99.99.9999"
            />
            <div className={s.iconInsideInput}>
              <Icons name="RabGrafik" color="#8E95A2" />
            </div>
          </div>
          {dataForm.vacation_type !== 'Отгул' && (
            <div className={s.inputs}>
              <div className={s.wrapperInput}>
                <Input
                  onChange={handlerChangeToDate}
                  value={dataForm.end_date}
                  label="Дата завершения"
                  idInput="Дата завершения"
                  mask="99.99.9999"
                />
                <div className={s.iconInsideInput}>
                  <Icons name="RabGrafik" color="#8E95A2"></Icons>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={s.notification}>
          <div>
            {dataForm.start_date && (
              <div>
                {dataForm.vacation_type === 'Отгул'
                  ? adjustDate(dataForm.start_date, 1)
                  : adjustDate(dataForm.start_date, -1)}
              </div>
            )}
          </div>
          <div>{dataForm.end_date && <div>{adjustDate(dataForm.end_date, 1)}</div>}</div>
        </div>
        <div className={s.wrapperTextarea}>
          <div>Комментарий</div>
          <textarea
            value={dataForm.comment}
            onChange={handlerChangeComment}
            className={s.textarea}
          ></textarea>
        </div>
        <div>
          <button
            disabled={!isFormValid()}
            className={cn(s.button, { [s.disabled]: !isFormValid() })}
            onClick={createVacationApplication}
          >
            <span>Отправить заявку</span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default ModalsCreateVacation;
