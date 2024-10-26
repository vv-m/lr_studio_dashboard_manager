import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import s from './Input.module.scss';

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label?: string;
  typeValue?: string;
  idInput?: string;
  mask?: string;
}

const Input: FC<IInput> = memo(({ label, typeValue, onChange, value, idInput, mask }) => {
  const [, setInputText] = useState('');

  useEffect(() => {
    setInputText(value ? String(value).trim() : '');
  }, [value]);

  const hadlerChangeInputText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
      onChange(e);
    },
    [onChange],
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      ',',
      'Backspace',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
    ];
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      return;
    }
    if (!allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  }, []);

  return (
    <div className={s.main}>
      {label && <label className={s.label}>{label}</label>}
      <InputMask
        className={s.input}
        mask={mask || ''}
        id={idInput}
        value={value}
        onChange={hadlerChangeInputText}
        onKeyDown={handleKeyDown}
        placeholder="дд.мм.гггг"
      />
      {typeValue && <span className={s.typeValue}>{typeValue}</span>}
    </div>
  );
});

export default Input;
