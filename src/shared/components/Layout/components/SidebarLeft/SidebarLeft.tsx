import { memo, useCallback, useState } from 'react';
import Logo from '../../../../../static/images/Logo.svg';
import Avatar from '../../../../../static/images/Avatar.png';
import SiderbarLeftMenu, {
  SiderbarLeftServises,
} from 'shared/constants/SiderbarLeftMenu';
import { NavLink, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import Icons from 'shared/components/Icons/Icons';

import s from './SidebarLeft.module.scss';

const SidebarLeft = memo(() => {
  const navigate = useNavigate();

  const [openServ, setOpenServ] = useState<boolean>(false);

  const habdleOpenServ = useCallback(() => setOpenServ((prev) => !prev), []);

  const handleGoMain = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <aside className={s.sidebarLeft}>
      <div className={s.logo} onClick={handleGoMain} role="presentation">
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
                  className={s.elementMenuServises}
                  key={el.icon}
                  onClick={habdleOpenServ}
                >
                  <div>
                    <Icons name={el.icon} />
                    <span className={s.elementMenuText}>{el.text}</span>
                  </div>
                  <div className={cn(s.arrow, { [s.open]: openServ })}>
                    <Icons name={'Arrow'} />
                  </div>
                </div>
              );
            }
            return null;
          })}
          {openServ && (
            <div>
              {SiderbarLeftServises.map((el) => (
                <NavLink
                  to={el.path}
                  className={({ isActive }) =>
                    cn(s.elementServices, { [s.active]: isActive })
                  }
                  key={el.text}
                >
                  {({ isActive }) => (
                    <>
                      <Icons name={el.icon} isActive={isActive}></Icons>
                      <div className={s.elementServicesText}>{el.text}</div>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div className={s.userInfo}>
          <img src={Avatar} aria-label="Аватар"></img>
          <div>
            <div className={s.userInfoName}>Владислав</div>
            <div className={s.userInfoEmail}>example@lrstudio.ru</div>
          </div>
        </div>
      </div>
    </aside>
  );
});

export default SidebarLeft;
