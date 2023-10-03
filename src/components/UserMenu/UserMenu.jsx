import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.menuBox}>
      <p>Hello, {user.email}!</p>
      <button
        className={css.logout}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
