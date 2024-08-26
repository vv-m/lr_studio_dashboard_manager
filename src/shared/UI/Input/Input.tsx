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
      ></input>
      {typeValue && <span className={s.typeValue}>{typeValue}</span>}
    </div>
  );
});

export default Input;
