import { useContext } from 'react';
import '../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
import LocalStorageDB from '../../backend/LocalStorageDB';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const onLogin = (e) => {
    e.preventDefault();
    const userName = e.target.elements.username.value;
    setCurrentUser(userName);
    LocalStorageDB.storeUserSession(userName);
    navigate(-1);
  };

  return (
    <div className="login-page">
      <form onSubmit={onLogin}>
        <div className="login-page-inputs">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
          />
          <input type="submit" value="Login" id="login-button" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
