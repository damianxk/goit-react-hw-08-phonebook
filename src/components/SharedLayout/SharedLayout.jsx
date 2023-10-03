import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Hourglass } from 'react-loader-spinner';
import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className={css.header}>
        <div className={css.headerContainer}>
          <a
            href="https://damianxk.github.io/goit-react-hw-08-phonebook/"
            className={css.logo}
          >
            <h2>Phonebook</h2>
          </a>
          <nav className={css.navBox}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </nav>
        </div>
      </header>
      <main>
        <div>
          <Suspense
            fallback={
              <div className={css.big}>
                <Hourglass wrapperClass={css.center} />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer className={css.footer}>
        <p>Designed by Damian Kowalczyk for GoIT | 2023</p>
      </footer>
    </>
  );
};
