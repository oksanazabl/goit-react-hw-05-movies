import { Outlet, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <Link className={css.linkTo} to="/">
            Home
          </Link>
          <Link className={css.linkTo} to="/movies">
            Movies
          </Link>
        </nav>
      </header>
      <Outlet />
      <ToastContainer />
    </>
  );
};
