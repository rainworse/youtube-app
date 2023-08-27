import { useContext } from 'react';
import UserContext from '../UserContext';
import { Link } from 'react-router-dom';

const LoginLogoutField = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="header-login-logout">
      {currentUser === null ? (
        <div className="header-login-link">
          <Link to={'login'} className="header-login-anchor">
            Login
          </Link>
        </div>
      ) : (
        <div className="header-logout">
          <div className="header-profile-text">
            <div className="header-user-name">{currentUser}</div>
            <Link to={'logout'} className="header-logout-anchor">
              Logout
            </Link>
          </div>
          <img
            src={window.location.origin + '/public/assets/profile.svg'}
            alt="profile"
            className="header-profile-image"
          />
        </div>
      )}
    </div>
  );
};

export default LoginLogoutField;
