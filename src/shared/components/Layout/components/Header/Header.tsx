import { memo, useMemo } from 'react';
import getCurrentYearAndMonth from 'shared/utils/timeUtils';
import { useParams } from 'react-router-dom';
import getHeaderTitle from './utils/utilsHeader';

import s from './Header.module.scss';

const Header = memo(() => {
  const { chapter } = useParams();

  const title = useMemo(() => getHeaderTitle(chapter), [chapter]);

  return (
    <div className={s.header}>
      <span className={s.headerTitle}>{title}</span>
      {!chapter && (
        <span className={s.headerDate}>
          {getCurrentYearAndMonth().month}, {getCurrentYearAndMonth().year}
        </span>
      )}
    </div>
  );
});

export default Header;
