import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Input.module.scss';

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label?: string;
  typeValue?: string;
  idInput?: string;
}

const uniqueId = uuidv4();

const Input: FC<IInput> = memo(({ label, typeValue, onChange, value, idInput }) => {
  const [, setInputText] = useState('');

  useEffect(() => {
    setInputText(value ? String(value).trim() : '');
  }, [value]);

  const hadlerChangeInputText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    onChange(e);
  }, []);

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
      <input
        className={s.input}
        type="number"
        id={idInput || uniqueId}
        name="length"
        min="0"
        placeholder="0"
        value={value}
        onChange={hadlerChangeInputText}
        onKeyDown={handleKeyDown}
      ></input>
      {typeValue && <span className={s.typeValue}>{typeValue}</span>}
    </div>
  );
});

export default Input;
