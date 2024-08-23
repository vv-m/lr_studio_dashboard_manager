import { FC, memo } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import SidebarLeft from './components/SidebarLeft';

import s from './Layout.module.scss';

const Layout: FC = memo(() => {
  return (
    <section className={s.layout}>
      <SidebarLeft />
      <section className={s.content}>
        <Header />
        <div className={s.contentMain}>
          <Outlet />
        </div>
      </section>
    </section>
  );
});

export default Layout;
