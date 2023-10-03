import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import avatar from '../../images/blank-avatar.png';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const logForm = e.currentTarget;
    dispatch(
      logIn({
        email: logForm.elements.email.value,
        password: logForm.elements.password.value,
      })
    );
    logForm.reset();
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>PhoneBook - Login</title>
      </Helmet>
      <div className={css.container}>
        <form onSubmit={handleSubmit} className={css.loginForm}>
          <img
            src={avatar}
            alt="blank avatar"
            width="130"
            className={css.avatar}
          />
          <label className={css.formLabel}>
            E-mail
            <input
              type="email"
              name="email"
              className={css.formInput}
              title="Enter a valid email address."
              required
            />
          </label>
          <label className={css.formLabel}>
            Password
            <input
              type="password"
              name="password"
              className={css.formInput}
              required
            />
          </label>
          <button type="submit" className={css.formButton}>
            Login
          </button>
          <p>
            Don't have an account?{' '}
            <Link to="/register" className={css.link}>
              Register
            </Link>{' '}
            now!
          </p>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default Login;
