import cn from 'classnames';
import { FC } from 'react';
import ISharedTabs from 'shared/dto/tabs.dto';

import s from './Tabs.module.scss';

interface ITabs {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isCheckedTab: string;
  typeTabs: ISharedTabs;
}

const Tabs: FC<ITabs> = ({ onChange, isCheckedTab, typeTabs }) => (
  <div className={s.navTabs}>
    <ul className={s.navTabsList}>
      {Object.entries(typeTabs).map(([key, dep]) => (
        <li
          key={key}
          className={cn(s.navTabsItem, { [s.navTabsItemActive]: isCheckedTab === key })}
        >
          <label htmlFor={key} className={s.label}>
            <input
              id={key}
              onChange={onChange}
              checked={isCheckedTab === key}
              value={key}
              className={s.navTabsInput}
              type="radio"
            />
            {dep.title}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default Tabs;
