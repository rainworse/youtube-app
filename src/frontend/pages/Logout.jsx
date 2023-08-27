import { useContext } from 'react';
import UserContext from '../UserContext';
import { Navigate } from 'react-router-dom';
import LocalStorageDB from '../../backend/LocalStorageDB';

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);
  setCurrentUser(null);
  LocalStorageDB.storeUserSession(null);

  return <Navigate to={'/'} />;
};

export default Logout;
