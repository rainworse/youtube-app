import LocalStorageDB from './backend/LocalStorageDB';
import Router from './frontend/Router';
import { useEffect, useState } from 'react';
import './frontend/styles/App.css';
import UserContext from './frontend/UserContext';
import { useBeforeUnload } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // LocalStorageDB.initDB();
    setCurrentUser(LocalStorageDB.getUserSession());
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <Router />
      </UserContext.Provider>
    </>
  );
}

export default App;
