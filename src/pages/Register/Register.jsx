import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const regForm = e.currentTarget;
    dispatch(
      register({
        name: regForm.elements.username.value,
        email: regForm.elements.email.value,
        password: regForm.elements.password.value,
      })
    );
    regForm.reset();
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>PhoneBook - Register</title>
      </Helmet>
      <form onSubmit={handleSubmit} className={css.registerForm}>
        <label className={css.formLabel}>
          Username:
          <input
            type="text"
            name="username"
            className={css.formInput}
            pattern="[a-zA-Z0-9_-]{3,20}"
            title="Name may contain only letters, numbers, dashes and underscores."
            required
          />
        </label>
        <label className={css.formLabel}>
          E-mail:
          <input
            type="email"
            name="email"
            className={css.formInput}
            pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Enter a valid email address."
            required
          />
        </label>
        <label className={css.formLabel}>
          Password:
          <input
            type="password"
            name="password"
            className={css.formInput}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            title="The password should contain at least 8 characters, including at least one lowercase letter, one uppercase letter and one number."
            required
          />
        </label>
        <button type="submit" className={css.formButton}>
          Register
        </button>
        <p className={css.haveAccountInfo}>
          Already have an account?{' '}
          <Link to="/login" className={css.logLink}>
            Log in!
          </Link>
        </p>
      </form>
    </HelmetProvider>
  );
};

export default Register;
