import { memo, useCallback, useState } from 'react';
import Logo from '../../../../../static/images/Logo.svg';

import s from './SidebarLeft.module.scss';
import SiderbarLeftMenu from 'shared/constants/SiderbarLeftMenu';
import Icons from './components/Icons';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const SidebarLeft = memo(() => {
  const [openServ, setOpenServ] = useState<boolean>(false);

  const habdleOpenServ = useCallback(() => setOpenServ((prev) => !prev), []);

  return (
    <aside className={s.sidebarLeft}>
      <div className={s.logo}>
        <img src={Logo} aria-label="Логотип" />
      </div>
      <div className={s.menu}>
        <div className={s.menuNavigate}>
          {SiderbarLeftMenu.map((el) => {
            if (el.path) {
              return (
                <NavLink
                  to={el.path}
                  className={({ isActive }) =>
                    cn(s.elementMenu, { [s.active]: isActive })
                  }
                  key={el.icon}
                >
                  {({ isActive }) => (
                    <>
                      <Icons name={el.icon} isActive={isActive} />
                      <span className={s.elementMenuText}>{el.text}</span>
                    </>
                  )}
                </NavLink>
              );
            } else if (el.text === 'Сервисы') {
              return (
                <div
                  role="presentation"
                  className={s.elementMenu}
                  key={el.icon}
                  onClick={habdleOpenServ}
                >
                  <Icons name={el.icon} />
                  <span className={s.elementMenuText}>{el.text}</span>
                </div>
              );
            }
            return null;
          })}
          {openServ && <div>Сервисы</div>}
        </div>
      </div>
    </aside>
  );
});

export default SidebarLeft;
