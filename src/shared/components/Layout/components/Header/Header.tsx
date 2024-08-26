import { memo, useMemo } from 'react';
import getCurrentYearAndMonth from 'shared/utils/timeUtils';
import { useLocation, useParams } from 'react-router-dom';
import getHeaderTitle from './utils/utilsHeader';

import s from './Header.module.scss';

const Header = memo(() => {
  const { pathname } = useLocation();

  console.log(pathname);

  const title = useMemo(() => getHeaderTitle(pathname), [pathname]);

  return (
    <div className={s.header}>
      <span className={s.headerTitle}>{title}</span>
      {pathname === '/' && (
        <span className={s.headerDate}>
          {getCurrentYearAndMonth().month}, {getCurrentYearAndMonth().year}
        </span>
      )}
    </div>
  );
});

export default Header;
