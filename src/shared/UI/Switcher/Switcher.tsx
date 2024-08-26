import React, { FC, memo } from 'react';
import cn from 'classnames';

import s from './Switcher.module.scss';

interface ISwitcher {
  options: string[];
  onChange: (option: string) => void;
  label?: string;
  selectedOption: string;
}

const Switcher: FC<ISwitcher> = memo(({ options, onChange, label, selectedOption }) => {
  const handleOptionClick = (option: string) => {
    onChange(option);
  };

  return (
    <div className={s.switchContainer}>
      {label && <label className={s.label}>{label}</label>}
      <div className={s.buttons}>
        {options.map((option) => (
          <button
            key={option}
            className={cn(s.switchButton, { [s.active]: selectedOption === option })}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
});

export default Switcher;
