import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './Home.module.css';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <HelmetProvider>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <div className={css.homeBox}>
        <h1 className={css.title}>
          Keep your contacts safe and organize them easily!
        </h1>
        {isLoggedIn && (
          <>
            <p>Thank You for chosing PhoneBook!</p>
            <p>We are glad You are here!</p>
            <p>If you want You can logout here:</p>
            <button
              className={css.logout}
              type="button"
              onClick={() => dispatch(logOut())}
            >
              Logout
            </button>
          </>
        )}
        {isLoggedIn ? null : (
          <p>
            <Link to="/login" className={css.link}>
              Login
            </Link>{' '}
            or{' '}
            <Link to="/register" className={css.link}>
              register
            </Link>{' '}
            now!
          </p>
        )}
      </div>
    </HelmetProvider>
  );
};

export default Home;
